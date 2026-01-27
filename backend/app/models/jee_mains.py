"""
SQLAlchemy model for JEE Mains Cutoff View.
Maps to the 'jee_mains_cutoffs' SQL view.
"""

from sqlalchemy import Column, Integer, String
from app.core.database import Base


class JeeMainsCutoff(Base):
    """
    Model representing the Unified JEE Mains Cutoff View.
    This view combines data from nits, iiits, and cfis (GFTIs).
    """
    __tablename__ = "jee_mains_cutoffs"
    
    # Composite Primary Key for SQLAlchemy mapping purposes
    # Since IDs might duplicate across different source tables (NIT/IIIT/GFTI), 
    # we need the type + id to be unique.
    cutoff_id = Column(Integer, primary_key=True)
    institute_type = Column(String, primary_key=True)
    
    institute_id = Column(Integer)
    institute_name = Column(String)
    branch_id = Column(Integer)
    branch_name = Column(String)
    year = Column(Integer)
    category = Column(String)
    closing_rank = Column(Integer)
    round = Column(Integer)
    quota = Column(String)
