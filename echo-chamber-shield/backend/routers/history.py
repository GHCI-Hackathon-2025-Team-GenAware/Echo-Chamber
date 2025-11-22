from fastapi import APIRouter
from backend.services.storage import get_history


router = APIRouter()

@router.get("/")
def fetch_history(user_id: str):
    return get_history(user_id)
