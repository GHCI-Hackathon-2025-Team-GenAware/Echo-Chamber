from fastapi import APIRouter
from ..services.storage import get_history
from ..services.ml_bridge import analyze_text


router = APIRouter()

@router.get("/")
def mentor(user_id: str):
    history = get_history(user_id)

    if not history:
        return {"advice": "Analyze some articles first!"}

    score = history[-1]["echo_chamber_score"]

    if score > 70:
        advice = "You are consuming heavily one-sided content. Try checking neutral explainers."
    elif score > 40:
        advice = "Your feed is moderately skewed. Diversify your reading a little."
    else:
        advice = "Your feed is balanced. Continue exploring multiple viewpoints!"

    return {"advice": advice}
