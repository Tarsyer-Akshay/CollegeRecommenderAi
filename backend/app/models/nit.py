"""
SQLAlchemy, models for NIT data.
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class NIT(Base):
    """NIT model representing the nits table."""
    __tablename__ = "nits"
    
    id = Column(Integer, primary_key=True, index=True, name="nit_id")
    name = Column(String, nullable=False, index=True)
    location = Column(String, nullable=True)
    nirf_rank = Column(Integer, nullable=True)

class NITBranch(Base):
    """NIT Branch model representing the nit_branches table."""
    __tablename__ = "nit_branches"
    
    id = Column(Integer, primary_key=True, index=True, name="branch_id")
    branch_name = Column(String, nullable=False, index=True)
    short_name = Column(String, nullable=True)
    degree_type = Column(String, nullable=True)

class NITCutoff(Base):
    """NIT Cutoff model representing the nit_cutoffs table."""
    __tablename__ = "nit_cutoffs"
    
    id = Column(Integer, primary_key=True, index=True, name="cutoff_id")
    nit_id = Column(Integer, ForeignKey("nits.nit_id"), nullable=False, index=True)
    branch_id = Column(Integer, ForeignKey("nit_branches.branch_id"), nullable=False, index=True)
    year = Column(Integer, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    closing_rank = Column(Integer, nullable=False)
    round = Column(Integer, nullable=False, index=True)
    quota = Column(String, nullable=True)
    
    nit = relationship("NIT", backref="cutoffs")
    branch = relationship("NITBranch", backref="cutoffs")
