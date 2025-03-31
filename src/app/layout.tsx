import { Navbar } from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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
      className="scrollbar-thumb-zinc-900 scrollbar-track-transparent scrollbar-hover:scrollbar-zinc-800 scrollbar-thumb-rounded-full w-full scroll-smooth bg-zinc-950"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-inter min-h-screen w-full text-zinc-100 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
