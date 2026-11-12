"""Regenerates the PNG logo/icons (needs Pillow + Segoe UI Bold on Windows)."""
from PIL import Image, ImageDraw, ImageFont

FONT = "C:/Windows/Fonts/segoeuib.ttf"
CAPTION = "\\u011f"  # the literal text: \u011f


def make(n):
    s = n * 4
    im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * 0.22), fill=(227, 10, 23, 255))
    d.text((s * 0.5, s * 0.40), "ğ", font=ImageFont.truetype(FONT, int(s * 0.58)), fill="white", anchor="mm")
    if n >= 32:
        d.text((s * 0.5, s * 0.85), CAPTION, font=ImageFont.truetype(FONT, int(s * 0.2)),
               fill=(255, 255, 255, 230), anchor="mm")
    return im.resize((n, n), Image.LANCZOS)


for n in (16, 32, 48, 128):
    make(n).save(f"extension/icons/icon{n}.png")
make(512).save("assets/logo.png")
