"""
Service for filtering JEE Mains recommendations based on rank.
Queries the jee_mains_cutoffs view which unifies NIT, IIIT, and CFI data.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List, Tuple
from app.models.jee_mains import JeeMainsCutoff
from app.schemas.response import RecommendationItem


class JeeMainsRankFilterService:
    """Service for filtering JEE Mains college recommendations."""
    
    def get_recommendations(
        self, 
        db: Session, 
        rank: int, 
        category: str, 
        year: int = 2024,
        round_number: int = 5,
        institute_types: List[str] = None
    ) -> Tuple[List[RecommendationItem], List[RecommendationItem], List[RecommendationItem]]:
        """
        Get recommendations for JEE Mains based on Rank.
        Returns Tuple of (Safe, Moderate, Ambitious) lists.
        """
        
        if institute_types is None:
            institute_types = ["NIT", "IIIT", "GFTI"]
        
        # Base Query
        query = db.query(JeeMainsCutoff).filter(
            JeeMainsCutoff.year == year,
            JeeMainsCutoff.round == round_number,
            JeeMainsCutoff.closing_rank > 0
        )
        
        # Category Filter
        if category and category != "OPEN" and category != "GEN":
            query = query.filter(JeeMainsCutoff.category.ilike(f"%{category}%"))
        else:
            query = query.filter(
                or_(
                    JeeMainsCutoff.category == "OPEN",
                    JeeMainsCutoff.category == "GEN",
                    JeeMainsCutoff.category.ilike("%OPEN%")
                )
            )
        
        # Institute Type Filter
        if institute_types:
            query = query.filter(JeeMainsCutoff.institute_type.in_(institute_types))
        
        # Get a reasonable window of results
        # For JEE Mains ranks can be much higher (up to 2 lakh+)
        max_closing_rank = min(rank * 3, rank + 50000)  # Reasonable buffer
        results = query.filter(
            JeeMainsCutoff.closing_rank <= max_closing_rank,
            JeeMainsCutoff.closing_rank >= rank * 0.5  # Don't show options way below rank
        ).all()
        
        safe = []
        moderate = []
        ambitious = []
        
        for item in results:
            closing = item.closing_rank
            
            # Classification logic
            # Safe: Closing rank is 15%+ higher than user rank
            # Moderate: Closing rank is within 15% of user rank
            # Ambitious: Closing rank is 5-15% lower than user rank
            
            if closing > rank * 1.15:
                confidence = "safe"
                safe.append(self._map_to_schema(item, confidence))
            elif rank * 0.95 <= closing <= rank * 1.15:
                confidence = "moderate"
                moderate.append(self._map_to_schema(item, confidence))
            elif rank * 0.85 <= closing < rank * 0.95:
                confidence = "ambitious"
                ambitious.append(self._map_to_schema(item, confidence))
        
        # Sort by closing rank (lower = better college)
        safe.sort(key=lambda x: x.closing_rank)
        moderate.sort(key=lambda x: x.closing_rank)
        ambitious.sort(key=lambda x: x.closing_rank, reverse=True)  # Closest to reach first
        
        return safe, moderate, ambitious

    def _map_to_schema(self, item: JeeMainsCutoff, confidence: str) -> RecommendationItem:
        """Map database model to response schema."""
        return RecommendationItem(
            iit=item.institute_name,  # Using 'iit' field for institute name
            branch=item.branch_name,
            closing_rank=item.closing_rank,
            confidence=confidence,
            location="India"
        )
