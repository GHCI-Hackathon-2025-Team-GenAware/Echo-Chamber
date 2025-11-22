# backend/app/auth.py
# Minimal JWT helper (suitable for dev/prototype). Replace secret with env var in prod.
import time
import jwt
from typing import Optional

SECRET = "replace-me-with-secure-secret"  # production: load from env
ALGORITHM = "HS256"
EXP_SECONDS = 60 * 60 * 24  # 1 day

def create_token(sub: str, expires_in: Optional[int] = None) -> str:
    exp = int(time.time()) + (expires_in or EXP_SECONDS)
    payload = {"sub": sub, "exp": exp}
    token = jwt.encode(payload, SECRET, algorithm=ALGORITHM)
    return token

def verify_token(token: str) -> Optional[dict]:
    try:
        payload = jwt.decode(token, SECRET, algorithms=[ALGORITHM])
        return payload
    except Exception:
        return None
