import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pangasinan-heritage-showcase",
  assetPrefix: "/pangasinan-heritage-showcase/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;