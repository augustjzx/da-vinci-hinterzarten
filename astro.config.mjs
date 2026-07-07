import node from "@astrojs/node";
import react from "@astrojs/react";
import { seoGraphPlugin } from "@dineway-ai/plugin-seo-graph";
import { defineConfig } from "astro/config";
import dineway, { local } from "dineway/astro";
import { libsql } from "dineway/db";

export default defineConfig({
  site: process.env.DINEWAY_SITE_URL || "http://localhost:4321",
  output: "server",
  adapter: node({ mode: "standalone" }),
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  integrations: [
    react(),
    dineway({
      database: libsql({ url: process.env.DINEWAY_DATABASE_URL || "file:./data.db" }),
      storage: local({ directory: process.env.DINEWAY_UPLOADS_DIR || "./uploads", baseUrl: "/_dineway/api/media/file" }),
      plugins: [seoGraphPlugin()],
    }),
  ],
  devToolbar: { enabled: false },
});
