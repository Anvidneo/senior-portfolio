import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static site: every page is prerendered to HTML at build time.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
