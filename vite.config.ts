
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Preserve the existing server entry.
    server: { entry: "server" },
  },

  // Configure Nitro for Netlify hosting.
  nitro: {
    preset: "netlify",
  },
});
