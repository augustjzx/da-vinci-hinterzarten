import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? "http://localhost:4321";
  return new Response(
    `User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
};
