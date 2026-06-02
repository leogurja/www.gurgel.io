import process from "node:process";

import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' va.vercel-scripts.com 'unsafe-inline' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
  img-src 'self' data:;
  style-src 'self' 'unsafe-inline';
  frame-ancestors 'none';
  object-src 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: false,
  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,
  images: {
    qualities: [100, 75],
  },
  cacheLife: {
    footer: {
      stale: 2592000,
      revalidate: 2592000,
      expire: 2592000,
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
