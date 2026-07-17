import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/skooby",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
