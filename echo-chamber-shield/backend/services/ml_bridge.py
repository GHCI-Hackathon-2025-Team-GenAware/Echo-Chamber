import sys, os
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from ml.analyzer import analyze_article

def analyze_text(text: str):
    result = analyze_article(text)

    return {
        "bias": {"label": result["bias_label"], "confidence": 1.0},
        "sentiment": {"label": "N/A", "score": 0.0},
        "polarity": result["polarity"],
        "variance": result["variance"],
        "ei_index": result["ei_index"],
        "mixing": result["mixing"],
        "echo_chamber_score": result["echo_score"],
        "echo_chamber_level": (
            "High Echo Chamber" if result["echo_score"] > 70 else
            "Moderate Echo Chamber" if result["echo_score"] > 40 else
            "Low Echo Chamber"
        ),
        "explanations": result["explanations"],
    }
