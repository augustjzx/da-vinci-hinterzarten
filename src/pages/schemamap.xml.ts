import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url, request }) => {
  const origin = url.origin;
  const apiUrl = `${origin}/_dineway/api/plugins/seo-graph/schema/map`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data, null, 2), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Schema map unavailable" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }
};
