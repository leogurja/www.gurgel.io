import type { MetadataRoute } from "next";

export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://gurgel.io/sitemap.xml",
	} satisfies MetadataRoute.Robots;
}
