import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import "./_styles/globals.css";

export const metadata = {
  title: "Leonardo Gurgel",
  applicationName: "gurgel.io",
  description: "Desenvolvedor Full Stack especializado em React.js",
  metadataBase: new URL("https://gurgel.io"),
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
    "Front-end",
    "Back-end",
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
  themeColor: "oklch(0.147 0.004 49.25)",
} satisfies Viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scrollbar-thumb-stone-900 scrollbar-track-transparent scrollbar-hover:scrollbar-stone-800 scrollbar-thumb-rounded-full w-full scroll-smooth bg-stone-950"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen w-full font-inter text-stone-100 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
