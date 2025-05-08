import type { NextConfig } from "next";
import process from "node:process";

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
  output: "standalone",
  headers() {
    return new Promise((resolve) =>
      resolve([
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: cspHeader.replace(/\n/g, ""),
            },
          ],
        },
      ]),
    );
  },
};

export default nextConfig;
