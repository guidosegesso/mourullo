import type { NextConfig } from "next";

const repoName = "mourullo";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logosbynick.com",
      },
    ],
  },
};

export default nextConfig;
