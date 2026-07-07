import type { APIRoute } from "astro";

const pages = ["/", "/menu", "/reviews", "/gallery", "/blog", "/news", "/contact"];

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? "http://localhost:4321";
  const items = pages
    .map(
      (p) => `<url><loc>${origin}${p}</loc><changefreq>weekly</changefreq></url>`
    )
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
};
