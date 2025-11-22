from fastapi import APIRouter

from ..services.storage import get_history



router = APIRouter()

@router.get("/")
def fetch_history(user_id: str):
    return get_history(user_id)
