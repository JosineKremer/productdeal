import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sdeal-v2",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
