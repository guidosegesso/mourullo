import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logosbynick.com",
      },
    ],
  },
};

export default nextConfig;
