import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

const isSSR = process.env.BUILD_TARGET === "ssr";

export default defineConfig({
  plugins: [
    react(),
    !isSSR &&
      federation({
        name: "host",
        remotes: {
          ticket: "http://localhost:3001/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    outDir: isSSR ? "dist/server" : "dist/client",
    ssr: isSSR ? "src/entry-server.tsx" : undefined,
    manifest: !isSSR,
    rollupOptions: {
      input: isSSR ? undefined : path.resolve(__dirname, "index.html"),
    },
  },
  ssr: {
    noExternal: ["react-router", "react-router-dom"],
  },
});
