import logging
import sqlite3

from fastapi import Depends, FastAPI, HTTPException, status

from database import conn, cursor
from schema import UserLogin, UserRegister
from security import hash_password, verify_password
from token_handler import create_access_token, oauth2_scheme, verify_token


logger = logging.getLogger(__name__)
app = FastAPI(title="Learning Authentication API")


@app.get("/")
def home():
    return {"message": "Authentication API"}


@app.post("/register", status_code=status.HTTP_201_CREATED)
def register(user: UserRegister):
    hashed_password = hash_password(user.password)
    try:
        cursor.execute(
            """
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
            """,
            (user.name.strip(), user.email.lower(), hashed_password),
        )
        conn.commit()
    except sqlite3.IntegrityError:
        conn.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )
    except Exception:
        conn.rollback()
        logger.exception("User registration failed")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not register the user.",
        )

    return {"message": "User registered successfully."}


@app.post("/login")
def login(user: UserLogin):
    cursor.execute(
        """
        SELECT id, email, password
        FROM users
        WHERE email = ?
        """,
        (user.email.lower(),),
    )
    db_user = cursor.fetchone()

    if db_user is None or not verify_password(user.password, db_user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token({"user_id": db_user["id"]})
    return {"access_token": token, "token_type": "bearer"}


@app.get("/profile")
def profile(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    user_id = int(payload["user_id"])

    cursor.execute(
        """
        SELECT id, name, email
        FROM users
        WHERE id = ?
        """,
        (user_id,),
    )
    user = cursor.fetchone()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User account not found.",
        )

    return {
        "id": user["id"],
        "name": user["name"],
        "email": user["email"],
    }
