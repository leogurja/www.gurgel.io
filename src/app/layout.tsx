import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/organisms/navbar";
import "@/styles/globals.css";
import { Fira_Code, Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	variable: "--font-inter",
	preload: true,
	display: "swap",
	style: ["normal", "italic"],
	weight: "variable",
});

const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
	display: "swap",
	style: "normal",
	weight: "variable",
});

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
	themeColor: "#0c0a09",
	initialScale: 1.0,
	width: "device-width",
} satisfies Viewport;

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className="w-full overflow-x-hidden scroll-smooth bg-stone-950"
		>
			<head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={`min-h-screen w-full text-stone-100 antialiased ${inter.variable} ${firaCode.variable} font-inter`}
			>
				<Navbar />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
