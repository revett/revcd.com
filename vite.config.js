import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import rawPlugin from "vite-raw-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rawPlugin({
      fileRegex: /src\/posts\/.*\.md$/,
    }),
  ],
})
