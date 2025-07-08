import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nest.navaxcollege.com',
      },
    ],
  },
};

export default nextConfig;
