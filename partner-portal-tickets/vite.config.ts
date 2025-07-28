import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isSSR = mode === "ssr" || process.env.BUILD_TARGET === "ssr";

  return {
    plugins: [
      react(),
      federation({
        name: "ticket",
        filename: "remoteEntry.js",
        exposes: {
          "./TicketsApp": "./src/TicketsApp.tsx",
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      target: "esnext", // permite top-level await e outros recursos modernos
      ssr: isSSR,
      outDir: isSSR ? "dist/server" : "dist/client",
      rollupOptions: {
        input: isSSR
          ? path.resolve(__dirname, "src/entry-server.tsx")
          : path.resolve(__dirname, "public/index.html"),
        // NÃO externalize react-router-dom no SSR, pois ele pode ser entry module
        // externalize apenas libs que você tem certeza que quer fora do bundle SSR, ex:
        external: [],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
