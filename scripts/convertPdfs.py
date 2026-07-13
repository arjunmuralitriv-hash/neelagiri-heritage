import fitz
from PIL import Image
import os
import json
import re

pdf_dir = r"C:\Users\arjun\Downloads\Images for gallery\Our Heritage"
dest_dir = r"C:\Users\arjun\Downloads\Neelagiri\website\public\images\gallery\hotel"
os.makedirs(dest_dir, exist_ok=True)

files = [f for f in os.listdir(pdf_dir) if f.lower().endswith(".pdf")]
results = []
for f in files:
    full_path = os.path.join(pdf_dir, f)
    try:
        doc = fitz.open(full_path)
        page = doc.load_page(0)
        pix = page.get_pixmap(dpi=150)
        
        mode = "RGBA" if pix.alpha else "RGB"
        img = Image.frombytes(mode, [pix.width, pix.height], pix.samples)
        
        base_name = os.path.splitext(f)[0]
        # Clean the name like we did in JS
        safe_name = re.sub(r'\s+', '-', base_name.lower())
        final_filename = f"our-heritage-{safe_name}.webp"
        dest_path = os.path.join(dest_dir, final_filename)
        
        img.save(dest_path, "webp", quality=80)
        
        results.append({
            "src": f"/images/gallery/hotel/{final_filename}",
            "alt": f"Our Heritage - {base_name}",
            "category": "Hotel"
        })
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("RESULTS_START")
print(json.dumps(results, indent=2))
print("RESULTS_END")
