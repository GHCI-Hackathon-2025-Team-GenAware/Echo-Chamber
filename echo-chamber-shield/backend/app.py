from fastapi import FastAPI
from .routers import analyze, history, mentor  # note the leading dot

app = FastAPI(
    title="EchoChamberShield Backend",
    version="1.0.0"
)

# Include routers
app.include_router(analyze.router, prefix="/api")
app.include_router(history.router, prefix="/api")
app.include_router(mentor.router, prefix="/api")


@app.get("/")
def home():
    return {"message": "Backend is running!"}
