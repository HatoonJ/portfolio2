import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// base is set to "/portfolio/" so the production build matches the existing
// GitHub Pages project site at hatoonj.github.io/portfolio/. Change this if
// the site moves to a custom domain or a different repo name.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
