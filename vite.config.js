import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/chakra-ui-table-w-pagination-sort-search/",
  build: {
    lib: {
      entry: path.resolve("src", "components/PaginationTable.jsx"),
      name: "PaginationTable",
      fileName: (format) => `PaginationTable.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
