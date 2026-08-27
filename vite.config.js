import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// base is set to "/portfolio2/" so the production build matches the GitHub
// Pages project site at hatoonj.github.io/portfolio2/ (this is a separate
// site from the older hatoonj.github.io/portfolio/). Change this if the site
// moves to a custom domain or a different repo name.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio2/",
});
