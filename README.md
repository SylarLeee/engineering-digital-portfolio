# Engineering Digital Portfolio V2.0

Phase 1 delivers the Portfolio Engine: static-export routing, typed Markdown content, reusable case-study components, a light/dark design system, print CSS, and GitHub Pages deployment.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation and static export

```bash
pnpm typecheck
pnpm lint
pnpm build
```

The GitHub Pages artifact is generated in `out/`.

## Portfolio version

```bash
NEXT_PUBLIC_PORTFOLIO_VERSION=short pnpm build
NEXT_PUBLIC_PORTFOLIO_VERSION=deep pnpm build
```

On PowerShell:

```powershell
$env:NEXT_PUBLIC_PORTFOLIO_VERSION="deep"
pnpm build
```

Version page sets and route metadata are defined in `src/config/portfolio.config.ts`. Content lives in `src/content/pages/*.md`.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the complete Phase 1 handoff.
