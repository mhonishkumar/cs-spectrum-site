try:
    import pdfplumber
except ImportError:
    raise ImportError("pdfplumber is required to run this script. Install with: pip install pdfplumber")
import json
import re

def clean_text(text):
    if not text: return ""
    return re.sub(r'\s+', ' ', text).strip()

publications = []
current_year = ""

try:
    with pdfplumber.open('public/JOURNAL PUBLICATION BY FACULTY MEMBERS updated.pdf') as pdf:
        for page in pdf.pages:
            # Try to find the academic year from text
            text = page.extract_text() or ""
            year_match = re.search(r'Academic Year\s*(\d{4}[-–]\d{4})', text)
            if year_match:
                current_year = year_match.group(1).replace('–', '-')

            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    # Skip headers
                    if not row or row[0] is None or 'S.No' in str(row[0]) or 'Name' in str(row[0]):
                        continue
                        
                    # Row might have different columns depending on the year format
                    # Most formats have 7 columns:
                    # S.No | Name | Title | Journal | Month/Year | ISSN | Link to Journal | Link to Article
                    # Some have 6, some have 8.
                    
                    # We need: Faculty Name, Title, Journal Name, ISSN, Link to Journal, Year
                    # Let's map based on expected columns:
                    
                    cleaned_row = [clean_text(cell) for cell in row]
                    
                    # Heuristics to find columns
                    faculty = ""
                    title = ""
                    journal = ""
                    issn = ""
                    link = ""
                    
                    # The Name is usually column 1 or 2
                    if len(cleaned_row) >= 3:
                        # Col 0: S.No (sometimes mixed with another serial)
                        
                        col_offset = 0
                        # If col 1 is just a number, name is in col 2 (like "1. 1 Mrs...")
                        if re.match(r'^\d+$', cleaned_row[1]):
                            col_offset = 1
                            
                        # safe-get helper
                        def g(i):
                            return cleaned_row[i] if i < len(cleaned_row) else ""

                        faculty = g(1 + col_offset)
                        title = g(2 + col_offset)
                        journal = g(3 + col_offset)

                        # ISSN is usually after date
                        # In 2025-2026: Date is col 4, ISSN is col 5, Journal Link is col 6
                        # In other years it varies. Let's just search for ISSN format in the row.

                        date_str = g(4 + col_offset)

                        issn_candidate = g(5 + col_offset)
                        link_candidate = g(6 + col_offset)
                        
                        if "ISSN" in issn_candidate or "-" in issn_candidate:
                            issn = issn_candidate
                        
                        if "http" in link_candidate:
                            link = link_candidate
                        elif "http" in issn_candidate:
                            link = issn_candidate
                            
                        # Further cleanup for faculty name (remove trailing commas, etc)
                        faculty = re.sub(r'^[A-Za-z]+\s*$', '', faculty) # Skip if it's just one word usually
                        faculty = faculty.strip(', ')
                        
                        if len(faculty) > 3 and len(title) > 5:
                            publications.append({
                                "facultyName": faculty,
                                "title": title,
                                "journal": journal,
                                "issn": issn,
                                "link": link,
                                "year": current_year
                            })

    with open('src/data/extracted_pubs.json', 'w', encoding='utf-8') as f:
        json.dump(publications, f, indent=2)
        
    print(f"Extracted {len(publications)} publications.")
except Exception as e:
    print(f"Error: {e}")
