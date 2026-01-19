import requests
import json
import datetime

url = "http://127.0.0.1:8000/api/recommend"
payload = {
    "rank": 5000,
    "category": "GEN",
    "year": 2024
}

try:
    print(f"Sending request to {url}...")
    response = requests.post(url, json=payload)

    with open("debug_output.txt", "w", encoding="utf-8") as f:
        f.write(f"Timestamp: {datetime.datetime.now()}\n")
        if response.status_code == 200:
            data = response.json()
            full_report = data.get("full_report", "")
            f.write(f"Status Code: 200\n")
            f.write(f"Full Report Length: {len(full_report)}\n")
            f.write(f"Full Report Content (first 200 chars):\n{full_report[:200]}\n")
            f.write("-" * 50 + "\n")
            
            # Check if other fields are present
            f.write(f"Safe Options: {len(data.get('safe', []))}\n")
            f.write(f"Moderate Options: {len(data.get('moderate', []))}\n")
            f.write(f"Ambitious Options: {len(data.get('ambitious', []))}\n")
        else:
            f.write(f"Error: {response.status_code}\n")
            f.write(response.text)
except Exception as e:
    with open("debug_output.txt", "w") as f:
        f.write(f"Failed to connect: {e}")
