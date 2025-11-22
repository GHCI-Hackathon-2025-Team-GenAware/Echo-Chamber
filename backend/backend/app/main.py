# backend/app/main.py
# Upgraded to work with FastAPI + Pydantic v2 (Python 3.13 compatible)
from fastapi import FastAPI, HTTPException, Depends, Header, Request
from fastapi.responses import JSONResponse
from .schemas import AnalyzeRequest, AnalyzeResponse, HealthResponse
from .ml_service import analyze_text
from .auth import verify_token
from .logger_config import logger
from typing import Optional

app = FastAPI(title="EchoChamberShield - Core API (Pydantic v2)", version="0.2.0")

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Incoming request: {request.method} {request.url}")
    try:
        response = await call_next(request)
        logger.info(f"Completed {request.method} {request.url} -> {response.status_code}")
        return response
    except Exception:
        logger.exception("Unhandled exception")
        raise

@app.get("/health", response_model=HealthResponse)
def health():
    return {"status": "ok", "version": "0.2.0"}

def optional_auth(authorization: Optional[str] = Header(None)):
    if authorization is None:
        return None
    if authorization.startswith("Bearer "):
        token = authorization.split(" ", 1)[1]
    else:
        token = authorization
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")
    return payload

@app.post("/analyze", response_model=AnalyzeResponse)
def analyze(req: AnalyzeRequest, auth=Depends(optional_auth)):
    if not (req.text or req.url):
        raise HTTPException(status_code=400, detail="Either 'text' or 'url' must be provided")
    text_to_analyze = req.text or ""
    try:
        result = analyze_text(text_to_analyze, language=req.language)
        resp = AnalyzeResponse(
            bias_score=result["bias_score"],
            sentiment=result["sentiment"],
            stance=result["stance"],
            echo_chamber_score=result["echo_chamber_score"],
            recommendations=result.get("recommendations", []),
            metadata={"source_url": req.url} if req.url else None
        )
        return resp
    except Exception:
        logger.exception("ML service error")
        raise HTTPException(status_code=500, detail="Analysis failed")

@app.post("/score", response_model=AnalyzeResponse)
def score(req: AnalyzeRequest, auth=Depends(optional_auth)):
    return analyze(req, auth=auth)

@app.post("/recommendations")
def recommendations(req: AnalyzeRequest, auth=Depends(optional_auth)):
    if not (req.text or req.url):
        raise HTTPException(status_code=400, detail="Either 'text' or 'url' must be provided")
    try:
        res = analyze_text(req.text or "", language=req.language)
        return JSONResponse(
            status_code=200,
            content={
                "recommendations": res.get("recommendations", []),
                "bias_score": res.get("bias_score"),
                "echo_chamber_score": res.get("echo_chamber_score")
            }
        )
    except Exception:
        logger.exception("Failed to produce recommendations")
        raise HTTPException(status_code=500, detail="Failed to produce recommendations")
