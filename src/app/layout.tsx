import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/templates/navbar";
import "@/styles/globals.css";
import { Fira_Code, Inter } from "next/font/google";
import { Footer } from "@/components/templates/footer";

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
	description: "Desenvolvedor Full Stack especializado em React",
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
		"ReactJS",
		"React.js",
		"Next",
		"Next.js",
		"Ruby",
		"Rails",
		"Full Stack",
		"Front-end",
		"Back-end",
	],
	authors: { name: "Leonardo Gurgel", url: "/" },
	alternates: {
		canonical: "/",
		// languages: {
		// 	en: "/en",
		// 	pt: "/pt",
		// },
	},
	openGraph: {
		type: "website",
		url: "/",
		title: "Leonardo Gurgel | Desenvolvedor Full Stack",
		description:
			"Veja meus projetos, experiências e habilidades com foco em React.",
		locale: "pt_BR",
		images: "https://gurgel.io/og-preview.webp",
	},
	twitter: {
		title: "Leonardo Gurgel | Desenvolvedor Full Stack",
		description:
			"Veja meus projetos, experiências e habilidades com foco em React.",
		card: "summary_large_image",
		images: "https://gurgel.io/twitter-preview.webp",
		site: "https://gurgel.io",
	},
	creator: "Leonardo Gurgel",
	robots: {
		follow: true,
		index: true,
	},
} satisfies Metadata;

export const viewport = {
	colorScheme: "dark",
	themeColor: "#0c0a09",
} satisfies Viewport;

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="pt"
			className="w-full overflow-x-hidden scroll-smooth bg-stone-950"
		>
			<body
				className={`min-h-screen w-full text-stone-100 antialiased ${inter.variable} ${firaCode.variable} font-inter`}
			>
				<noscript>Seu navegador não suporta JavaScript.</noscript>
				<Navbar />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
