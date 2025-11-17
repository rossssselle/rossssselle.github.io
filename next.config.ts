import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config goes here
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'docs',


};

export default nextConfig;
