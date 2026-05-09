import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "portfolio-itsmeprince.vercel.app",
          },
        ],
        destination: "https://www.itsmeprince.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
