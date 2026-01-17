import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By

# Institute display name → short code for filenames
institute_types = {
    "Government Funded Technical Institutions": "cfi",
    "Indian Institute of Technology": "iit",
    "Indian Institute of Information Technology": "iiit",
    "National Institute of Technology": "nit"
}

# === Setup driver ===
driver = webdriver.Chrome()
driver.get("https://josaa.admissions.nic.in/applicant/SeatAllotmentResult/CurrentORCR.aspx")
driver.maximize_window()
time.sleep(3)

# === Loop through each round ===
for round_number in range(2, 6):
    print(f"\n🔵 ROUND {round_number}")
    driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_ddlroundno_chosen").click()
    time.sleep(1)
    driver.find_element(By.XPATH, f"//li[text()='{round_number}']").click()
    time.sleep(3)

    for full_name, short_code in institute_types.items():
        print(f"⏳ Processing: Round {round_number} | {full_name}")

        try:
            # Select Institute Type
            driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_ddlInstype_chosen").click()
            time.sleep(1)
            driver.find_element(By.XPATH, f"//li[text()='{full_name}']").click()
            time.sleep(3)

            # Select first available institute
            driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_ddlInstitute_chosen").click()
            time.sleep(1)
            driver.find_element(By.XPATH, "//div[@id='ctl00_ContentPlaceHolder1_ddlInstitute_chosen']//li[2]").click()
            time.sleep(2)

            # Select first branch
            driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_ddlBranch_chosen").click()
            time.sleep(1)
            driver.find_element(By.XPATH, "//div[@id='ctl00_ContentPlaceHolder1_ddlBranch_chosen']//li[2]").click()
            time.sleep(2)

            # Select Seat Type: ALL
            driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_ddlSeattype_chosen").click()
            time.sleep(1)
            driver.find_element(By.XPATH, "//li[text()='ALL']").click()
            time.sleep(2)

            # Submit
            driver.find_element(By.ID, "ctl00_ContentPlaceHolder1_btnSubmit").click()
            time.sleep(5)

            # Scrape data
            rows = driver.find_elements(By.XPATH, '//table[@id="ctl00_ContentPlaceHolder1_GridView1"]/tbody/tr[not(contains(@class, "bg-secondary"))]')
            if not rows:
                print(f"⚠️ No data found for {full_name} in Round {round_number}")
                continue

            # Save to CSV
            filename = f"josaa_round{round_number}_{short_code}_results.csv"
            with open(filename, mode='w', newline='', encoding='utf-8') as file:
                writer = csv.writer(file)
                writer.writerow(["Institute", "Academic Program", "Quota", "Seat Type", "Gender", "Opening Rank", "Closing Rank"])
                for row in rows:
                    cols = row.find_elements(By.TAG_NAME, 'td')
                    data = [col.text.strip() for col in cols]
                    if data:
                        writer.writerow(data)

            print(f"✅ Saved: {filename}")
            time.sleep(2)

        except Exception as e:
            print(f"❌ Error for {full_name} in Round {round_number}: {e}")
            continue

# Done
driver.quit()
print("\n🎉 All rounds and institute types processed and saved.")
