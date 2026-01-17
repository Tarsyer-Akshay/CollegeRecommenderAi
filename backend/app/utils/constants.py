"""
Application-wide constants.
"""

# Rank filtering thresholds (multipliers)
SAFE_THRESHOLD = 1.15  # closing_rank >= rank * 1.15
MODERATE_THRESHOLD = 0.95  # closing_rank >= rank * 0.95
MIN_ELIGIBLE_THRESHOLD = 0.85  # closing_rank >= rank * 0.85

# Category mappings
VALID_CATEGORIES = ["GEN", "OBC", "SC", "ST", "EWS"]

# Confidence labels
CONFIDENCE_SAFE = "safe"
CONFIDENCE_MODERATE = "moderate"
CONFIDENCE_AMBITIOUS = "ambitious"
