import pdfplumber
import json
import re
import os
import difflib

def clean_text(text):
    if not text: return ""
    return re.sub(r'\s+', ' ', text).strip()

faculty = []
image_dir = 'public/faculty-images'
images = os.listdir(image_dir) if os.path.exists(image_dir) else []
# Normalize image names for matching
image_map = {img.lower().replace('.jpeg', '').replace('.jpg', '').replace('.png', '').strip(): img for img in images}

try:
    with pdfplumber.open('public/3. Teaching Staff Name List Updated ( 5X3 = 15sq.ft) 1.pdf') as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    if not row or row[0] is None or 'S.No' in str(row[0]) or 'Name' in str(row[0]):
                        continue
                    
                    cleaned_row = [clean_text(cell) for cell in row]
                    
                    # Columns are expected to be: S.No | Name | Designation | Qualification
                    if len(cleaned_row) >= 4:
                        name = cleaned_row[1]
                        # Remove newlines and fix spaces
                        name = name.replace('\n', ' ')
                        name = re.sub(r'\s+', ' ', name).strip()
                        
                        designation = cleaned_row[2].replace('\n', ' ')
                        qualification = cleaned_row[3].replace('\n', ' ')
                        
                        if not name:
                            continue
                            
                        # Try to find a matching image
                        search_name = name.lower().replace('dr.', '').replace('mr.', '').replace('mrs.', '').replace('prof.', '').strip()
                        matches = difflib.get_close_matches(search_name, image_map.keys(), n=1, cutoff=0.4)
                        
                        if not matches:
                            # Try matching first word (first name)
                            first_name = search_name.split()[0] if search_name else ""
                            matches = difflib.get_close_matches(first_name, image_map.keys(), n=1, cutoff=0.4)
                            
                        image_file = ""
                        if matches:
                            image_file = image_map[matches[0]]
                        
                        faculty.append({
                            "name": name,
                            "designation": designation,
                            "qualification": qualification,
                            "image": f"/faculty-images/{image_file}" if image_file else ""
                        })

    # Manual adjustments or exact matching if difflib missed something obvious
    # The pdf table may also have a serial number in front of the name?
    # No, S.No is in a separate column in a well formed table.
    
    ts_content = "export const FACULTY = " + json.dumps(faculty, indent=2) + ";\n"
    with open('src/data/faculty.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Extracted {len(faculty)} faculty records.")
    
except Exception as e:
    print(f"Error: {e}")
