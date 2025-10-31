import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config goes here
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // // optional: if deploying under username.github.io/repo
  // basePath: '/rossssselle.github.io',
  // assetPrefix: '/rossssselle.github.io/',

};

export default nextConfig;
