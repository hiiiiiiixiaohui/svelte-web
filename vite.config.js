import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  // console.log("env", process.cwd());
  return {
    plugins: [svelte()],
    css: {
      // devSourcemap: false,
      // transformer: "lightningcss",
    },
    server: {
      port: env.VITE_DEV_PORT,
      open: true,
      cors: true,
    },
    preview: {
      port: env.VITE_SERVE_PORT,
      open: true,
    },
    build: {
      target: "esnext",
      outDir: "./app",
      // cssMinify: "lightningcss",
    },
    optimizeDeps: {},
  };
});
