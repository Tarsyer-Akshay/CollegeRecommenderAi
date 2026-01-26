from datetime import datetime, timedelta
from typing import Any, Union
import jwt
from app.core.config import settings
from app.core.supabase import supabase

def verify_token(token: str) -> dict:
    """
    Verify the Supabase JWT token using the Supabase client.
    This handles HS256/ES256 and key rotation automatically.
    """
    try:
        if not supabase:
            raise ValueError("Supabase client not initialized")

        # Use Supabase's built-in verification
        # get_user() expects the raw JWT token
        user_response = supabase.auth.get_user(token)
        
        if not user_response or not user_response.user:
             raise Exception("Invalid token or user not found")

        # Convert User object to dict-like payload expected by deps
        # The User object has 'id', 'email', 'user_metadata' etc.
        user = user_response.user
        
        return {
            "sub": user.id,
            "email": user.email,
            "user_metadata": user.user_metadata,
            "aud": "authenticated", # Implicit
            "role": user.role
        }

    except Exception as e:
        print(f"DEBUG: Supabase Auth Error: {str(e)}")
        # Re-raise so deps.py can handle HTTP response
        raise e
