import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "GlimmerMouseJs",
      fileName: "glimmer-mouse-js",
      formats: ["es", "umd"], // Ensuring both module formats are built
    },
    rollupOptions: {
      external: [], // No external dependencies
      output: {
        globals: {},
      },
    },
  },
  plugins: [dts()],
});
