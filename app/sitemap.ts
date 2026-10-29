import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://foorgun.ai";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/check`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/impressum`, lastModified: new Date(), priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date(), priority: 0.2 },
  ];
}
