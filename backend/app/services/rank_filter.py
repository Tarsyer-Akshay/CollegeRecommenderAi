"""
Deterministic rank filtering service.
Categorizes eligible IITs and branches into Safe, Moderate, and Ambitious.
"""

from sqlalchemy.orm import Session
from sqlalchemy import and_
from typing import List, Tuple
from app.models.cutoff import Cutoff
from app.models.iit import IIT
from app.models.branch import Branch
from app.schemas.response import RecommendationItem
from app.utils.constants import (
    SAFE_THRESHOLD,
    MODERATE_THRESHOLD,
    MIN_ELIGIBLE_THRESHOLD,
    CONFIDENCE_SAFE,
    CONFIDENCE_MODERATE,
    CONFIDENCE_AMBITIOUS,
)


class RankFilterService:
    """Service for filtering and categorizing recommendations based on rank."""
    
    @staticmethod
    def get_recommendations(
        db: Session,
        rank: int,
        category: str,
        year: int,
        round_number: int = 6
    ) -> Tuple[List[RecommendationItem], List[RecommendationItem], List[RecommendationItem]]:
        """
        Get eligible recommendations and categorize them.
        
        Args:
            db: Database session
            rank: User's JEE Advanced rank
            category: Category (GEN, OBC, SC, ST, EWS)
            year: Academic year
            round_number: JOSAA round (default: 6 for final round)
        
        Returns:
            Tuple of (safe_list, moderate_list, ambitious_list)
        """
        # Calculate thresholds
        min_eligible_rank = rank * MIN_ELIGIBLE_THRESHOLD
        safe_threshold_rank = rank * SAFE_THRESHOLD
        moderate_threshold_rank = rank * MODERATE_THRESHOLD
        
        # Query eligible cutoffs
        # Using round_number for filtering (prefer latest round if available)
        query = (
            db.query(Cutoff, IIT, Branch)
            .join(IIT, Cutoff.iit_id == IIT.id)
            .join(Branch, Cutoff.branch_id == Branch.id)
            .filter(
                and_(
                    Cutoff.year == year,
                    Cutoff.category == category,
                    Cutoff.closing_rank >= min_eligible_rank
                )
            )
            .order_by(Cutoff.round.desc(), Cutoff.closing_rank.asc())
        )
        
        # Execute query
        results = query.all()
        
        # Deduplicate by (iit_id, branch_id) keeping the best (lowest) closing_rank
        seen = {}
        for cutoff, iit, branch in results:
            key = (cutoff.iit_id, cutoff.branch_id)
            if key not in seen:
                seen[key] = (cutoff, iit, branch)
            else:
                # Keep the one with lower closing rank
                existing_cutoff, _, _ = seen[key]
                if cutoff.closing_rank < existing_cutoff.closing_rank:
                    seen[key] = (cutoff, iit, branch)
        
        # Categorize results
        safe_list = []
        moderate_list = []
        ambitious_list = []
        
        for cutoff, iit, branch in seen.values():
            item = RecommendationItem(
                iit=iit.name,
                branch=branch.branch_name,
                closing_rank=cutoff.closing_rank,
                confidence="",  # Will be set below
                location=iit.location,
                nirf_rank=iit.nirf_rank
            )
            
            # Categorize based on closing rank
            if cutoff.closing_rank >= safe_threshold_rank:
                item.confidence = CONFIDENCE_SAFE
                safe_list.append(item)
            elif cutoff.closing_rank >= moderate_threshold_rank:
                item.confidence = CONFIDENCE_MODERATE
                moderate_list.append(item)
            else:
                item.confidence = CONFIDENCE_AMBITIOUS
                ambitious_list.append(item)
        
        # Sort each list by closing_rank (ascending - best ranks first)
        safe_list.sort(key=lambda x: x.closing_rank)
        moderate_list.sort(key=lambda x: x.closing_rank)
        ambitious_list.sort(key=lambda x: x.closing_rank)
        
        return safe_list, moderate_list, ambitious_list
