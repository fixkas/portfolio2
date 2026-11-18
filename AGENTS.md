<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repo notes

## Commands (pnpm, see `packageManager` in `package.json`)
- `pnpm dev` — Next dev server
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — `eslint`
- `pnpm exec tsc --noEmit` — typecheck (no `typecheck` script)
- No test framework/scripts configured

## Stack / structure
- Next.js 16 App Router (`src/app`): `layout.tsx`, `page.tsx`, `globals.css`. Path alias `@/* -> ./src/*` (`tsconfig.json`).
- `src/components/ui/*`: shadcn components (`components.json` style `base-nova`, `rsc: true`, icon `lucide`).
- `src/components/*`: app components. `src/consts/works.json`: portfolio/work data (e.g. consumed by `WorksList`). `src/lib/utils.ts`: exports `cn` from npm package `cn`.
- Static assets in `public/`.

## Quirks / conventions
- shadcn uses `@base-ui/react` primitives here (not Radix). Follow existing `src/components/ui/*` patterns when adding/editing UI.
- `cn` comes from package `cn` (re-exported in `src/lib/utils.ts`; some files may import from `"cn"` directly) — not `clsx`+`tailwind-merge`.
- Tailwind v4 via `@tailwindcss/postcss`; global styles/theme in `src/app/globals.css` (`tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css` imports).
- Fonts via `next/font/google` in `src/app/layout.tsx` (font CSS vars applied on `<html>`/`<body>`). Prefer `next/font` over `<link>`/`@import` in layout.
- Next 16 typed props used (e.g. `LayoutProps<"/">` in layout). Check `node_modules/next/dist/docs/` for current APIs before guessing.
- `pnpm-workspace.yaml` sets `allowBuilds: sharp: false, unrs-resolver: false`. `CLAUDE.md` points to this file. `opencode.json` configures local shadcn MCP.
