# Engineering Digital Portfolio V2.0 — Phase 1 Architecture

## 1. Technical architecture

The site uses the Next.js App Router with TypeScript and `output: "export"`. Every deployed route is resolved at build time and emitted as static HTML, CSS, and JavaScript. There are no Server Actions, API routes, runtime databases, or dynamic rendering requirements.

```text
Markdown frontmatter
        ↓
typed PortfolioPageContent
        ↓
ContentRenderer (section.type mapping)
        ↓
reusable portfolio components
        ↓
App Router pages
        ↓
Next.js static export /out
        ↓
GitHub Pages
```

The current router is deliberately hybrid: `/` provides the system-level entry; `/case01` and `/case02` are independent case shells; each case can later grow internal section anchors or nested routes without changing the shared renderer.

## 2. Project structure

```text
src/
├── app/                       # route entry points and global theme
│   ├── about/
│   ├── background/
│   ├── case01/
│   ├── case02/
│   ├── summary/
│   └── contact/
├── components/
│   ├── layout/                # Header, Footer, Container, PageShell
│   ├── common/                # Section and typography primitives
│   ├── sections/              # HeroSection and ContentRenderer
│   ├── case/                  # case-study components
│   ├── workflow/              # AI system components
│   ├── gallery/               # ImageGallery and Lightbox
│   └── ui/                    # shadcn-compatible interaction primitives
├── config/portfolio.config.ts # route registry and version selection
├── content/
│   ├── pages/*.md             # page content source
│   ├── schema.ts              # content contracts
│   └── loader.ts              # build-time Markdown loader
├── styles/                    # future page-local styles
└── lib/                       # shared utilities

public/assets/
├── images/case01/
├── images/case02/
├── images/common/
├── diagrams/
└── videos/
```

## 3. Component library

| Component | Core props | Purpose |
| --- | --- | --- |
| `Container` | standard div props | unified 1280 px page width |
| `Section` | `theme`, `bleed` | vertical rhythm, light/dark section context |
| `Typography` | `children`, `className` | Display, Section, Body, Caption, Label levels |
| `HeroSection` | `title`, `subtitle`, `eyebrow`, `status` | cover and product-level narrative |
| `CaseHeader` | `project`, `background`, `role`, `outcome` | case overview |
| `Timeline` | `items[]` | experience sequence |
| `ProcessFlow` | `steps[]` | business process |
| `ComparisonBlock` | `before`, `after` | before/after evidence |
| `ImageGallery` | `items[]` | responsive image grid |
| `Lightbox` | `src`, `alt`, dimensions, `caption` | accessible enlarged asset view |
| `ArchitectureDiagram` | `layers[]` | system architecture presentation |
| `WorkflowExpandable` | `workflows[]` | W00/W01/W02 expandable node details |
| `MechanismCard` | `index`, `title`, `description` | governance mechanism summary |
| `FailureCard` | problem/diagnosis/decision/iteration | failure and iteration evidence |
| `VideoPlaceholder` | `title`, `description` | future demo interface without loading video |

Add a new section renderer by extending the union in `src/content/schema.ts`, creating its component, then adding one branch in `ContentRenderer`. Existing routes do not change.

## 4. Design system

All global tokens live in `src/app/globals.css`. The main system is a cool white light theme with deep blue-green ink and restrained teal accents. AI architecture sections opt into `.theme-dark`; print CSS converts those sections to a low-ink light surface while preserving hierarchy.

- Typography: system-first bilingual stack; five explicit levels (Display, Section, Body, Caption, Label).
- Layout: 1280 px desktop container, fluid gaps, desktop-first two-column hero, single-column mobile collapse.
- Motion: only hover translation, disclosure transition, and smooth scrolling; reduced-motion users receive static behavior.
- Print: A4 margins, section break protection, forced disclosure output, dark-block print-safe conversion, 300-dpi image allowance.

## 5. Content and version system

Markdown files are the authoring source. Frontmatter is parsed during `next build`, validated through TypeScript contracts, and passed into `ContentRenderer`. React components contain no final portfolio prose.

`NEXT_PUBLIC_PORTFOLIO_VERSION=short|deep` selects the page set in `portfolio.config.ts`. Both versions use the same route registry, renderer, and component library. Phase 2 can expand the `deep` list and add section data without forking the application.

## 6. Deployment

`next.config.ts` enables static export, unoptimized images, and trailing slashes for GitHub Pages. In GitHub Actions, `NEXT_PUBLIC_BASE_PATH=/engineering-digital-portfolio` sets the project-site prefix. The workflow installs locked dependencies, builds `/out`, uploads the Pages artifact, and deploys it with GitHub's official Pages actions.

Before the first deploy, create the repository named `engineering-digital-portfolio`, push this project to `main`, and set repository Settings → Pages → Source to **GitHub Actions**.
