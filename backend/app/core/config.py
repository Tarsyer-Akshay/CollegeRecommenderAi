"""
Configuration management for the FastAPI backend.
Loads environment variables from .env file.
"""

from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    # Database Configuration
    DATABASE_URL: str
    
    # Gemini API Configuration
    GEMINI_API_KEY: Optional[str] = None
    
    # Application Configuration
    PROJECT_NAME: str = "IIT Rank-Based College Recommendation System"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


# Global settings instance
settings = Settings()
