import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (custom domain kendesigners.com → no basePath needed)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
