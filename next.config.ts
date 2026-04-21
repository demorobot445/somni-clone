import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "cdn.shopify.com" }],
  },
};

export default nextConfig;
