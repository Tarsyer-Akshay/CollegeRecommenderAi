"""
Pydantic schemas for request validation.
"""

from pydantic import BaseModel, Field, field_validator
from typing import Optional


class RecommendationRequest(BaseModel):
    """Request schema for college recommendations."""
    
    rank: int = Field(..., ge=1, description="JEE Advanced rank")
    category: str = Field(..., description="Category: GEN, OBC, SC, ST, or EWS")
    year: int = Field(default=2024, ge=2020, le=2025, description="Academic year")
    query: Optional[str] = Field(default=None, description="Optional user query for LLM context")
    round: Optional[int] = Field(default=6, ge=1, le=6, description="JOSAA round (1-6)")
    
    @field_validator("category")
    @classmethod
    def validate_category(cls, v: str) -> str:
        """Validate category is one of the allowed values."""
        valid_categories = ["GEN", "OBC", "SC", "ST", "EWS"]
        v_upper = v.upper()
        if v_upper not in valid_categories:
            raise ValueError(f"Category must be one of {valid_categories}")
        return v_upper
    
    class Config:
        json_schema_extra = {
            "example": {
                "rank": 5000,
                "category": "GEN",
                "year": 2024,
                "query": "I prefer computer science and locations in South India",
                "round": 6
            }
        }
