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

## D-012 — Homepage Refinement & Comprehensive Responsive Overhaul

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:** 
  1. Disconnect and remove the 3D event stage (deck, trussing, spotlights, beams) from the homepage hero viewport to make the hero lighter, cleaner, and strictly brand-focused.
  2. Implement a dedicated, lightweight 2D HTML5 Canvas particle system (`HeroParticles.tsx`) in the hero background rendering restrained, slow-drifting purple, magenta, and muted gold dots with `prefers-reduced-motion` support.
  3. Ensure the official transparent PNG logo (`/brand/flashax-logo-transparent.png`, 408×115) is completely static across all placements (no scaling, rotation, hover distortion, pulsing, or GSAP entrance animation).
  4. Remove the duplicate yellow tagline (`WHERE ENGAGEMENT SPARKS SUCCESS`) beneath the logo; preserve the separate gold descriptor pill (`EVENTS • EXPERIENCES • BRAND SOLUTIONS`).
  5. Preserve the 4-chapter Experience Showcase section (`components/home/ExperienceShowcase.tsx`) with its separate Three.js `StageEnvironment`.
  6. Execute a global responsive overhaul across all viewports (1920px down to 320px) covering mobile navigation drawer (all 7 service divisions accessible), contact wizard (stepper, options, action stacking), facts grid, work-empty frames, proof slots, and fluid typography. Zero horizontal overflow across the entire site.
## D-013 — Oversized Brand Logo & Cinematic One-Time Opening Flash Effect

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. Upgrade the central brand logo to the high-resolution 1024×264 transparent PNG asset (`public/brand/flashax-logo-transparent.png`), preserving its original feather artwork, typography, and aspect ratio (`1024 / 264 ≈ 3.8787`).
  2. Implement oversized responsive scaling: 450–650px on desktop (`clamp(460px, 46vw, 640px)`), 65–80% of content width on tablet (`min(540px, 78vw)`), and 78–88% on mobile (`min(420px, 86vw)`), while keeping the header navigation logo smaller (`clamp(140px, 13vw, 178px)`).
  3. Introduce an elegant, one-time cinematic light-sweep beam (`.hero__brand-beam`) with an ambient golden bloom (`.hero__brand-glow`) that runs once upon initial landing (~950ms) without altering or distorting the underlying logo image.
  4. Enforce strict non-looping session lifecycle using `sessionStorage.getItem('flashax_hero_revealed')`: the effect executes once on initial visit, never restarts on scroll, never restarts on re-render, never restarts on hover, and does not replay on client-side navigation.
  5. Provide complete reduced-motion bypass: immediately renders the static logo if `prefers-reduced-motion` is active.
- **Rationale:** Delivers an impactful, premium, cinematic brand reveal on initial arrival while maintaining a completely static, distraction-free logo thereafter.

## D-014 — Hero Logo Sizing & Cinematic Scale Enhancement

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. Significantly enlarge the hero centerpiece brand logo across all viewports to provide a bold, grand, and commanding visual focal point:
     - Desktop: `clamp(540px, 65vw, 960px)` (expanded from 640px to up to 960px wide).
     - Tablet: `min(720px, 88vw)` (expanded from 540px).
     - Mobile: `min(540px, 92vw)` (expanded from 420px, maximizing available width while maintaining comfortable margins).
  2. Increase `.hero__content` boundary to `min(100%, 1120px)` to give the centerpiece ample breathing room.
  3. Update `sizes` on `next/image` in `HeroCanvas.tsx` and `HeroFallback.tsx` to `(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 960px` to serve optimal high-resolution assets.
  4. Enhance multi-layered drop shadow (`drop-shadow(0 16px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 50px rgba(82, 18, 98, 0.45))`) for superior contrast against the aubergine backdrop.
- **Rationale:** Directly addresses user feedback that the logo felt undersized relative to the full-viewport hero canvas, delivering a bold, cinematic signature presence without sacrificing responsive integrity.

## D-015 — Brand-First Oversized Hero Scale-up & Lossless Crop Refinement

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. Inspect PNG transparent bounds: discovered 14.4% empty transparent padding horizontally and 22.3% vertically in the raw 1024×264 asset. Produced a lossless cropped copy (`public/brand/flashax-logo-cropped.png`, 887×214) with a clean 4px boundary preserving 100% of the feather, FLASHAX wordmark, X spark, and tagline.
  2. Implement oversized hero logo scaling targeting 1050–1250 CSS pixels on desktop (`width: min(74vw, 1250px); max-width: 100%;`).
  3. Expand hero composition width to `min(94vw, 1420px)` achieving 75–85% visual width utilization on desktop while keeping all elements inside the first viewport.
  4. Scale service descriptor pill to ~17–20px (`clamp(1.05rem, 1.15vw, 1.25rem)`) with controlled letter tracking (`0.14em–0.22em`) and balanced padding.
  5. Scale CTA buttons to ~66–74px height (`--btn-h: clamp(66px, 4.4vw, 74px)`) with generous horizontal padding (`clamp(2.5rem, 3.2vw, 3.8rem)`), 1.35rem icons, and polished hover states.
  6. Verified across all viewports (1920×1080, 1705×860, 1440×900, 1280×800, 768×1024, 390×844, and 320×700): zero horizontal overflow, flawless proportional hierarchy.
