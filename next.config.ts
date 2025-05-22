import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/userupload/**",
      },
    ],
    // OR if you're not using remotePatterns:
    // domains: ['cdn.dribbble.com'],
  },
};

module.exports = nextConfig;
