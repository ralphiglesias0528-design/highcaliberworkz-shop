#!/usr/bin/env python3
"""Generate photoreal-ish hoodie mockups with real print art composited."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

SHOP = Path("/workspace/highcaliberworkz-shop/public/images")
PRINTFUL = Path("/workspace/high-caliber/printful")
OUT = SHOP
W, H = 1000, 1200
CX = W // 2

COLORS = {
    "Black": (28, 28, 30),
    "White": (242, 242, 245),
    "Sand": (206, 180, 145),
}

# Studio backdrop — light enough that black hoodies read clearly
BG = (72, 74, 80)


def shade(base, factor):
    return tuple(max(0, min(255, int(c * factor))) for c in base)


def apply_fabric_texture(img: Image.Image, strength=5, seed=1) -> Image.Image:
    arr = np.array(img).astype(np.int16)
    rng = np.random.default_rng(seed)
    noise = rng.integers(-strength, strength + 1, size=(*img.size[::-1], 1), dtype=np.int16)
    arr[:, :, :3] = np.clip(arr[:, :, :3] + noise, 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def draw_hoodie_front(color_name: str) -> Image.Image:
    base = COLORS[color_name]
    dark = shade(base, 0.52)
    mid = shade(base, 0.72)
    light = shade(base, 1.22 if color_name != "White" else 1.06)
    hi = shade(base, 1.4 if color_name != "White" else 1.1)
    shadow = shade(base, 0.35)
    rim = (200, 200, 205) if color_name == "Black" else shade(base, 0.35)

    img = Image.new("RGBA", (W, H), (*BG, 255))
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    # Body
    body = [
        (CX - 230, 280),
        (CX - 265, 350),
        (CX - 280, 860),
        (CX - 220, 1060),
        (CX + 220, 1060),
        (CX + 280, 860),
        (CX + 265, 350),
        (CX + 230, 280),
    ]
    draw.polygon(body, fill=base)

    # Sleeves
    left_sleeve = [
        (CX - 230, 280), (CX - 380, 340), (CX - 430, 680),
        (CX - 370, 715), (CX - 305, 700), (CX - 275, 430), (CX - 265, 350),
    ]
    right_sleeve = [
        (CX + 230, 280), (CX + 380, 340), (CX + 430, 680),
        (CX + 370, 715), (CX + 305, 700), (CX + 275, 430), (CX + 265, 350),
    ]
    draw.polygon(left_sleeve, fill=mid)
    draw.polygon(right_sleeve, fill=mid)

    # Cuffs
    draw.rounded_rectangle([CX - 430, 665, CX - 305, 720], radius=16, fill=dark)
    draw.rounded_rectangle([CX + 305, 665, CX + 430, 720], radius=16, fill=dark)
    # Hem
    draw.rounded_rectangle([CX - 225, 1035, CX + 225, 1090], radius=18, fill=dark)

    # === HOOD (very visible) ===
    # Outer hood mound
    draw.ellipse([CX - 195, 70, CX + 195, 300], fill=mid)
    # Hood side panels (ears)
    draw.polygon([(CX - 195, 170), (CX - 255, 260), (CX - 175, 320), (CX - 120, 270)], fill=dark)
    draw.polygon([(CX + 195, 170), (CX + 255, 260), (CX + 175, 320), (CX + 120, 270)], fill=dark)
    # Face opening
    draw.ellipse([CX - 105, 145, CX + 105, 285], fill=shadow)
    # Inner rim
    draw.arc([CX - 105, 145, CX + 105, 285], 200, 340, fill=light, width=8)
    # Hood top highlight
    draw.ellipse([CX - 90, 85, CX + 90, 160], fill=(*light, 180) if False else light)
    # Shoulder yoke
    draw.polygon([(CX - 175, 275), (CX - 230, 330), (CX + 230, 330), (CX + 175, 275)], fill=mid)

    # Drawstrings
    ds = (235, 235, 240) if color_name == "Black" else shade(base, 0.45)
    draw.line([(CX - 40, 275), (CX - 55, 470)], fill=ds, width=5)
    draw.line([(CX + 40, 275), (CX + 55, 470)], fill=ds, width=5)
    draw.ellipse([CX - 64, 458, CX - 46, 488], fill=hi)
    draw.ellipse([CX + 46, 458, CX + 64, 488], fill=hi)

    # === KANGAROO POCKET ===
    draw.rounded_rectangle([CX - 175, 680, CX + 175, 900], radius=32, fill=mid)
    draw.line([(CX - 155, 700), (CX + 155, 700)], fill=dark, width=4)
    # Hand openings
    draw.arc([CX - 175, 710, CX - 35, 880], 200, 330, fill=shadow, width=7)
    draw.arc([CX + 35, 710, CX + 175, 880], 210, 340, fill=shadow, width=7)
    draw.arc([CX - 130, 850, CX + 130, 910], 20, 160, fill=light, width=3)

    # Center stitch
    draw.line([(CX, 340), (CX, 680)], fill=shade(base, 0.88), width=2)

    # Soft shading
    shade_l = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade_l)
    sd.ellipse([CX - 300, 340, CX - 160, 560], fill=(0, 0, 0, 55))
    sd.ellipse([CX + 160, 340, CX + 300, 560], fill=(0, 0, 0, 55))
    sd.ellipse([CX - 110, 420, CX + 110, 620], fill=(*hi, 40))
    sd.ellipse([CX - 140, 720, CX + 140, 880], fill=(0, 0, 0, 45))
    shade_l = shade_l.filter(ImageFilter.GaussianBlur(20))
    layer = Image.alpha_composite(layer, shade_l)

    # Rim light outline so black hoodie pops on gray bg
    outline = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    # Extract alpha mask of garment and stroke it
    alpha = layer.split()[-1]
    # Dilate via max filter for outline
    dilated = alpha.filter(ImageFilter.MaxFilter(5))
    rim_mask = ImageChops_subtract(dilated, alpha)
    rim_img = Image.new("RGBA", (W, H), (*rim, 90))
    rim_img.putalpha(rim_mask)
    # Actually simpler: draw stroke on body polygon
    od = ImageDraw.Draw(outline)
    od.line(body + [body[0]], fill=(*rim, 110), width=3)
    od.line(left_sleeve + [left_sleeve[0]], fill=(*rim, 80), width=2)
    od.line(right_sleeve + [right_sleeve[0]], fill=(*rim, 80), width=2)
    od.ellipse([CX - 195, 70, CX + 195, 300], outline=(*rim, 100), width=3)
    outline = outline.filter(ImageFilter.GaussianBlur(1))

    img = Image.alpha_composite(img, layer)
    img = Image.alpha_composite(img, outline)
    img = apply_fabric_texture(img, 4 if color_name != "White" else 2, seed=11)
    return img


def ImageChops_subtract(a, b):
    """Return dilated-alpha minus alpha as a mask."""
    aa = np.array(a).astype(np.int16)
    bb = np.array(b).astype(np.int16)
    out = np.clip(aa - bb, 0, 255).astype(np.uint8)
    return Image.fromarray(out, mode="L")


def draw_hoodie_back(color_name: str) -> Image.Image:
    base = COLORS[color_name]
    dark = shade(base, 0.52)
    mid = shade(base, 0.72)
    light = shade(base, 1.22 if color_name != "White" else 1.06)
    hi = shade(base, 1.35 if color_name != "White" else 1.08)
    rim = (200, 200, 205) if color_name == "Black" else shade(base, 0.35)

    img = Image.new("RGBA", (W, H), (*BG, 255))
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    body = [
        (CX - 230, 280), (CX - 265, 350), (CX - 280, 860),
        (CX - 220, 1060), (CX + 220, 1060), (CX + 280, 860),
        (CX + 265, 350), (CX + 230, 280),
    ]
    draw.polygon(body, fill=base)
    left_sleeve = [
        (CX - 230, 280), (CX - 380, 340), (CX - 430, 680),
        (CX - 370, 715), (CX - 305, 700), (CX - 275, 430), (CX - 265, 350),
    ]
    right_sleeve = [
        (CX + 230, 280), (CX + 380, 340), (CX + 430, 680),
        (CX + 370, 715), (CX + 305, 700), (CX + 275, 430), (CX + 265, 350),
    ]
    draw.polygon(left_sleeve, fill=mid)
    draw.polygon(right_sleeve, fill=mid)
    draw.rounded_rectangle([CX - 430, 665, CX - 305, 720], radius=16, fill=dark)
    draw.rounded_rectangle([CX + 305, 665, CX + 430, 720], radius=16, fill=dark)
    draw.rounded_rectangle([CX - 225, 1035, CX + 225, 1090], radius=18, fill=dark)

    # Hood from behind — large rounded mound
    draw.ellipse([CX - 210, 55, CX + 210, 310], fill=mid)
    draw.ellipse([CX - 130, 70, CX + 130, 175], fill=light)
    draw.line([(CX, 75), (CX, 295)], fill=dark, width=4)
    draw.polygon([(CX - 210, 175), (CX - 265, 270), (CX - 160, 330), (CX - 100, 270)], fill=dark)
    draw.polygon([(CX + 210, 175), (CX + 265, 270), (CX + 160, 330), (CX + 100, 270)], fill=dark)
    draw.polygon([(CX - 165, 280), (CX - 230, 340), (CX + 230, 340), (CX + 165, 280)], fill=mid)

    shade_l = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade_l)
    sd.ellipse([CX - 300, 340, CX - 160, 560], fill=(0, 0, 0, 50))
    sd.ellipse([CX + 160, 340, CX + 300, 560], fill=(0, 0, 0, 50))
    sd.ellipse([CX - 150, 400, CX + 150, 780], fill=(*hi, 32))
    shade_l = shade_l.filter(ImageFilter.GaussianBlur(20))
    layer = Image.alpha_composite(layer, shade_l)

    outline = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(outline)
    od.line(body + [body[0]], fill=(*rim, 110), width=3)
    od.ellipse([CX - 210, 55, CX + 210, 310], outline=(*rim, 110), width=3)
    outline = outline.filter(ImageFilter.GaussianBlur(1))

    img = Image.alpha_composite(img, layer)
    img = Image.alpha_composite(img, outline)
    img = apply_fabric_texture(img, 4 if color_name != "White" else 2, seed=22)
    return img


def key_near_black(im: Image.Image, thresh: int = 28, soft: int = 14) -> Image.Image:
    rgba = im.convert("RGBA")
    arr = np.array(rgba).astype(np.float32)
    lum = arr[:, :, :3].mean(axis=2)
    alpha = np.clip((lum - thresh) / max(soft, 1), 0, 1)
    arr[:, :, 3] = arr[:, :, 3] * alpha
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def key_fabric_black_keep_art(im: Image.Image, thresh: int = 42) -> Image.Image:
    rgba = im.convert("RGBA")
    arr = np.array(rgba).astype(np.float32)
    rgb = arr[:, :, :3]
    mx = rgb.max(axis=2)
    mn = rgb.min(axis=2)
    sat = mx - mn
    lum = rgb.mean(axis=2)
    keep = np.clip((np.maximum(lum - thresh, 0) + sat * 0.85) / 38.0, 0, 1)
    arr[:, :, 3] = arr[:, :, 3] * keep
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def trim_alpha(im: Image.Image, pad: int = 6) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    l, t, r, b = bbox
    return im.crop((max(0, l - pad), max(0, t - pad), min(im.width, r + pad), min(im.height, b + pad)))


def crop_main_art(im: Image.Image, top_frac=0.08, bottom_frac=0.92, side_frac=0.08) -> Image.Image:
    """Crop away sheet chrome / corner logos; keep central print."""
    w, h = im.size
    return im.crop((int(w * side_frac), int(h * top_frac), int(w * (1 - side_frac)), int(h * bottom_frac)))


def paste_centered(base, art, cx, cy, max_w, max_h, opacity=1.0):
    art = art.convert("RGBA")
    art.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)
    if opacity < 1.0:
        a = np.array(art)
        a[:, :, 3] = (a[:, :, 3] * opacity).astype(np.uint8)
        art = Image.fromarray(a)
    x = int(cx - art.width / 2)
    y = int(cy - art.height / 2)
    out = base.copy()
    out.alpha_composite(art, (x, y))
    return out


def paste_left_chest(base, art, max_size=125):
    art = art.convert("RGBA")
    art.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
    x = CX + 40
    y = 370
    out = base.copy()
    out.alpha_composite(art, (x, y))
    return out


def load_logo_keyed(path: Path) -> Image.Image:
    im = Image.open(path)
    arr = np.array(im.convert("RGBA"))
    if arr[:, :, 3].min() == 0:
        return trim_alpha(im.convert("RGBA"))
    return trim_alpha(key_near_black(im, thresh=20, soft=16))


def load_print(path: Path, key_black=False, fabric_key=False) -> Image.Image:
    im = Image.open(path).convert("RGBA")
    if fabric_key:
        return trim_alpha(key_fabric_black_keep_art(im, thresh=40))
    if key_black:
        arr = np.array(im)
        if arr[:, :, 3].min() > 200:
            im = key_near_black(im, thresh=16, soft=12)
        return trim_alpha(im)
    return trim_alpha(im)


def save_rgb(im: Image.Image, path: Path):
    bg = Image.new("RGB", im.size, BG)
    bg.paste(im, mask=im.split()[-1] if im.mode == "RGBA" else None)
    bg = ImageEnhance.Contrast(bg).enhance(1.06)
    bg = ImageEnhance.Sharpness(bg).enhance(1.1)
    bg.save(path, "PNG", optimize=True)
    print(f"  wrote {path.name} {bg.size}")


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    stay_back = load_print(PRINTFUL / "stay-blessed/back-print.png")
    stay_logo = load_logo_keyed(PRINTFUL / "stay-blessed/front-chest-logo.png")

    # Prefer back-raw cropped to main scene; fall back to keyed back-print
    bash_raw = load_print(PRINTFUL / "bash-bros/back-raw.png", key_black=True)
    bash_back = crop_main_art(bash_raw, 0.12, 0.98, 0.02)
    bash_logo = load_logo_keyed(PRINTFUL / "bash-bros/front-chest-logo.png")

    born_raw = load_print(PRINTFUL / "born-for-adversity/back-raw.png", key_black=True)
    born_back = crop_main_art(born_raw, 0.05, 0.98, 0.02)
    born_logo = load_logo_keyed(PRINTFUL / "born-for-adversity/front-chest-logo.png")

    snacks_front = load_print(PRINTFUL / "snacks-plans/front-print.png", fabric_key=True)
    snacks_back = load_print(PRINTFUL / "snacks-plans/back-print.png", fabric_key=True)

    pr_front = load_print(PRINTFUL / "pr-dna/front-print.png")
    pr_nape = load_print(PRINTFUL / "pr-dna/back-logo.png")

    fw_front = load_print(PRINTFUL / "freedom-weighs/front-print.png")
    fw_nape = load_print(PRINTFUL / "freedom-weighs/nape-logo.png")

    # Stay Blessed — Sand; primary = back (big art), also front with logo
    front = paste_left_chest(draw_hoodie_front("Sand"), stay_logo, 130)
    save_rgb(front, OUT / "stay-blessed-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("Sand"), stay_back, CX, 620, 460, 560)
    save_rgb(back, OUT / "stay-blessed-hoodie-back.png")

    # Bash Bros — Black
    front = paste_left_chest(draw_hoodie_front("Black"), bash_logo, 125)
    save_rgb(front, OUT / "bash-bros-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("Black"), bash_back, CX, 620, 480, 560)
    save_rgb(back, OUT / "bash-bros-hoodie-back.png")

    # Born for Adversity — Black
    front = paste_left_chest(draw_hoodie_front("Black"), born_logo, 125)
    save_rgb(front, OUT / "born-for-adversity-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("Black"), born_back, CX, 620, 460, 560)
    save_rgb(back, OUT / "born-for-adversity-hoodie-back.png")

    # Snacks — Black
    front = paste_centered(draw_hoodie_front("Black"), snacks_front, CX, 520, 420, 220)
    save_rgb(front, OUT / "snacks-plans-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("Black"), snacks_back, CX, 620, 480, 520)
    save_rgb(back, OUT / "snacks-plans-hoodie-back.png")

    # PR DNA — White; large front primary
    front = paste_centered(draw_hoodie_front("White"), pr_front, CX, 540, 440, 520)
    save_rgb(front, OUT / "pr-dna-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("White"), pr_nape, CX, 370, 150, 150)
    save_rgb(back, OUT / "pr-dna-hoodie-back.png")

    # Freedom Weighs — Black; large front primary
    front = paste_centered(draw_hoodie_front("Black"), fw_front, CX, 540, 440, 540)
    save_rgb(front, OUT / "freedom-weighs-hoodie-front.png")
    back = paste_centered(draw_hoodie_back("Black"), fw_nape, CX, 370, 150, 150)
    save_rgb(back, OUT / "freedom-weighs-hoodie-back.png")

    print("All hoodie mockups written.")


if __name__ == "__main__":
    main()
