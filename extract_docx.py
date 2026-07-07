import zipfile
import xml.etree.ElementTree as ET
import os
import json

def extract_docx(docx_path, out_img_dir):
    os.makedirs(out_img_dir, exist_ok=True)
    
    with zipfile.ZipFile(docx_path, 'r') as z:
        # Extract images
        for item in z.namelist():
            if item.startswith('word/media/'):
                filename = os.path.basename(item)
                out_path = os.path.join(out_img_dir, filename)
                with open(out_path, 'wb') as f:
                    f.write(z.read(item))
                
        # Read rels to map rId to image path
        rels_xml = z.read('word/_rels/document.xml.rels')
        rels_tree = ET.fromstring(rels_xml)
        nsmap = {'rel': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        
        rId_to_image = {}
        for rel in rels_tree.findall('.//rel:Relationship', namespaces=nsmap):
            if 'image' in rel.attrib['Type']:
                target = rel.attrib['Target']
                filename = os.path.basename(target)
                rId_to_image[rel.attrib['Id']] = filename
                
        # Read document xml
        doc_xml = z.read('word/document.xml')
        doc_tree = ET.fromstring(doc_xml)
        ns = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
            'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
            'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
            'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
            'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
        }
        
        items = []
        current_text = []
        
        # Iterate over body elements
        for element in doc_tree.find('.//w:body', namespaces=ns):
            if element.tag.endswith('p') or element.tag.endswith('tbl'):
                # We can just itertext
                texts = []
                for t in element.findall('.//w:t', namespaces=ns):
                    if t.text:
                        texts.append(t.text)
                
                text_val = ''.join(texts)
                if text_val.strip():
                    current_text.append(text_val.strip())
                    
                # Extract image
                blips = element.findall('.//a:blip', namespaces=ns)
                if blips:
                    for blip in blips:
                        rId = blip.get(f"{{{ns['r']}}}embed")
                        if rId and rId in rId_to_image:
                            img_filename = rId_to_image[rId]
                            items.append({
                                'text': '\n'.join(current_text),
                                'image': f"/achievements/faculty-certificates/{img_filename}"
                            })
                            current_text = []
                            
        # Print output
        print(json.dumps(items, indent=2))

if __name__ == '__main__':
    extract_docx('public/achievements/Faculty Achievement Raja Sir.docx', 'public/achievements/faculty-certificates')
