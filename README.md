# Hatoon Alsaihati — Portfolio

Personal portfolio, built with React (Vite) and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deploying to GitHub Pages (hatoonj.github.io/portfolio)

The site is configured with `base: "/portfolio/"` in `vite.config.js` to match the
existing project site at `https://hatoonj.github.io/portfolio/`.

**Option A — gh-pages branch (simplest):**

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist -b gh-pages
```

Then in the repo's GitHub Pages settings, set the source to the `gh-pages` branch.

**Option B — GitHub Actions:**

Add a workflow that runs `npm ci && npm run build` and deploys the `dist/`
folder via `actions/deploy-pages`. This keeps the site rebuilding automatically
on every push to `main`.

If the repository name or URL ever changes, update `base` in `vite.config.js`
to match (e.g. `"/"` for a custom domain or a `username.github.io` root site).

## Project structure

```
src/
  components/    UI components (one .jsx + co-located .css per component)
  context/       LightboxContext — shared image lightbox state
  data/          content.js — all real copy/content, kept separate from components
  assets/        optimized project images (webp) and portrait
public/
  documents/     resume PDF and certificates, linked directly from the site
```

All project content (case studies, more work, experiments, experience, stack)
lives in `src/data/content.js`. Update copy, links, or add new projects there
without touching component code.
