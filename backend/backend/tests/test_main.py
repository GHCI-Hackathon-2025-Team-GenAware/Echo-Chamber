# backend/tests/test_main.py
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.auth import create_token

client = TestClient(app)

def test_health():
    r = client.get("/health")
    assert r.status_code == 200
    data = r.json()
    assert data["status"] == "ok"
    assert "version" in data

def test_analyze_missing_body():
    r = client.post("/analyze", json={})
    assert r.status_code == 400

def test_analyze_basic():
    payload = {"text": "This is a short test article about local events.", "language": "en"}
    r = client.post("/analyze", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert "bias_score" in data
    assert "sentiment" in data
    assert "stance" in data
    assert "recommendations" in data

def test_score_alias():
    payload = {"text": "Another test", "language": "en"}
    r = client.post("/score", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert "echo_chamber_score" in data

def test_recommendations_endpoint():
    payload = {"text": "Check this politically charged claim", "language": "en"}
    r = client.post("/recommendations", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert "recommendations" in data

def test_optional_auth_ok():
    token = create_token("test-user")
    headers = {"Authorization": f"Bearer {token}"}
    payload = {"text": "Auth test", "language": "en"}
    r = client.post("/analyze", json=payload, headers=headers)
    assert r.status_code == 200

def test_optional_auth_bad_token():
    headers = {"Authorization": "Bearer bad.token.here"}
    payload = {"text": "Auth test", "language": "en"}
    r = client.post("/analyze", json=payload, headers=headers)
    assert r.status_code == 401
