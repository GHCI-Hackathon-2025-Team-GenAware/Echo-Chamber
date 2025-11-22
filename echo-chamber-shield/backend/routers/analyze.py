from fastapi import APIRouter
from ..schemas.analyze_schema import AnalyzeRequest
from ..services.storage import save_history
from ..services.ml_bridge import analyze_text



router = APIRouter()

@router.post("/analyze")
def analyze(req: AnalyzeRequest):
    result = analyze_text(req.text)

    # save analysis for history
    save_history(req.user_id, result)

    return result


# TEMP MOCK ENDPOINT (for Person 1 to develop early)
@router.get("/mock")
def mock_analysis():
    return {
        "bias": {"label": "Neutral", "confidence": 0.8},
        "sentiment": {"label": "Calm", "score": 0.6},
        "echo_chamber_score": 52,
        "echo_chamber_level": "Moderate Echo Chamber",
        "explanations": ["Your recent content is somewhat polarized."],
    }
