import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root so a stray lockfile in the home directory
    // doesn't get picked up as the project root.
    root: path.join(__dirname),
  },
};

export default nextConfig;
