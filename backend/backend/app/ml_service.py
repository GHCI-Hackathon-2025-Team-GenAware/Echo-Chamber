# backend/app/ml_service.py
from ml.model_stub import analyze_text as analyze_text_impl
from typing import Dict

def analyze_text(text: str, language: str = "en") -> Dict:
    return analyze_text_impl(text=text, language=language)
