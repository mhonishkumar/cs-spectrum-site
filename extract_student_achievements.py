import os
import json

base_dir = 'public/achievements'
exclude_dirs = {'NPTEL Certificates', 'faculty-certificates'}

achievements = []

for item in os.listdir(base_dir):
    dir_path = os.path.join(base_dir, item)
    if os.path.isdir(dir_path) and item not in exclude_dirs:
        # Find txt file and image
        txt_content = ""
        img_path = ""
        for file in os.listdir(dir_path):
            if file.endswith('.txt'):
                with open(os.path.join(dir_path, file), 'r', encoding='utf-8', errors='ignore') as f:
                    txt_content = f.read().strip()
            elif file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                img_path = f"/achievements/{item}/{file}"
                
        if img_path:
            # Create a short description from the first paragraph
            paragraphs = [p.strip() for p in txt_content.split('\n') if p.strip()]
            short_desc = paragraphs[0] if paragraphs else ""
            if len(short_desc) > 150:
                short_desc = short_desc[:147] + "..."
                
            achievements.append({
                "id": item.lower().replace(" ", "-"),
                "title": item,
                "description": txt_content,
                "shortDescription": short_desc,
                "image": img_path
            })

ts_content = f"""export interface StudentAchievement {{
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
}}

export const STUDENT_ACHIEVEMENTS: StudentAchievement[] = {json.dumps(achievements, indent=2)};
"""

with open('src/data/studentAchievements.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully extracted {len(achievements)} student achievements.")
