# Outstride Website

Ben's founder-coaching website (https://www.outstride.co). This is the catch-all guide for agents working in this repo: read it before making changes.

This file is the source of truth for repo conventions. Cursor and other AGENTS.md-aware tools load it automatically. (`.agent/skills/outstride-website/SKILL.md` is a thin pointer back to this file.)

## Stack and commands

- Next.js 15 (App Router) + React 19 + TypeScript.
- Static export: `output: "export"`, `trailingSlash: true` in `next.config.js`. Images are unoptimized. Deploys to GitHub Pages via GitHub Actions on push to `main`.
- `npm run dev` - local dev server.
- `npm run build` - production build + static export to `out/`. Run this after substantive edits and fix lint.

## Static-export constraints

- No server runtime: no server actions, route handlers, or runtime data fetching. Everything is pre-rendered at build time.
- Dynamic routes must implement `generateStaticParams` (see `src/app/os/tools/[slug]/page.tsx`).
- Use relative/absolute static asset paths under `public/`.

## Styling

- The site UI follows a Bootstrap template. Use its classes: `section`, `container`, `row`, `col-*`, `featured-box`, `text-*`, `fw-600`, `wow fadeInUp`, etc. See `src/app/layout.tsx` for global CSS includes.
- Tailwind is installed but the visible UI is Bootstrap-template-based. Match the surrounding markup; do not introduce a different styling system for new UI.
- The current design source of truth is `/utils/ui`, backed by `src/lib/ui.ts` and CSS tokens in `public/css/custom.css`.
- Use the coral-led palette from `src/lib/ui.ts`: coral is the brand anchor (`--out-coral-*`), with warm white cards, soft coral borders, rounded buttons/cards, and Manrope/Poppins typography. Do not introduce one-off brand colors when an existing token fits.
- The homepage hero uses flat coral with a white circular photo frame. Keep future hero work aligned with that direction unless explicitly exploring a replacement.
- For diagrams, tool screenshots, sticky-note canvases and category-heavy visuals, use the pastel diagram set in `src/lib/ui.ts` (`--out-pastel-*`) rather than ad hoc colors.

## Content is data-driven

Prefer editing data over hardcoding JSX.

- `src/lib/data.ts` - testimonials, services, and other site data arrays.
- `src/lib/os.ts` - the Outstride OS taxonomy (layers, capability groups, capabilities, tools, rhythms).
- `src/lib/tools-content.ts` - rich content blocks for tool detail pages (keep pages short; see Adding OS tools).
- Testimonials can be synced from Notion - see `README.md` and `scripts/quick-reference.md`.

## Outstride OS model

Topology: layers -> capability groups -> capabilities -> tools/rhythms.

- Capabilities and tools link bidirectionally via `capabilityIds` / `toolIds`.
- Tools support `accreditation` (`src/lib/accreditation.ts`) to credit external frameworks.
- Tool detail pages at `/os/tools/[slug]` render from `os.ts` + `tools-content.ts`.

### Adding OS tools

Add tool metadata in `src/lib/os.ts`: `id`, `title`, `type`, `format`, `layerIds`, `capabilityIds`, `description`, and optionally `diagramId`, `relatedToolIds`, and `accreditation`.

Write `description` as a standalone one-sentence summary — clear enough for a future MCP, agent skill, or tool registry without needing page context.

Keep tool detail content in `src/lib/tools-content.ts` short: one intro plus 1–2 explanatory paragraphs or callouts, and 1–2 diagrams at most. Prefer diagrams, steps, and examples over long essays.

Before adding an adapted framework, search for the original owner/source and add `accreditation` using `src/lib/accreditation.ts`. If it is Outstride original, use an explicit `note: "Outstride original"`. If a diagram represents the same externally originated framework, add matching accreditation to the diagram definition in `src/lib/diagram/definitions/`, not just the tool object.

Prefer data-driven edits over hardcoded JSX: new tools should flow through `os.ts`, `tools-content.ts`, and, if visual, the diagram registry/definitions.

Link the tool into the OS graph: choose relevant `capabilityIds`, add `relatedToolIds` where helpful, and keep capability/tool relationships intentional rather than exhaustive.

Use stable kebab-case IDs/slugs, compact founder-facing copy, and existing Bootstrap/template rendering patterns.

**Preflight checklist** (for batches of new tools):

- Classification: type, format, layer, capability.
- Credit: original owner/source checked and recorded.
- Page shape: intro, 1–2 paragraphs/callouts, 1–2 diagrams max.
- Graph links: capabilities and related tools set.
- Visual: diagram definition and registry entry only when it materially clarifies the tool.
- Verification: run `npm run build` after substantive batches.

## Diagram-as-code system

Custom visual canvases (strategy grid, dial, flow, pyramid) are defined as data and rendered live.

- Definitions: `src/lib/diagram/definitions/` (typed TS objects).
- Schema/validation: `src/lib/diagram/schema.ts` (Zod discriminated union keyed by `type`: `grid` | `dial` | `flow` | `pyramid`).
- Theme: `src/lib/diagram/themes.ts`. Registry: `src/lib/diagram/registry.ts`. Compare page: `/os/diagrams`.
- Three renderers exist, selected via `src/components/diagram/DiagramRenderer.tsx`:
  - `src/components/diagram/SvgCanvasRenderer.tsx` (Candidate A - SVG Canvas)
  - `src/components/diagram/HtmlCanvasRenderer.tsx` (Candidate B - HTML/CSS Canvas)
  - `src/components/diagram/ResponsiveGridRenderer.tsx` (Candidate C - Responsive Grid)

For diagrams, we should prefer Candidate A — SVG Canvas, but keep the other two as fallback options.

## Repo rules (always apply)

- Keep imports at the top of the file. Avoid inline imports unless there is a documented circular-dependency reason.
- For `switch` statements over discriminated unions or enums, use a `never` check in the `default` case so new variants fail to compile until handled.
- Do not add comments that merely narrate what the code does.

## Before finishing

Run `npm run build` and resolve any type or lint errors introduced by your changes.
