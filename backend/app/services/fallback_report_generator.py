
from typing import List, Optional
from app.schemas.response import RecommendationItem

def generate_fallback_report(
    rank: int,
    category: str,
    query: Optional[str],
    safe: List[RecommendationItem],
    moderate: List[RecommendationItem],
    ambitious: List[RecommendationItem]
) -> str:
    """
    Generates a deterministic fallback counseling report when LLM is unavailable.
    Strictly follows the requested 10-section structure.
    """
    
    # helper for list formatting
    def format_colleges(items: List[RecommendationItem], limit=5) -> str:
        if not items:
            return "No options found in this category based on available data."
        
        lines = []
        for item in items[:limit]:
            lines.append(f"- **{item.iit}** - {item.branch}")
            lines.append(f"  - Closing Rank: {item.closing_rank}")
            if item.confidence == 'safe':
                lines.append("  - *Reason:* Your rank is significantly better than the historical cutoff.")
            elif item.confidence == 'moderate':
                lines.append("  - *Risk/Reward:* A balanced choice; you are close to the cutoff.")
            else:
                lines.append("  - *Analysis:* Requires a favorable swing in cutoffs; high risk.")
        return "\n".join(lines)

    # 1. Report Title
    report = "# Personalized IIT JEE Advanced Counseling Report\n\n"
    
    # 2. Student Profile Summary
    report += "### 2. Student Profile Summary\n"
    report += f"- **JEE Advanced Rank:** {rank}\n"
    report += f"- **Category:** {category}\n"
    report += f"- **Counseling Year:** 2024\n"
    if query:
        report += f"- **Student's Goal:** {query}\n"
    report += "\n---\n\n"

    # 3. Overall Admission Outlook
    report += "### 3. Overall Admission Outlook\n"
    total_options = len(safe) + len(moderate) + len(ambitious)
    if len(safe) > 5:
        outlook = "Excellent. You have a wide range of secure options across multiple IITs."
    elif len(safe) > 0:
        outlook = "Good. You have some secure options, but you should carefully choose your comparisons."
    elif len(moderate) > 0:
        outlook = "Challenging but hopeful. You cut it close for many options; strategy is key."
    else:
        outlook = "Difficult. Most top-tier options are out of reach, but spot rounds might offer surprises."
        
    report += f"{outlook}\n\n"
    report += f"You have **{len(safe)} SAFE**, **{len(moderate)} MODERATE**, and **{len(ambitious)} AMBITIOUS** options identified from our database.\n"
    report += "\n---\n\n"

    # 4. Recommendation Summary
    report += "### 4. Recommendation Summary\n"
    report += "- **SAFE Options:** High probability of admission. These are your backups.\n"
    report += "- **MODERATE Options:** Medium probability. These should be your target assignments.\n"
    report += "- **AMBITIOUS Options:** Low probability. Fill these at the top of your specific choices list just in case.\n"
    report += "\n---\n\n"

    # 5. Detailed College & Branch Recommendations
    report += "### 5. Detailed College & Branch Recommendations\n\n"
    
    report += "#### SAFE OPTIONS\n"
    report += format_colleges(safe) + "\n\n"
    
    report += "#### MODERATE OPTIONS\n"
    report += format_colleges(moderate) + "\n\n"
    
    report += "#### AMBITIOUS OPTIONS\n"
    report += format_colleges(ambitious) + "\n"
    
    report += "\n---\n\n"

    # 6. Branch vs IIT Trade-off Analysis
    report += "### 6. Branch vs IIT Trade-off Analysis\n"
    report += "At your rank, the trade-off is often between a newer IIT with a popular branch (like CS/AI) vs an older IIT with a core branch (Mech, Civil, Chem).\n\n"
    report += "- **Choose Branch if:** You have a specific passion for a field (e.g., coding) or want an immediate tech career.\n"
    report += "- **Choose IIT Reputation if:** You are undecided, want exposure to a stronger alumni network, or are interested in non-core careers (consulting, finance).\n"
    report += "\n---\n\n"

    # 7. Counseling Strategy & Preference Filling Guidance
    report += "### 7. Counseling Strategy & Preference Filling Guidance\n"
    report += "1. **Order Matters:** Always list colleges from Best (Ambitious) to Safe. The computer checks from top to bottom.\n"
    report += "2. **Don't Skip Ambitious:** Even if you think you won't get it, put your dream IITs at the very top.\n"
    report += "3. **Maximize Options:** Fill as many choices as you are willing to attend. Don't limit yourself to just 5-10 options unless you are certain.\n"
    report += "\n---\n\n"

    # 8. Common Mistakes to Avoid
    report += "### 8. Common Mistakes to Avoid\n"
    report += "1. **Filling too few choices:** Assuming you will definitely get your top choice.\n"
    report += "2. **Ignoring lower branches at Top IITs:** Sometimes the exposure at Top 7 IITs outweighs the branch name.\n"
    report += "3. **Looking only at last year's exact cutoff:** Cutoffs float year by year; leave a buffer.\n"
    report += "\n---\n\n"

    # 9. Next Steps for the Student
    report += "### 9. Next Steps for the Student\n"
    report += "- Review the 'Detailed Recommendations' above.\n"
    report += "- Visit the official websites of the IITs you are interested in.\n"
    report += "- Prepare your document certificates (Category, 10th/12th, etc.).\n"
    report += "\n---\n\n"

    # 10. Disclaimer
    report += "### 10. Disclaimer\n"
    report += "Recommendations are based on historical cutoff data from previous years. Final outcomes depend on JOSAA 2024 dynamics, seat matrix changes, and total applicants. This report is for guidance only."

    return report
