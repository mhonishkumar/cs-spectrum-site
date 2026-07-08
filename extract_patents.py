import pdfplumber
import json
import re

def clean_text(text):
    if not text: return ""
    return re.sub(r'\s+', ' ', text).strip()

patents = []
current_year = ""

try:
    with pdfplumber.open('public/Patent Updated.pdf') as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            # If the PDF has academic year headers, extract them, though patents might not have them.
            year_match = re.search(r'Academic Year\s*(\d{4}[-–]\d{4})', text)
            if year_match:
                current_year = year_match.group(1).replace('–', '-')

            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    if not row or row[0] is None or 'S.No' in str(row[0]) or 'Name' in str(row[0]):
                        continue
                    
                    cleaned_row = [clean_text(cell) for cell in row]
                    
                    # Expected columns in Patent PDF:
                    # Let's write a generic heuristic for patents since we haven't seen the exact columns.
                    # Commonly: S.No | Faculty Name | Patent Title | Patent / App No | Status | Date | Office | Link
                    
                    # Just dump the cleaned row to a temp json first to inspect the structure
                    patents.append(cleaned_row)

    with open('src/data/extracted_patents_raw.json', 'w', encoding='utf-8') as f:
        json.dump(patents, f, indent=2)
        
    print(f"Extracted {len(patents)} raw patent rows.")
except Exception as e:
    print(f"Error: {e}")
