import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repo name is not 'flyttivo', update this basePath
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // trailingSlash: true,
};

export default nextConfig;
