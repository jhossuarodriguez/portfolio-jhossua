import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  // site: "https://example.com", // set this to enable sitemap/RSS/canonical URLs
  vite: {
    plugins: [tailwindcss()],
  },
});
