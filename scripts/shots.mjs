// Headless screenshot capture for the portfolio.
// Usage: node scripts/shots.mjs
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "work");

const sites = [
  { slug: "maifa", url: "https://maifa.ke" },
  { slug: "porridge-powder", url: "https://porridgepowder.com" },
  { slug: "glory-care", url: "https://glorycareservices.com" },
  { slug: "pay-after-delivery", url: "https://payafterdelivery.co.ke" },
  { slug: "flex-interiors", url: "https://flexinteriors.co.ke" },
  { slug: "blue-lilac-tours", url: "https://bluelilactours.com" },
];

// Hide common floating widgets / banners that clutter a clean hero shot.
const cleanupCss = `
  [class*="whatsapp" i], [id*="whatsapp" i],
  [class*="chat" i][class*="widget" i], [class*="livechat" i],
  iframe[src*="tawk"], iframe[src*="crisp"], iframe[title*="chat" i],
  .cookie, [class*="cookie" i], [id*="cookie" i],
  [class*="back-to-top" i] { display: none !important; }
`;

const run = async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 1.25,
  });
  const page = await ctx.newPage();

  for (const { slug, url } of sites) {
    try {
      process.stdout.write(`→ ${slug} (${url}) ... `);
      await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
      await page.addStyleTag({ content: cleanupCss }).catch(() => {});
      // let sliders/lazy heroes settle, then return to top
      await page.waitForTimeout(3500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(800);
      await page.screenshot({
        path: join(OUT, `${slug}.jpg`),
        type: "jpeg",
        quality: 86,
        clip: { x: 0, y: 0, width: 1600, height: 1000 },
      });
      console.log("ok");
    } catch (err) {
      console.log("FAILED:", err.message);
    }
  }

  await browser.close();
};

run();
