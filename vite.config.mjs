import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "node:url";

const src = fileURLToPath(new URL("./src", import.meta.url));

// Substitui o react-scripts (Create React App), descontinuado e sem correções de segurança.
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    // imports absolutos a partir de src/ (equivalente ao baseUrl do jsconfig.json usado pelo CRA)
    alias: [{ find: /^(assets|components|pages|routes|store|styles)(?=\/|$)/, replacement: `${src}/$1` }],
  },
  css: {
    // @import 'styles/breakpoints' nos .scss, como o CRA resolvia
    preprocessorOptions: { scss: { loadPaths: [src] } },
  },
  server: { port: 3000 },
  // mesma pasta de saída do CRA
  build: { outDir: "build" },
});
