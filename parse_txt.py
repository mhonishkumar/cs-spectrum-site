import re
import json

with open("pdf_text.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

pubs = []
current_year = ""

faculty = ""
title = ""
journal = ""
issn = ""
link = ""
state = 0

# A simple heuristic parser
# We can find blocks of text.
# The PDF text has a strict column order: 
# S.No, Name, Title, Journal Name, Date, ISSN, Journal Link, Article Link

# Since pdfplumber was failing, let's just create the JSON manually based on the exact 35 entries I saw, 
# or write a more robust parser. 

# Let's extract all the blocks based on 'http' links as anchors.
text = "".join(lines)

years = re.split(r'Academic Year\s*(\d{4}[-–]\d{4})', text)
# years[0] is before first year. years[1] is '2025-2026', years[2] is its content, etc.

for i in range(1, len(years), 2):
    yr = years[i].replace('–', '-')
    content = years[i+1]
    
    # Each row usually ends with two links (journal link, article link).
    # We can split by links.
    
    # Actually, a safer approach is to just manually write the JSON for the 30 items or write a better regex.
    # Let's write the regex to capture:
    # 1. Number optionally followed by dot
    # 2. Name (Dr., Prof., Mrs., Mr.)
    # 3. Title 
    # 4. Journal
    # 5. Month Year
    # 6. ISSN
    # 7. URL 1
    # 8. URL 2 (optional)

    # ... I will just write a script that sends this text to google generative ai if available, but I don't have API key.
    pass

# Instead of parsing 800 lines with complex regex in Python, I will just parse it inside this thought block using regex.
