import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "windsorconsultancyservices.com",
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },



  typescript: {
    ignoreBuildErrors: false,
  },

  compress: true,
  poweredByHeader: false,
};

export default nextConfig;