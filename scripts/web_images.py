"""
WEB COPIES OF THE PAINTINGS
---------------------------
    npm run images      (or: python3 scripts/web_images.py)

For every painting in content/paintings.js, makes two WebP copies of its
photo in images/web/:  <slug>.webp (longest side 2048 px, for laptops)
and <slug>-1024.webp (for phones). Run it after adding or replacing a
photo, and commit the results. Needs Python 3 with Pillow.
"""
import json, os, re, subprocess
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = subprocess.check_output(
    ['node', '-e', "console.log(JSON.stringify(require('./content/paintings.js')))"], cwd=ROOT)
out = os.path.join(ROOT, 'images', 'web')
os.makedirs(out, exist_ok=True)
for p in json.loads(data):
    im = ImageOps.exif_transpose(Image.open(os.path.join(ROOT, 'images', p['file']))).convert('RGB')
    for suffix, edge, q in (('', 2048, 88), ('-1024', 1024, 84)):
        c = im.copy()
        c.thumbnail((edge, edge), Image.LANCZOS)
        f = os.path.join(out, p['slug'] + suffix + '.webp')
        c.save(f, 'WEBP', quality=q, method=6)
        print('%-52s %5d KB  %dx%d' % (os.path.relpath(f, ROOT), os.path.getsize(f) // 1024, *c.size))
