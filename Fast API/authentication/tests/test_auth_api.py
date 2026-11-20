import os
import tempfile
import unittest
from pathlib import Path

from fastapi.testclient import TestClient


_TEST_DIRECTORY = tempfile.TemporaryDirectory()
os.environ["JWT_SECRET_KEY"] = "test-only-jwt-secret-value-with-more-than-32-characters"
os.environ["AUTH_DATABASE_PATH"] = str(Path(_TEST_DIRECTORY.name) / "auth_test.db")

from main import app  # noqa: E402


class AuthenticationApiTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def setUp(self):
        from database import conn, cursor
        cursor.execute("DELETE FROM users")
        conn.commit()

    def test_registration_login_and_authenticated_profile(self):
        registration = self.client.post(
            "/register",
            json={
                "name": "Test User",
                "email": "test@example.com",
                "password": "strong-test-password",
            },
        )
        self.assertEqual(registration.status_code, 201)

        duplicate = self.client.post(
            "/register",
            json={
                "name": "Test User",
                "email": "test@example.com",
                "password": "strong-test-password",
            },
        )
        self.assertEqual(duplicate.status_code, 409)

        invalid_login = self.client.post(
            "/login",
            json={"email": "test@example.com", "password": "wrong-password"},
        )
        self.assertEqual(invalid_login.status_code, 401)

        login = self.client.post(
            "/login",
            json={
                "email": "test@example.com",
                "password": "strong-test-password",
            },
        )
        self.assertEqual(login.status_code, 200)
        token = login.json()["access_token"]

        profile = self.client.get(
            "/profile",
            headers={"Authorization": f"Bearer {token}"},
        )
        self.assertEqual(profile.status_code, 200)
        self.assertEqual(profile.json()["email"], "test@example.com")
        self.assertEqual(profile.json()["name"], "Test User")

    def test_profile_requires_a_valid_token(self):
        response = self.client.get("/profile")
        self.assertEqual(response.status_code, 401)


if __name__ == "__main__":
    unittest.main()
