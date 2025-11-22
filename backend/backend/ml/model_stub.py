# backend/ml/model_stub.py
from typing import Dict
import random

def analyze_text(text: str, language: str = "en") -> Dict:
    if not text:
        text = ""

    length = len(text)
    bias_score = min(1.0, (sum(ord(c) for c in text) % 100) / 100.0) if text else 0.5
    echo_chamber_score = min(1.0, (length % 100) / 100.0)
    sentiment = random.choice(["positive", "neutral", "negative"])
    stance = random.choice(["pro", "neutral", "anti"])

    recs = [
        "Read a neutral explainer from a verified outlet.",
        "Follow at least one community/grassroots source.",
        "Check fact-checkers for claims in the article."
    ]
    return {
        "bias_score": round(bias_score, 4),
        "sentiment": sentiment,
        "stance": stance,
        "echo_chamber_score": round(echo_chamber_score, 4),
        "recommendations": recs,
    }
