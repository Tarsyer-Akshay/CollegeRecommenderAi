"""
SQLAlchemy models for CFI data.
"""

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class CFI(Base):
    """CFI model representing the cfis table."""
    __tablename__ = "cfis"
    
    id = Column(Integer, primary_key=True, index=True, name="cfi_id")
    name = Column(String, nullable=False, index=True)
    location = Column(String, nullable=True)
    # nirf_rank might not be available or applicable in same way but keeping structure similar
    
class CFIBranch(Base):
    """CFI Branch model representing the cfi_branches table."""
    __tablename__ = "cfi_branches"
    
    id = Column(Integer, primary_key=True, index=True, name="branch_id")
    branch_name = Column(String, nullable=False, index=True)
    short_name = Column(String, nullable=True)
    degree_type = Column(String, nullable=True)

class CFICutoff(Base):
    """CFI Cutoff model representing the cfi_cutoffs table."""
    __tablename__ = "cfi_cutoffs"
    
    id = Column(Integer, primary_key=True, index=True, name="cutoff_id")
    cfi_id = Column(Integer, ForeignKey("cfis.cfi_id"), nullable=False, index=True)
    branch_id = Column(Integer, ForeignKey("cfi_branches.branch_id"), nullable=False, index=True)
    # branch_id = Column(Integer, nullable=False, index=True) # use FK if separate table or loose if shared
    
    year = Column(Integer, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    closing_rank = Column(Integer, nullable=False)
    round = Column(Integer, nullable=False, index=True)
    quota = Column(String, nullable=True)
    
    cfi = relationship("CFI", backref="cutoffs")
    branch = relationship("CFIBranch", backref="cutoffs")
