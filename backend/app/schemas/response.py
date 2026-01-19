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


class FilteredComparisonItem(BaseModel):
    """Top recommendations for comparison table (Layer 2)."""
    
    category: str  # "safe", "moderate", or "ambitious"
    iit: str
    branch: str
    closing_rank: int
    admission_probability: str  # "High", "Medium", or "Low"
    location: Optional[str] = None


class RecommendationResponse(BaseModel):
    """Layered recommendation response with counselor summary, filtered comparison, and full report."""
    
    # Layer 1: Counselor Summary (brief, 10-15 seconds read)
    counselor_summary: str = ""
    
    # Layer 2: Filtered Comparison (top 3-5 per category)
    filtered_comparison: List[FilteredComparisonItem] = []
    
    # Layer 3: Full Counseling Report (detailed reasoning)
    full_report: str = ""
    
    # Complete data (for full report page)
    safe: List[RecommendationItem]
    moderate: List[RecommendationItem]
    ambitious: List[RecommendationItem]
    
    class Config:
        json_schema_extra = {
            "example": {
                "counselor_summary": "At your rank and category...",
                "filtered_comparison": [],
                "full_report": "Detailed counseling report...",
                "safe": [],
                "moderate": [],
                "ambitious": []
            }
        }
