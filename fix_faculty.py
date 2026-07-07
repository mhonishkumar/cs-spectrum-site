import json

with open('src/data/faculty.ts', 'r', encoding='utf-8') as f:
    ts_data = f.read()

# Extract json
json_str = ts_data.replace('export const FACULTY = ', '').rstrip(';\n')
data = json.loads(json_str)

cleaned_data = []
for item in data:
    if "NAME" in item["name"].upper():
        continue
    
    # Swap designation and qualification because the script extracted them backwards based on PDF format
    correct_designation = item["qualification"]
    correct_qualification = item["designation"]
    
    item["designation"] = correct_designation
    item["qualification"] = correct_qualification
    
    cleaned_data.append(item)

ts_content = "export const FACULTY = " + json.dumps(cleaned_data, indent=2) + ";\n"
with open('src/data/faculty.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Fixed {len(cleaned_data)} records.")
