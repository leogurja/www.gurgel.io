import { Navbar } from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./_styles/globals.css";

export const metadata = {
  title: "Leonardo Gurgel",
  applicationName: "Leonardo Gurgel",
  description: "Desenvolvedor Full Stack especializado em React.js",
  keywords: [
    "Leonardo",
    "Gurgel",
    "Maciel",
    "Ferreira",
    "Desenvolvedor",
    "Dev",
    "Developer",
    "React",
    "React.js",
    "Next",
    "Next.js",
    "Ruby",
    "Rails",
    "Full Stack",
    "Full-Stack",
    "FullStack",
    "Front-end",
    "Back-end",
    "Frontend",
    "Backend",
  ],
  authors: { name: "Leonardo Gurgel", url: "https://gurgel.io" },
  creator: "Leonardo Gurgel",
  robots: {
    follow: true,
    index: true,
  },
} satisfies Metadata;

export const viewport = {
  colorScheme: "dark",
  themeColor: "oklch(0.129 0.042 264.695)",
} satisfies Viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scrollbar-thumb-gray-900 scrollbar-track-transparent scrollbar-hover:scrollbar-gray-800 scrollbar-thumb-rounded-full bg-gray-950"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-inter min-h-screen scroll-smooth text-gray-100 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
