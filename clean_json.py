import json
import re

with open('src/data/extracted_pubs.json', 'r', encoding='utf-8') as f:
    pubs = json.load(f)

for p in pubs:
    # Fix faculty name: "M1 rs." -> "Mrs.", "D7 r." -> "Dr."
    p['facultyName'] = re.sub(r'^[A-Za-z]\d+\s+r', 'Dr', p['facultyName'])
    p['facultyName'] = re.sub(r'^[A-Za-z]\d+\s+rs', 'Mrs', p['facultyName'])
    p['facultyName'] = re.sub(r'^[A-Za-z]\d+\s+rof', 'Prof', p['facultyName'])
    p['facultyName'] = p['facultyName'].replace('\n', ' ')
    p['facultyName'] = re.sub(r'\s+', ' ', p['facultyName']).strip()
    
    # Fix link spaces
    p['link'] = p['link'].replace(' ', '').replace('\n', '')
    p['issn'] = p['issn'].replace('\n', ' ')

# Write as typescript file
ts_content = "export const PUBLICATIONS = " + json.dumps(pubs, indent=2) + ";\n"
with open('src/data/publications.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Fixed and saved to publications.ts")
