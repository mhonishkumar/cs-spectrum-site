import json

with open('src/data/extracted_patents_raw.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

patents = []
for row in raw:
    # Skip header rows
    if "Sl. No." in row or row[0] == "Sl. No.":
        continue
    
    # Ensure row has enough columns
    if len(row) < 9:
        continue
        
    app_no = row[1]
    status = row[2]
    faculty = row[3]
    title = row[4]
    filed_date = row[6]
    pub_date = row[7]
    link = row[9] if len(row) > 9 else ""
    
    # The URL column just has the application number in the raw text, it seems there are no real links, or it might contain "http"
    if "http" not in link.lower():
        link = ""
    
    # The date can be pub_date or filed_date
    date = pub_date if pub_date and pub_date != '-' else filed_date
    
    # Also we might extract a year from the date
    year = "Unknown"
    if date:
        parts = date.split('-')
        if len(parts) == 3:
            year = parts[2] # dd-mm-yyyy

    patents.append({
        "facultyName": faculty,
        "title": title,
        "patentNumber": app_no,
        "status": status,
        "date": date,
        "year": year,
        "link": link,
        "office": "Indian Patent Office" # Default since it's an Indian college and typical patents are Indian
    })

ts_content = "export const PATENTS = " + json.dumps(patents, indent=2) + ";\n"
with open('src/data/patents.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Processed {len(patents)} patents and saved to patents.ts")
