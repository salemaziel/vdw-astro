# Repository Guidelines

## Project Structure

- `src/pages/`: file-based routes (e.g., `src/pages/index.astro`).
- `src/components/`: reusable UI components (`*.astro`, optional React).
- `src/layouts/`: shared page shells (e.g., `src/layouts/Layout.astro`).
- `src/styles/`: global styles (Tailwind is imported via `src/styles/global.css`).
- `public/`: static assets served as-is (favicons, images).
- `dist/`: production build output (generated; do not edit by hand).

## Build, Test, and Development Commands

Use `npm` (this repo includes `package-lock.json`).

- `npm ci`: install deps from the lockfile (preferred for CI/repro).
- `npm run dev`: start local dev server (Astro).
- `npm run build`: build the site into `dist/`.
- `npm run preview`: serve the built site locally for a production-like check.
- `npm run astro check`: type-check and validate Astro project configuration.

## Coding Style & Naming Conventions

- Match existing formatting in the file you’re editing (Astro/JS/CSS currently use tabs in many files).
- TypeScript is configured with `astro/tsconfigs/strict` (`tsconfig.json`); keep types explicit for non-trivial props/functions.
- Prefer Astro components (`*.astro`) for pages/layouts; use React (`@astrojs/react`) when interactivity is needed.
- Naming: `PascalCase` for components (e.g., `HeroSection.astro`), `kebab-case` for route filenames when adding pages (e.g., `src/pages/about-us.astro`).

## Testing Guidelines

No test runner is configured yet. If you introduce logic worth testing, add a lightweight setup (prefer Vitest, since Astro uses Vite) and use one of:

- `src/**/*.test.ts` for unit tests
- `src/**/__tests__/*.test.ts` for grouped tests

## Commit & Pull Request Guidelines

- Commit history is small and uses short, imperative subjects (e.g., “Add …”, “initial commit”); keep commits scoped and readable.
- PRs should include: a short summary, linked issue (if any), and screenshots for UI changes.
- Before requesting review, run `npm run build` and `npm run astro check`.

## CI / Deployment

GitHub Pages deployment is configured in `.github/workflows/static.yml` and runs on pushes to `main`. Keep build artifacts (`dist/`) out of source control unless the deployment strategy changes.
