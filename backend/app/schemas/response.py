"""
Pydantic schemas for API responses.
"""

from pydantic import BaseModel
from typing import List, Optional


class RecommendationItem(BaseModel):
    """Individual recommendation item."""
    
    iit: str
    branch: str
    closing_rank: int
    confidence: str  # "safe", "moderate", or "ambitious"
    location: Optional[str] = None
    nirf_rank: Optional[int] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "iit_name": "Indian Institute of Technology Madras",
                "branch_name": "Computer Science and Engineering",
                "closing_rank": 4500,
                "confidence": "safe",
                "location": "Chennai, Tamil Nadu",
                "nirf_rank": 1
            }
        }


class RecommendationResponse(BaseModel):
    """Complete recommendation response with categorized results and LLM explanation."""
    
    safe: List[RecommendationItem]
    moderate: List[RecommendationItem]
    ambitious: List[RecommendationItem]
    llm_response: str = ""
    
    class Config:
        json_schema_extra = {
            "example": {
                "safe": [],
                "moderate": [],
                "ambitious": [],
                "llm_response": "Based on your rank..."
            }
        }
