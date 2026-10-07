# Repository guidance

## Commands and verification

- Use Node 24 and pnpm. This is a single app; `pnpm-workspace.yaml` configures dependency policy, not multiple packages.
- Install with `pnpm install --frozen-lockfile`. Its `postinstall` runs `nuxt prepare`; if `.nuxt` is missing or stale, run `pnpm exec nuxt prepare` before linting. ESLint and TypeScript configs depend on generated files there.
- `pnpm dev` serves on port **5173**. `pnpm build` produces `.output`; `pnpm preview` serves the build on **4173**.
- Checks: `pnpm lint`, `pnpm format:check`, `pnpm build`. No test suite or dedicated typecheck script is configured; do not treat the build as proof of typechecking.
- Focused checks: `pnpm exec eslint app/pages/contact.vue` and `pnpm exec prettier --check <changed-files>`. `pnpm format` writes across the repository, so use file-scoped formatting for narrow edits.
- The pre-commit hook runs `pnpm exec lint-staged`: ESLint fixes then Prettier for JS/TS/Vue, Prettier for supported data/style/docs files. It can modify staged files.
- Dependencies are saved exactly and peer dependencies are strict. `pnpm-workspace.yaml` excludes TypeScript and `@types/node` from bulk updates; preserve that policy.

## App wiring and gotchas

- Nuxt's source directory is `app/`; `@/` and `~/` resolve there. `app/app.vue` renders the shared theme toggle and `NuxtPage`; routes live in `app/pages/`.
- Project and contact content comes from `app/data/projects.ts` and `app/data/contact.ts`; project filtering lives in `app/pages/projects.vue`, not `ProjectTable.vue`.
- `app/components/ui/` contains the local shadcn-vue primitives (configured by `components.json` and `shadcn-nuxt`). ESLint explicitly ignores this directory, so a passing lint does not validate edits there.
- Tailwind 4 is wired through the Vite plugin and `app/assets/css/tailwind.css`, not a Tailwind JS config. Theme tokens and the custom dark variant live in that CSS; color-mode uses bare `.dark`/`.light` classes (`classSuffix: ''`).
- `app/plugins/ssr-width.ts` provides a fixed SSR width of 1024 to VueUse; account for it when changing responsive SSR behavior.
- `.nuxt/` and `.output/` are generated and ignored; change source/config instead of editing their contents.
- Docker uses Node 24 and pins pnpm **11.25.0** in `Dockerfile` (there is no root `packageManager` pin). `pnpm docker:start` builds/runs the production server on **3000**, not the dev server; `pnpm docker:stop` tears it down.
