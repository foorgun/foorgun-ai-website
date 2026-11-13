import fs from "node:fs";
import path from "node:path";

// Englisch ist Standard (ohne Präfix), Deutsch liegt unter /de.
// Alte URLs weiterleiten: /en/* -> /*, alte deutsche Blog-Slugs /blog/<de-slug> -> /de/blog/<de-slug>.
function slugs(lang) {
  const dir = path.join(process.cwd(), "content/blog");
  return fs.readdirSync(dir).flatMap((id) => {
    const file = path.join(dir, id, `${lang}.md`);
    if (!fs.existsSync(file)) return [];
    const m = fs.readFileSync(file, "utf8").match(/^slug:\s*(.+)$/m);
    return m ? [m[1].trim().replace(/^["']|["']$/g, "")] : [];
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const en = new Set(slugs("en"));
    const oldDeBlog = slugs("de")
      .filter((s) => !en.has(s))
      .map((s) => ({ source: `/blog/${s}`, destination: `/de/blog/${s}`, permanent: true }));
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      ...oldDeBlog,
    ];
  },
};

export default nextConfig;
