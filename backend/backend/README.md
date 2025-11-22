# EchoChamberShield - Core API (Pydantic v2) - Python 3.13 compatible

## Quick start (dev) - Updated for Pydantic v2 / FastAPI >= 0.100

1. Ensure Python 3.13 is installed (this upgraded branch targets 3.13).
   Check: `python3 --version`

2. Create virtualenv:
   ```sh
   cd echoshield_backend_pydantic_v2/backend
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Run using uvicorn:
   ```sh
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```

5. Visit the OpenAPI docs at: http://127.0.0.1:8000/docs

## Notes on compatibility
- This branch uses Pydantic v2-style BaseModel which is supported by modern FastAPI releases.
- If you encounter issues with specific FastAPI versions, try upgrading to a newer FastAPI that explicitly supports Pydantic v2.
- The uploaded PDF from the session is copied into docs/ and its original path is recorded in docs/UPLOADED_FILE_PATH.txt

