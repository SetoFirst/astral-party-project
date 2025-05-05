import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astralparty.miraheze.org/wiki/Main_Page",
      },
    ],
  },
};

export default nextConfig;
