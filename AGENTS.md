# Flashax — Instructions for AI Coding Agents

These instructions apply to Codex, Antigravity, and any other coding agent working in this repository.

## Read before changing code

1. `README.md` — product brief, business context, homepage structure, content rules, and quality bar.
2. `docs/SYSTEM_DESIGN.md` — architecture, routes, components, data flow, and integrations.
3. `docs/DESIGN_SYSTEM.md` — brand palette, typography, component styling, and motion principles.
4. `docs/IMPLEMENTATION_PLAN.md` — milestones, task order, and completion criteria.
5. `docs/DECISIONS.md` — confirmed decisions and documented changes.
6. Inspect the actual source files, dependencies, configuration, and assets before editing.

If documents and implemented code differ, inspect the current code and determine whether the difference is intentional. Do not make broad changes merely to make files match. Update relevant documentation when a meaningful decision changes.

## Product direction

- Brand: **FLASHAX — Where Engagement Sparks Success**.
- Chosen concept: **Hybrid Signature Experience** — cinematic, purple-first, premium, service-led, and conversion-focused.
- Founder: Mukesh Choudhary. Co-founder: Manish Choudhary.
- Primary working purple: `#521262`.
- Gold accent: `#F7B721`.
- Midnight background: `#17091D`.
- Deep purple surface: `#220D2B`.
- Ivory text: `#F2F4E8`.
- Feather magenta accent: `#F609CF`, used sparingly.
- Palette values are working estimates based on the supplied logos, not certified official brand standards.

## Non-negotiable rules

1. Preserve the supplied logo assets, proportions, and visual identity. Never stretch or approximate the wordmark.
2. Do not invent clients, testimonials, project statistics, awards, team size, company history, contact details, or completed work.
3. Do not claim every specialist capability is in-house. Some work may be coordinated through suitable vendors or partners.
4. Every visible button and link must have a meaningful, working destination or action.
5. Never claim an enquiry was submitted or emailed unless the server confirms the result.
6. Never put secrets in client components or `NEXT_PUBLIC_*` variables. Public variables are public by design.
7. Preserve essential content and navigation if WebGL is unsupported, the 3D scene fails, or reduced motion is requested.
8. Do not hijack normal scrolling or make users wait through an unnecessary intro/loading animation.
9. Build and test mobile layouts intentionally; do not merely shrink the desktop layout.
10. Use semantic HTML, keyboard navigation, visible focus states, accessible form labels, and adequate contrast.
11. Keep components focused, typed, and reusable. Avoid giant monolithic components and unnecessary abstractions.
12. Inspect existing dependencies before installing another package. Add a dependency only when there is a concrete need.
13. Do not overwrite or recreate the project blindly. Inspect before editing and preserve useful existing functionality.
14. Run available checks after substantial changes: `npm run lint`, `npm run typecheck`, and `npm run build`. Report commands that could not run and their actual errors honestly.
15. Do not ship dead links, placeholder buttons, fake form success, fake data, or unfinished visible sections disguised as completed work.
16. Keep the business copy professional and outcome-focused; do not make unsupported delivery promises.

## Design quality bar

The site must not look like a generic agency template. Use strong typographic hierarchy, deliberate spacing, art-directed imagery, asymmetry where useful, a consistent purple/gold system, and restrained motion. Avoid random neon outlines, excessive glassmorphism, constant animation, generic card grids everywhere, and excessive decorative particles.

## Task workflow

For each coding task:

1. State the concrete outcome internally or in the task summary.
2. Inspect relevant code, docs, assets, and dependencies.
3. Make the smallest cohesive implementation that satisfies the request.
4. Check desktop, mobile, keyboard navigation, reduced motion, and relevant error states.
5. Run the appropriate lint, typecheck, build, or focused tests.
6. Update documentation when project decisions or behavior change.
7. Report what changed, checks run, outcomes, and remaining limitations.

Do not ask the user to approve every small, reversible decision. Make sensible assumptions and document important ones.
