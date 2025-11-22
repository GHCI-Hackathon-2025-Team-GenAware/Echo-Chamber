# backend/app/schemas.py
# Compatible with Pydantic v2 (pydantic>=2.0)
from pydantic import BaseModel, Field, HttpUrl
from typing import Optional, List, Dict

class AnalyzeRequest(BaseModel):
    text: Optional[str] = Field(None, description="Article or snippet text")
    url: Optional[HttpUrl] = Field(None, description="Original article URL")
    language: Optional[str] = Field('en', description="Language code, e.g. 'en'")

class AnalyzeResponse(BaseModel):
    bias_score: float = Field(..., ge=0.0, le=1.0)
    sentiment: str  # e.g. "positive", "neutral", "negative"
    stance: str     # e.g. "pro", "neutral", "anti"
    echo_chamber_score: float = Field(..., ge=0.0, le=1.0)
    recommendations: List[str]
    metadata: Optional[Dict[str, str]] = None

class HealthResponse(BaseModel):
    status: str
    version: str = "0.1.0"
