import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/pangasinan-heritage-showcase" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;