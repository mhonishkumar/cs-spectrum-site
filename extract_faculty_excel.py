import os
import io

try:
    import openpyxl
except ImportError as exc:
    raise SystemExit("Missing dependency: openpyxl. Install with `pip install openpyxl`.") from exc

try:
    from PIL import Image
except ImportError as exc:
    raise SystemExit("Missing dependency: Pillow. Install with `pip install pillow`.") from exc

excel_file = "public/Faculty Profile_Photo.xlsx"
image_dir = "public/faculty-images/updated"
os.makedirs(image_dir, exist_ok=True)

wb = openpyxl.load_workbook(excel_file, data_only=True)
ws = wb.active

# Extract text data
print("Row Data:")
for row_idx, row in enumerate(ws.iter_rows(values_only=True), start=1):
    print(f"Row {row_idx}: {row}")

# Extract images
print("\nImages:")
for image in ws._images:
    # Get the image anchor to map to row
    col = image.anchor._from.col
    row = image.anchor._from.row
    print(f"Image found anchored at Row {row}, Col {col}")
    img_data = image._data()
    img = Image.open(io.BytesIO(img_data))
    
    img_name = f"row_{row}.png"
    img_path = os.path.join(image_dir, img_name)
    img.save(img_path)
    print(f"Saved {img_path}")
