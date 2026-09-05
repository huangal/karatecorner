import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next does not walk up past this project.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
