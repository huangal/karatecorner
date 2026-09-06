import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export: `next build` emits a plain HTML/CSS/JS site into `out/`,
   * which is what the Plesk subdomain document root serves. The site has no
   * server-only features (no route handlers, server actions or dynamic
   * rendering), so nothing is lost.
   */
  output: "export",

  // Pin the workspace root so Next does not walk up past this project.
  turbopack: { root: __dirname },

  images: {
    /**
     * Required by `output: "export"`. Without it the export still emits
     * /_next/image?url=... URLs, which need Next's optimizer server — on a
     * static host every photo 404s. Images are served straight from source.
     */
    unoptimized: true,
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
