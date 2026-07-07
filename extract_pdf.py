import sys
try:
    from pypdf import PdfReader
    
    reader = PdfReader('public/JOURNAL PUBLICATION BY FACULTY MEMBERS updated.pdf')
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
        
    with open('pdf_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
        
    print("Extracted successfully.")
except Exception as e:
    print(f"Error: {e}")
