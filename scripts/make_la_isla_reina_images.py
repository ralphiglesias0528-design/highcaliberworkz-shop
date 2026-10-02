"""Optimize La Isla Reina Line images for web (~1200px webp) into public/images/.

Prefers the finished Printful crop-top mockups; falls back to the flat art
previews on black as placeholders when a mockup doesn't exist yet.
Re-run after the remaining mockups land to swap placeholders out.
"""
import os
from PIL import Image

MOCKUPS = '/workspace/share/previews/printful/la-isla-reina'
FLAT = '/workspace/share/previews/la-isla-reina'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

# slug-base -> (mockup file, flat-art fallback)
ITEMS = {
    'la-isla-reina-crop': ('isla-reina-cotton-crop-1474.png', 'isla-reina-front_on-black.png'),
    'la-isla-reina-moto-crop': ('isla-reina-moto-crop-1474.png', 'isla-reina-motorcycle_on-black.png'),
    'la-isla-reina-pina-colada-crop': ('isla-reina-pina-crop-1474.png', 'isla-reina-cooler_on-black.png'),
    'la-isla-reina-waterfall-crop': ('isla-reina-waterfall-crop-1474.png', 'isla-reina-waterfall_on-black.png'),
}

for base, (mock, flat) in ITEMS.items():
    mpath = os.path.join(MOCKUPS, mock)
    if os.path.exists(mpath):
        src, out_name = mpath, f'{base}-front.webp'
    else:
        src, out_name = os.path.join(FLAT, flat), f'{base}-art.webp'
    im = Image.open(src)
    im.thumbnail((1200, 1200), Image.LANCZOS)
    dst = os.path.join(OUT, out_name)
    im.save(dst, 'WEBP', quality=85, method=6)
    kind = 'mockup' if src == mpath else 'PLACEHOLDER (flat art)'
    print(f'{out_name}: {im.size} {os.path.getsize(dst)//1024} KB <- {kind} {src}')
