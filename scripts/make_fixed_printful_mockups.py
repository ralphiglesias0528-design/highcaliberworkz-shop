"""Fixed Printful ghost mockups (transparent PNGs) -> public/images/<slug>-front/back.webp.

Same treatment as the La Isla Reina mockups: tight-crop to the garment, pad to a
transparent square (4%), resize to 1200px, webp.
"""
import os
from PIL import Image

P = '/workspace/share/previews/printful'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

# product slug -> source prefix (append -front.png / -back.png)
SOURCES = {
    'bori-ninja-tee': f'{P}/fixes2/107945394',
    'tiburon-ninja-tee': f'{P}/fixes2/107945777',
    'vejigante-ninja-tee': f'{P}/fixes2/107946274',
    'bash-bros': f'{P}/fixes2/107631980',
    'freedom-weighs-a-ton': f'{P}/fixes2/107633202',
    'snacks-plans': f'{P}/fixes2/107633470',
    'stay-blessed-hoodie': f'{P}/fixes2/107643903',
    'snacks-plans-hoodie': f'{P}/fixes2/107644126',
    'pr-dna-hoodie': f'{P}/fixes2/107644843',
    'born-for-adversity-hoodie': f'{P}/fixes2/107646024',
    'stay-blessed': f'{P}/fixes/stay-blessed-tee',
    'freedom-weighs-a-ton-hoodie': f'{P}/fixes/freedom-weighs-hoodie',
    'pr-dna': f'{P}/fixes/pr-dna-white-tee',
}


def square_tight(im, pad=1.04):
    im = im.convert('RGBA')
    bbox = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    im = im.crop(bbox)
    side = int(max(im.size) * pad)
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
    return sq.resize((1200, 1200), Image.LANCZOS)


for slug, prefix in SOURCES.items():
    for view in ('front', 'back'):
        src = f'{prefix}-{view}.png'
        dst = os.path.join(OUT, f'{slug}-{view}.webp')
        square_tight(Image.open(src)).save(dst, 'WEBP', quality=88, method=6)
        print(f'{slug}-{view}.webp {os.path.getsize(dst) // 1024} KB <- {src}')
