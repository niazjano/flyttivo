#!/usr/bin/env python3
"""Generate Flyttivo favicon assets (flat navy + white F). Requires Pillow."""

from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError:
    raise SystemExit("Install Pillow: pip3 install pillow")

ROOT = Path(__file__).resolve().parent.parent / "public"
NAVY = (15, 23, 42)  # #0f172a
WHITE = (255, 255, 255)


def draw_f(size: int) -> Image.Image:
    img = Image.new("RGB", (size, size), NAVY)
    draw = ImageDraw.Draw(img)
    radius = max(2, round(size * 0.21875))
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=NAVY)

    s = size / 32.0

    def rect(x0: float, y0: float, x1: float, y1: float) -> None:
        draw.rectangle(
            [int(x0 * s), int(y0 * s), int(x1 * s) - 1, int(y1 * s) - 1],
            fill=WHITE,
        )

    # Bold geometric F — readable at 16px
    rect(9, 8, 13, 24)   # stem
    rect(9, 8, 22, 12)   # top bar
    rect(9, 15, 18, 18.5)  # middle bar

    return img


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)

    img16 = draw_f(16)
    img32 = draw_f(32)
    img48 = draw_f(48)
    img180 = draw_f(180)

    img16.save(ROOT / "favicon-16x16.png", "PNG", optimize=True)
    img32.save(ROOT / "favicon-32x32.png", "PNG", optimize=True)
    img48.save(ROOT / "favicon-48x48.png", "PNG", optimize=True)
    img180.save(ROOT / "apple-touch-icon.png", "PNG", optimize=True)

    img16.save(
        ROOT / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[img32, img48],
    )

    print("Generated favicons in", ROOT)


if __name__ == "__main__":
    main()
