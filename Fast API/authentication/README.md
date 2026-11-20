# FastAPI Authentication Practice

A learning API demonstrating user registration, password hashing, JWT access tokens, and a protected profile endpoint.

## Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Basic API status |
| POST | `/register` | Create a user with a hashed password |
| POST | `/login` | Verify credentials and issue a bearer token |
| GET | `/profile` | Return the signed-in user's profile |

Registration validates the email and password fields. Duplicate email addresses return HTTP 409; invalid credentials return HTTP 401. The profile endpoint requires a valid JWT.

## Setup

Use Python 3.10+.

Create a virtual environment from this directory:

```bash
python -m venv .venv
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

macOS / Linux:

```bash
source .venv/bin/activate
```

Install this exercise's dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Set a private JWT signing key of at least 32 characters.

Windows PowerShell:

```powershell
$env:JWT_SECRET_KEY = "replace-with-a-long-random-secret-value"
uvicorn main:app --reload
```

macOS / Linux:

```bash
export JWT_SECRET_KEY="$(python -c 'import secrets; print(secrets.token_urlsafe(48))')"
uvicorn main:app --reload
```

Open http://127.0.0.1:8000/docs for the interactive API documentation.

The SQLite database is stored beside `database.py` by default. Set `AUTH_DATABASE_PATH` to use a different database path, such as an isolated test database.

## Example requests

Register:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "a-strong-password"
}
```

Login with the same email and password. Copy the returned `access_token`, then use it as a Bearer token when calling `GET /profile`.

## Tests

Run from this directory:

```bash
python -m unittest discover -s tests -v
```

Tests use a temporary SQLite database and a test-only JWT secret.

## Limitations

- This is a learning example, not a production authentication service.
- The SQLite connection and cursor are module-level for simplicity; production applications should use request-scoped database sessions or a connection pool.
- Add rate limiting, email verification, password reset, refresh-token handling, audit logging, and deployment secret management before public use.
- Use HTTPS in deployment and never commit real JWT secrets or user databases.
