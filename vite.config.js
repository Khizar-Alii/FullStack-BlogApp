import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    sourcemapIgnoreList: () => true, // Ignore missing source map warnings
  },
  css: {
    devSourcemap: false, // Disable CSS source maps in development
  },
});
