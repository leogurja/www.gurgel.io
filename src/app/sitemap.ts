import type { MetadataRoute } from "next";

export default function sitemap() {
	return [
		{
			url: "https://gurgel.io/",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	] satisfies MetadataRoute.Sitemap;
}
