// Optimize award/ceremony source images into web-ready files.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REFS = join(__dirname, "..", "_refs");
const OUT = join(__dirname, "..", "public", "awards");

const jobs = [
  // Trophy close-ups
  ["best website developer 2025.jpeg", "best-website-developer.jpg", 1100],
  ["award of the best ecommerce website developer .JPG", "best-ecommerce-developer.jpg", 1100],
  // Ceremony / certificate
  ["best ecommerce agency .JPG", "best-ecommerce-agency.jpg", 1400],
  ["award celebration.jpg", "ceremony-group.jpg", 1500],
  ["ken received best website developer .jpg", "ceremony-1.jpg", 1400],
  ["award.JPG", "ceremony-2.jpg", 1400],
];

const run = async () => {
  await mkdir(OUT, { recursive: true });
  for (const [src, dest, max] of jobs) {
    await sharp(join(REFS, src))
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(OUT, dest));
    console.log("✓", dest);
  }

  // Social/OG image (1200x630) from the live hero capture if present.
  try {
    await sharp(join(REFS, "live-hero.jpg"))
      .resize({ width: 1200, height: 630, fit: "cover", position: "top" })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(join(__dirname, "..", "public", "og.jpg"));
    console.log("✓ og.jpg");
  } catch {
    console.log("skip og.jpg (no live-hero source)");
  }
};

run();
