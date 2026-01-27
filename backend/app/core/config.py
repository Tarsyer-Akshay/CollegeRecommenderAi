"""
Configuration management for the FastAPI backend.
Loads environment variables from .env file.
"""

import logging
from pydantic import field_validator
from pydantic_settings import BaseSettings
from typing import Optional, List, Union

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    # Database Configuration
    DATABASE_URL: str
    
    # Gemini API Configuration
    GEMINI_API_KEY: Optional[str] = None
    
    # Auth Configuration
    SUPABASE_JWT_SECRET: Optional[str] = None
    SUPABASE_URL: Optional[str] = None
    SUPABASE_KEY: Optional[str] = None
    
    # CORS Configuration
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]
    
    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)

    # Application Configuration
    PROJECT_NAME: str = "IIT Rank-Based College Recommendation System"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


# Global settings instance
try:
    settings = Settings()
    logger.info("Settings loaded successfully")
    if not settings.DATABASE_URL:
        logger.warning("DATABASE_URL is not set!")
except Exception as e:
    logger.error(f"Failed to load settings: {e}")
    raise
