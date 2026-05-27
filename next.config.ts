import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kromastudio.in" }],
        destination: "https://www.kromastudio.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
