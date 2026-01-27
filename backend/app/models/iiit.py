"""
SQLAlchemy models for IIIT data.
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class IIIT(Base):
    """IIIT model representing the iiits table."""
    __tablename__ = "iiits"
    
    id = Column(Integer, primary_key=True, index=True, name="iiit_id")
    name = Column(String, nullable=False, index=True)
    location = Column(String, nullable=True)
    nirf_rank = Column(Integer, nullable=True)

class IIITBranch(Base):
    """IIIT Branch model representing the iiit_branches table."""
    __tablename__ = "iiit_branches"
    
    id = Column(Integer, primary_key=True, index=True, name="branch_id")
    branch_name = Column(String, nullable=False, index=True)
    short_name = Column(String, nullable=True)
    degree_type = Column(String, nullable=True)

class IIITCutoff(Base):
    """IIIT Cutoff model representing the iiit_cutoffs table."""
    __tablename__ = "iiit_cutoffs"
    
    id = Column(Integer, primary_key=True, index=True, name="cutoff_id")
    iiit_id = Column(Integer, ForeignKey("iiits.iiit_id"), nullable=False, index=True)
    branch_id = Column(Integer, ForeignKey("iiit_branches.branch_id"), nullable=False, index=True)
    year = Column(Integer, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    closing_rank = Column(Integer, nullable=False)
    round = Column(Integer, nullable=False, index=True)
    quota = Column(String, nullable=True)
    
    iiit = relationship("IIIT", backref="cutoffs")
    branch = relationship("IIITBranch", backref="cutoffs")
