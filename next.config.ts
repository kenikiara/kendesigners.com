import type { NextConfig } from "next";

// During the preview phase the site is served from a GitHub Pages *project* URL
// (kenikiara.github.io/kendesigners.com/), so it needs a basePath. The workflow
// sets PAGES_BASE_PATH for production builds; local dev/build stay at root.
// When we switch to the custom domain (kendesigners.com), drop this env and
// restore public/CNAME — no other changes needed.
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  // Expose the base path to client code so /public asset URLs resolve
  // correctly on GitHub Pages project sites (next/image does not prefix them).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
};

export default nextConfig;
