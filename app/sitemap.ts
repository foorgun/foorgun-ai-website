import type { MetadataRoute } from "next";
import { allPosts, postPath, translationOf } from "@/components/site/blog";

const base = "https://foorgun.ai";
const pages = ["/", "/websites", "/automation", "/software", "/ki-coaching", "/prozessmanagement", "/forward-deployed-engineering", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = pages.flatMap((p) => {
    const en = `${base}${p === "/" ? "" : p}`;
    const de = `${base}/de${p === "/" ? "" : p}`;
    const alternates = { languages: { en, de, "x-default": en } };
    const priority = p === "/" ? 1 : 0.9;
    return [
      { url: en, lastModified: new Date(), priority, alternates },
      { url: de, lastModified: new Date(), priority: priority - 0.1, alternates },
    ];
  });

  const posts = allPosts().map((p) => {
    const tr = translationOf(p);
    const languages: Record<string, string> = { [p.lang]: `${base}${postPath(p)}` };
    if (tr) languages[tr.lang] = `${base}${postPath(tr)}`;
    return { url: `${base}${postPath(p)}`, lastModified: new Date(p.updated ?? p.date), priority: 0.7, alternates: { languages } };
  });

  return [
    ...localized,
    ...posts,
    { url: `${base}/check`, lastModified: new Date(), priority: 0.6 },
    ...["/impressum", "/datenschutz"].flatMap((p) => {
      const alternates = { languages: { en: `${base}${p}`, de: `${base}/de${p}` } };
      return [
        { url: `${base}${p}`, lastModified: new Date(), priority: 0.2, alternates },
        { url: `${base}/de${p}`, lastModified: new Date(), priority: 0.1, alternates },
      ];
    }),
  ];
}
