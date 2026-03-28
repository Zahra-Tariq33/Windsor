import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "windsorconsultancyservices.com",
      },
    ],
  },
  experimental: {
    // Optimize memory usage
    workerThreads: false,
    cpus: 1,
  },
  // Ensure public assets are properly handled
  assetPrefix: undefined,
  output: 'export',
  // Empty turbopack config to use Turbopack by default
  turbopack: {},
};

export default nextConfig;
