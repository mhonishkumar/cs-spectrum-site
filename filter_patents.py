import json
import re

with open('src/data/patents.ts', 'r', encoding='utf-8') as f:
    ts_data = f.read()

# Extract json
json_str = ts_data.replace('export const PATENTS = ', '').rstrip(';\n')
data = json.loads(json_str)

# Filter out rows where status is "Unknown" or empty, or year is "Unknown"
cleaned_data = [item for item in data if item.get('status') and item.get('status').lower() != 'unknown' and item.get('year') != 'Unknown']

ts_content = "export const PATENTS = " + json.dumps(cleaned_data, indent=2) + ";\n"
with open('src/data/patents.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Removed {len(data) - len(cleaned_data)} records. {len(cleaned_data)} remaining.")
