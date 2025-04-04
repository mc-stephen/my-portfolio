import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        search: "",
        protocol: "https",
        pathname: "/assets/**",
        hostname: "directus.axxellance.com",
      },
    ],
  },
};

export default nextConfig;
