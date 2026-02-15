import google.generativeai as genai
from app.core.config import settings
import os

# Setup
api_key = settings.GEMINI_API_KEY
genai.configure(api_key=api_key)

print("Listing available FLASH models...")
try:
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods and 'flash' in m.name:
            print(f"Name: {m.name}")
except Exception as e:
    print(f"Error: {e}")
