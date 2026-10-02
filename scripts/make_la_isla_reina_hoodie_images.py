"""La Isla Reina Hoodie images -> public/images/*.webp.

Source mockups are small screenshots on a white background with a light-grey
band at the top. Knock out the light background connected to the image edges
(transparent, like the crop-top mockups), tight-crop to the garment, pad to a
square (main image) and resize to ~1200px.
"""
import os
from collections import deque
from PIL import Image, ImageFilter

SRC = '/workspace/share/previews/printful/la-isla-reina'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')


def knock_out_background(im, thresh=200):
    im = im.convert('RGBA')
    w, h = im.size
    px = im.load()
    light = lambda x, y: min(px[x, y][:3]) >= thresh
    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if light(x, y):
                q.append((x, y)); seen[y * w + x] = 1
    for y in range(h):
        for x in (0, w - 1):
            if light(x, y) and not seen[y * w + x]:
                q.append((x, y)); seen[y * w + x] = 1
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not seen[ny * w + nx] and light(nx, ny):
                seen[ny * w + nx] = 1; q.append((nx, ny))
    alpha = Image.new('L', (w, h), 255)
    ap = alpha.load()
    for y in range(h):
        for x in range(w):
            if seen[y * w + x]:
                ap[x, y] = 0
    # soften the cut edge a touch
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.6))
    im.putalpha(alpha)
    return im


def tight(im, square, pad=1.04):
    l, t, r, b = im.getchannel('A').point(lambda a: 255 if a > 16 else 0).getbbox()
    im = im.crop((l, t, r, b))
    if square:
        side = int(max(im.size) * pad)
        sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
        sq.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
        return sq
    pw, ph = int(im.width * 1.02), int(im.height * 1.04)
    c = Image.new('RGBA', (pw, ph), (0, 0, 0, 0))
    c.paste(im, ((pw - im.width) // 2, (ph - im.height) // 2))
    return c


def fit_1200(im):
    s = 1200 / max(im.size)
    return im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)


main_src = os.path.join(SRC, 'isla-reina-hoodie-regular-mockup-front.png')
if not os.path.exists(main_src):
    main_src = os.path.join(SRC, 'isla-reina-hoodie-regular-front.png')

for src, name, square in [
    (main_src, 'la-isla-reina-hoodie-front.webp', True),
    (os.path.join(SRC, 'isla-reina-hoodie-regular-combo.png'), 'la-isla-reina-hoodie-combo.webp', False),
]:
    im = fit_1200(tight(knock_out_background(Image.open(src)), square))
    dst = os.path.join(OUT, name)
    im.save(dst, 'WEBP', quality=88, method=6)
    print(name, im.size, os.path.getsize(dst) // 1024, 'KB <-', src)
