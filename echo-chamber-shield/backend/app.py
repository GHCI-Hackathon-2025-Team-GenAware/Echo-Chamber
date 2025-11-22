from fastapi import FastAPI
from backend.routers import analyze, history, mentor

app = FastAPI(
    title="EchoChamberShield Backend",
    version="1.0.0"
)

app.include_router(analyze.router, prefix="/analyze")
app.include_router(history.router, prefix="/history")
app.include_router(mentor.router, prefix="/mentor")

@app.get("/")
def home():
    return {"message": "Backend is running!"}