- **Rationale:** Delivers a dominant, commanding, and premium brand centerpiece that fully capitalizes on wide desktop screen estate while preserving clean responsive scaling.

## D-016 — Opening and Refresh White Flash Animation Lifecycle

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. Updated the logo reveal animation lifecycle: removed the `sessionStorage` restriction so that the cool white flash animation triggers consistently on **initial page opening** AND **whenever the user refreshes/reloads the hero page**.
  2. Enhanced the white flash animation (`.hero__brand--flash`):
     - High-intensity pure white beam sweep (`.hero__brand-beam`) with prismatic glint and diamond glare.
     - Luminous optical sparkle flare (`.hero__brand-sparkle`) traversing alongside the light beam.
     - Subtle logo exposure pop (`hero-logo-white-flash`) increasing brightness and contrast as the beam sweeps across.
     - Ambient soft golden-white radial bloom (`.hero__brand-glow`) radiating behind the logo.
  3. Ensured zero looping: the animation plays once for ~1.15s upon mount/refresh, calls `onAnimationEnd`, and settles permanently into a static, pristine state. Never loops, never restarts on scroll, never jumps on hover.
  4. Preserved full reduced-motion accessibility: suppressed immediately if `prefers-reduced-motion` is active.
- **Rationale:** Delivers a cool, high-impact cinematic visual identity flash upon initial visit and every browser reload without frustrating users with endless continuous loops.

## D-017 — Information Architecture & Website Structure Restructure

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. **Primary Navigation Order:** Updated desktop and mobile navigation hierarchy to: `Home` (`/`) → `About Us` (`/about`) → `Our Services` (`/services`) → `Our Work` (`/work`) → `Let's Talk` (`/contact`).
  2. **Homepage Restructure (8 Approved Sections in Order):**
     - `01. Landing Page / Hero`: Oversized crisp transparent PNG brand logo with one-time opening white flash reveal on mount/refresh, floating particle canvas background, service descriptor pill, and primary (`LET'S BUILD SOMETHING ↗`) & secondary (`EXPLORE OUR WORLD ↓` -> `#services`) CTAs.
     - `02. Our Services`: Heading *"EVERYTHING YOUR IDEA NEEDS. ALL IN ONE PLACE."*, short copy, 7 service cards with visual motifs and explore links, and *"EXPLORE ALL SERVICES"* CTA to `/services`.
     - `03. Why Flashax`: Heading *"THE DIFFERENCE IS IN THE EXECUTION."* with four core benefits (01. Built Around Your Goals, 02. One Coordinated Team, 03. Flexible Services, 04. Clear Communication).
     - `04. Our Impact`: Heading *"BIG IDEAS. MEANINGFUL IMPACT."*, capability-based execution standards without fabricated stats or fake counters.
     - `05. Testimonials`: Heading *"GOOD WORK CREATES GOOD PARTNERSHIPS."*, authentic feedback notice prioritizing NDA compliance and client confidentiality.
     - `06. FAQs`: Accessible accordion answering common questions across all service divisions and enquiry steps.
     - `07. Let's Make It Happen`: Heading *"HAVE AN IDEA? LET'S MAKE IT HAPPEN."*, copy, and CTAs (*"START A PROJECT ↗"* and *"TALK TO OUR TEAM"*).
     - `08. Footer`: Company info, services, navigation, contact, social links, legal, and verified founder attribution.
  3. **New 7-Service Taxonomy:**
     - Consolidate offerings into exactly 7 approved divisions: `Event Management`, `Event Production`, `Brand Activation`, `Campus Marketing`, `Digital Marketing`, `Corporate Gifting`, and `CSR Programs`.
     - Created dedicated service detail routes (`/services/[slug]`) and updated `/services` catalogue with full subservice breakdowns and services FAQ.
     - Added permanent redirects in `next.config.js` for legacy slugs (`exhibitions`, `production-operations`, `campus-connect`, `digital-creative`, `csr-education`) ensuring external links never break.
     - Added custom geometric vector motif for `corporate-gifting` in `ServiceVisual.tsx`.
  4. **Dedicated About Us Page (`/about`):**
     - Restructured into exactly three primary sections: `01. About Flashax` (company introduction, business focus, how we work), `02. Our Founder` (Mukesh Choudhary solely), and `03. Our Core Principles` (Understand the Brief, Plan with Purpose, Coordinate Responsibly, Communicate Clearly).
     - Strict rule enforced: Zero mention of Manish Choudhary or co-founder anywhere on the public website.
  5. **Our Work Page Safety (`/work`):** Completely untouched — zero changes to visual design, layout, filters, images, project data, animations, or styling.
  6. **Contact Wizard & API Integration:** Updated `SERVICE_OPTIONS` with the 7 new categories and legacy fallback mapping for query preselection (`/contact?service=corporate-gifting`).
- **Rationale:** Aligns with the newly approved information architecture, strengthens conversion paths, clarifies service taxonomy, and preserves 100% of the verified brand identity.

