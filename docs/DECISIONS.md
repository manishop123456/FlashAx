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

## D-018 — Content Refinement, Services Page Hero Inversion & Global CTA Standardization

- **Status:** Accepted
- **Date:** 2026-10-23
- **Decision:**
  1. **Services Page Hero Hierarchy Inversion:**
     - Inverted visual hierarchy on `/services`:
       - Eyebrow: `WHAT WE OFFER` (gold uppercase)
       - Dominant H1: `OUR SERVICES` (massive responsive clamp ~72–112px, single line on desktop)
       - Supporting Headline: `Everything Your Idea Needs. All in One Place.` (clamp ~26–38px)
       - Description: Exact approved paragraph: *"From corporate events and college festivals to brand campaigns, digital marketing and corporate gifting, Flashax offers services to help you plan, promote and execute your next project."*
       - Action buttons: `GET A PROPOSAL` (`/contact`) and `EXPLORE SERVICES` (`#service-catalogue` with header scroll-margin offset).
  2. **Global CTA Standardization:**
     - Primary CTA: `GET A PROPOSAL` throughout the website (Homepage Hero, Header desktop & drawer, Services hero, Service detail pages, ServicesGrid, Impact, Testimonials, FAQs, Audiences, SelectedWork, FinalCTA, About Us, Contact form submit action, and Footer).
     - Secondary CTA: `EXPLORE SERVICES` throughout the website.
     - Replaced inconsistent button labels ("Let's Build Something", "Let's Talk", "Start a Project", "Explore Our World", "Collaborate With Us", "Request Discovery", "Explore All Services", "Discuss Your Project").
  3. **Service Definitions & Subservices:**
     - Configured the 7 approved divisions (`Event Management`, `Event Production`, `Brand Activation`, `Campus Marketing`, `Digital Marketing`, `Corporate Gifting`, `CSR Programs`) with exact approved short descriptions.
     - Refined Services grid cards to display concise 4-bullet capabilities and direct detail links.
  4. **Global Writing Rules & Terminology:**
     - Standardized company location description to `Mumbai-based` everywhere.
     - Enforced `CSR Programs` as the exact service name across all pages, metadata, and structured data.
     - Maintained verified business facts only; zero invented clients, statistics, or testimonials.
     - Ensured zero mention of Manish Choudhary or co-founder anywhere on the public website.
  5. **Our Work / Portfolio Page Integrity:**
     - Strictly untouched — zero edits to `app/work/page.tsx`, portfolio data, categories, layout, filters, or styling.
- **Rationale:** Aligns website copy with approved editorial guidelines, establishes a clear typographic hierarchy on the Services page, and creates consistent conversion momentum across all touchpoints.

## D-019 — Final Website Structure, Taxonomy & Section Implementation

- **Status:** Accepted
- **Date:** 2026-10-24
- **Decision:**
  1. **Final Homepage Structure (8 Sections):**
     - `01. Hero / Landing Page`: Large official logo with one-time white flash reveal, floating particle canvas, service descriptor `EVENTS • EXPERIENCES • BRAND SOLUTIONS`, and CTAs (`GET A PROPOSAL` & `EXPLORE SERVICES`).
     - `02. Our Services`: Eyebrow `WHAT WE OFFER`, heading `OUR SERVICES`, subheading `Everything Your Idea Needs. All in One Place.`, exact description paragraph, asymmetric 7-card grid (4 wide in row 1, 3 centered in row 2) without numerical badges, and `EXPLORE SERVICES` CTA linking to `/services`.
     - `03. Why Flashax?`: Two-column editorial layout. Left: Large `WHY` (ivory) `FLASHAX?` (gold), subheading *"The Difference Is in the Execution."*, and exact introduction paragraph. Right: 4 approved differentiators (`SOLUTIONS AROUND YOUR GOALS`, `MULTIPLE SERVICES, ONE POINT OF CONTACT`, `CREATIVE IDEAS, PRACTICAL EXECUTION`, `CLEAR COMMUNICATION`).
     - `04. How We Work`: Replaced old Process with approved 5-step timeline (`01 — UNDERSTAND`, `02 — PLAN`, `03 — COORDINATE`, `04 — EXECUTE`, `05 — REVIEW`), horizontal on desktop, vertical on mobile.
     - `05. Selected Work / Featured Projects`: Honest curation state linking to `/work` without synthetic case studies.
     - `06. FAQs`: Accessible accordion answering common questions across all 7 services, event types, pricing, and timelines.
     - `07. Final Enquiry CTA`: Heading *"HAVE AN IDEA? LET'S MAKE IT HAPPEN."*, copy *"Tell us what you're planning. We'll discuss your requirements and the right services to help bring your idea to life."*, primary CTA `GET A PROPOSAL`.
     - `08. Footer`: Global footer with 7 services and founder Mukesh Choudhary.
  2. **Final About Us Structure (5 Sections):**
     - `01. About Flashax`: Concise approved company introduction.
     - `02. Meet the Founder`: Mukesh Choudhary — Founder with official profile photo.
     - `03. Mission and Vision`: Two equal-sized cards for Our Mission and Our Vision with approved copy.
     - `04. What Makes Flashax Different?`: Two-column editorial layout with 6 differentiators (`A CONNECTED SERVICE APPROACH`, `SCOPE THAT FITS THE PROJECT`, `AUDIENCE-CENTRED THINKING`, `COORDINATION ACROSS REQUIREMENTS`, `PRACTICAL AND TRANSPARENT PLANNING`, `A COLLABORATIVE WORKING RELATIONSHIP`) and closing statement.
     - `05. Our Operating Principles`: Unboxed editorial grid with 8 principles (`01` to `08`) with prominent gold numbers, line icons, warm ivory titles, and muted lavender descriptions (4 columns on desktop, 2 on tablet, 1 on mobile), followed by bottom proposal CTAs.
  3. **Final Services Taxonomy (Exact 7 Divisions in Order):**
     - `01. Event Management` (`/services/event-management`)
     - `02. Event Production` (`/services/event-production`)
     - `03. Brand Activation` (`/services/brand-activation`)
     - `04. Campus Marketing` (`/services/campus-marketing`)
     - `05. Digital Marketing` (`/services/digital-marketing`)
     - `06. CSR Initiatives` (`/services/csr-initiatives` — updated from CSR Programs with permanent 301 redirects and fallback mappings)
     - `07. Corporate Gifting` (`/services/corporate-gifting`)
  4. **Strict Safety Rules Maintained:**
     - `/work` portfolio page strictly untouched and unchanged.
     - Founder: Mukesh Choudhary exclusively; zero mention of Manish Choudhary or co-founder publicly.
     - Zero fabricated testimonials, client logos, awards, or stats.
## D-020 — Service Routing and Dedicated Detail Page Implementation

- **Status:** Accepted
- **Date:** 2026-10-24
- **Decision:**
  1. **Root Cause Resolution:**
     - Identified that `/services/[slug]/page.tsx` was previously rendering a legacy layout (`PageHero`, `.offers` card grid, `.mini-steps`, and generic accordion FAQs) derived from outdated copy in `lib/site.ts`.
     - Completely overhauled `app/services/[slug]/page.tsx` to render the approved editorial layout based directly on the authoritative founder content in `lib/servicesData.ts`.
  2. **Dedicated Individual Service Pages (Exact 7 Routes):**
     - Each route displays **only** the selected service and its own divisions:
       - `/services/event-management` (6 divisions: Corporate Events, College Festivals, Product Launches, Conferences and Seminars, Guest Management, Event Planning)
       - `/services/event-production` (8 divisions, equipment ownership & coordination disclaimer)
       - `/services/brand-activation` (8 divisions, campaign availability disclaimer)
       - `/services/campus-marketing` (8 divisions, institutional permissions disclaimer)
       - `/services/digital-marketing` (8 divisions, commercial terms disclaimer)
       - `/services/csr-initiatives` (7 divisions, non-NGO execution disclaimer)
       - `/services/corporate-gifting` (8 divisions, MOQ and sample availability disclaimer)
  3. **Editorial Layout Structure for Detail Pages:**
     - `Section 01 — Service Hero`: Back to services breadcrumb link, eyebrow badge (`SERVICE {number}`), prominent H1, founder main description, relevant service visual, and action buttons (`GET A PROPOSAL` & `BACK TO SERVICES`).
     - `Section 02 & 03 — Service Divisions`: Full division list with alternating desktop layout (text left / image right for odd, image left / text right for even; stacked on mobile), complete founder copy, and visual containers (`DivisionVisual`).
     - `Section 04 — Service-Specific Enquiry CTA`: Contextual heading (`READY TO DISCUSS {service.title}?`), description, and `GET A PROPOSAL` CTA button preselecting the service in the contact wizard (`/contact?service=${slug}`).
     - `Section 05 — Return Navigation`: `VIEW ALL SERVICES OVERVIEW` link to `/services` and a clean grid linking to the other 6 service categories.
  4. **Single Source of Truth:**
     - Updated `lib/site.ts` `services` array to derive dynamically from `lib/servicesData.ts`, synchronizing the Header mega menu, mobile navigation drawer, footer, and sitemap.
  5. **Scope & Safety Rules Maintained:**
     - The main `/services` overview catalogue remains intact with its 7 full-width sections and quicknav.
     - The `/work` portfolio page remains completely untouched.
- **Rationale:** Ensures visitors navigating from the navbar dropdown or anywhere on the website experience the dedicated, founder-approved editorial content for each specific service without legacy cards or duplicate full catalogues.


### Service Images Integration (October 25, 2026)
- **Context:** The user provided 7 renamed high-resolution WebP service assets to integrate into the existing website.
- **Decision:**
  1. **Assets Stored:** Placed in `public/images/services/`:
     - `corporate-events.webp` (1500x1000)
     - `college-festivals.webp` (1500x1000)
     - `product-launches.webp` (1500x1000)
     - `event-production-and-planning.webp` (1500x1000)
     - `guest-management.webp` (1500x1000)
     - `event-planning.webp` (1500x1000)
     - `seven-services-overview.webp` (1500x1000)
  2. **Authentic Service Mapping:**
     - `seven-services-overview.webp`: Featured exclusively as the 7 capabilities overview banner on `/services` (`app/services/page.tsx`). Never used as an individual service card thumbnail.
     - `event-planning.webp`: Integrated as the cover visual for Event Management on the Home page (`/`) and Service detail page (`/services/event-management`), and as the division visual for Event Planning.
     - `event-production-and-planning.webp`: Integrated as the cover visual for Event Production on the Home page (`/`) and Service detail page (`/services/event-production`), and as the division visual for Stage Setup.
     - `corporate-events.webp`: Integrated into Event Management division "Corporate Events" (`/services/event-management` and `/services#event-management`).
     - `college-festivals.webp`: Integrated into Event Management division "College Festivals" (`/services/event-management` and `/services#event-management`).
     - `product-launches.webp`: Integrated into Event Management division "Product Launches" (`/services/event-management` and `/services#event-management`).
     - `guest-management.webp`: Integrated into Event Management division "Guest Management" (`/services/event-management` and `/services#event-management`).
  3. **Preservation of Procedural Visuals:**
     - In strict adherence to non-negotiable rules, no unrelated event photographs were assigned to **Digital Marketing**, **CSR Initiatives**, or **Corporate Gifting**. These services, along with **Brand Activation** and **Campus Marketing**, retain their tailored geometric vector motifs (`ServiceVisual` & `DivisionVisual`).
  4. **Performance & Styling:**
     - All image thumbnails use `object-fit: cover` with fixed aspect ratios (`16:9` on Home cards, `16:10` on editorial pages), Next.js responsive sizing, lazy loading below the fold, and subtle vignette overlays matching the `#17091D` / `#521262` palette.

## D-021 — Direct WhatsApp Integration for Proposal Enquiries

- **Status:** Accepted
- **Date:** 2026-10-25
- **Context:** Previously, submitting the multi-step "Get a Proposal" form on `/contact` failed with a 500 error when email credentials (Resend) were unconfigured, and submitted client enquiry details were not delivered to WhatsApp.
- **Decision:**
  1. **Direct WhatsApp Formatting Utility (`lib/proposal.ts`):**
     - Created a structured formatter converting all client submissions (client contact info, selected capabilities, project name, scope & objectives, location, target date, attendance size, and budget bracket) into a clean, human-readable WhatsApp message.
     - Generates universal WhatsApp click-to-chat links (`https://wa.me/917757855121?text=...`) directly routing to the Flashax contact phone number (`+91 7757855121`).
  2. **Seamless Client-Side Submission Workflow (`app/contact/page.tsx`):**
     - In Step 4 (Point of Contact), added a clear note informing clients that clicking "GET A PROPOSAL" compiles their brief and routes directly to WhatsApp.
     - Synchronously triggers `window.open(waUrl)` on submission to bypass mobile/desktop popup blockers.
     - Replaces the form upon submission with an interactive **Proposal WhatsApp Hub**:
       - Primary CTA: **"Open WhatsApp (+91 7757855121) ↗"**
       - Secondary Action: **"Copy Brief Text"** (with clipboard copy feedback)
       - Detailed summary preview card of the client's submitted project parameters
       - Reset action: **"Submit Another Proposal Brief"**
  3. **Resilient Backend API (`app/api/contact/route.ts`):**
     - Always logs complete incoming proposal details to runtime console logs for auditability.
     - Non-blocking email dispatch: if Resend API keys are absent, the API records the enquiry and returns `{ success: true, whatsappUrl }` rather than failing with 500.
     - Optional webhook support (`WHATSAPP_WEBHOOK_URL` in `.env`) for future automation (Zapier, Make, or WhatsApp Cloud API).
  4. **Quality & Design Standards:**
     - Preserves the required button CTA `GET A PROPOSAL`.
     - Tested on mobile and desktop breakpoints; passed `npm run lint`, `npm run typecheck`, and `npm run build`.

## D-022 - Final Logo Replacement, Feather Favicon, and Hero Smooth Down-to-Up Entrance Animation

- **Status:** Accepted
- **Date:** 2026-10-25
- **Context:** The user provided the final official Flashax brand asset (media_1792912139531.png) with clean typography and feather mark, requested updating the favicon across the website using public/brand/fhool pati.png, removing the intro loader page (LogoLoader), and introducing a smooth fade-in entrance animation where the big hero Flashax logo glides up from bottom to its resting position.
- **Decision:**
  1. **Final Logo Integration Across All Surfaces:**
     - Replaced `public/brand/flashax-logo-transparent.png`, `public/brand/flashax-final-logo.png`, and `public/brand/flashax-logo-cropped.png` with the final logo asset (1024x342, aspect ratio `1024 / 342 = 2.994`).
     - Backed up the previous asset to `public/brand/flashax-logo-transparent.bak.png`.
     - Updated default width and height to 1024 and 342 in `components/ui/Logo.tsx`, `components/three/HeroCanvas.tsx`, and `components/three/HeroFallback.tsx`.
     - Preserved exact proportions and responsive clamp sizing without distortion.
  2. **Favicon & App Icon Generation from fhool pati.png:**
     - Processed the vibrant high-resolution feather mark (`public/brand/fhool pati.png`) using `sharp` to generate perfectly centered, crisp square icons:
       - 512x512: `public/brand/fhool-pati-icon.png`, `app/icon.png`, `public/icon.png`
       - 180x180: `public/brand/apple-touch-icon.png`, `app/apple-icon.png`, `public/apple-touch-icon.png`
       - 32x32: `public/brand/favicon.png`, `app/favicon.ico`, `public/favicon.ico`
     - Updated `app/layout.tsx` metadata `icons` and `openGraph` tags to ensure all modern browsers, search engines, and bookmark bars render the feather favicon.
  3. **Intro Loader Page Removal:**
     - Removed `<LogoLoader />` from `app/page.tsx`, eliminating any blocking overlays or delays on initial arrival (satisfying AGENTS.md Rule 8).
     - Rendered `components/ui/LogoLoader.tsx` inert (returning `null`) so any lingering imports do not block page rendering.
  4. **Decoupled Smooth Down-to-Up Entrance Animation:**
     - Discovered that the hero 3D mouse parallax transform was running in a continuous `requestAnimationFrame` loop on `.hero__brand`, immediately overwriting CSS `@keyframes` transform properties.
     - Resolved this by decoupling the entrance motion into an outer container (`.hero__brand-entrance`) and the interactive tilt on the inner container (`.hero__brand`).
     - Designed a silky smooth entrance animation (`@keyframes hero-logo-fade-up`) running over 1250ms with `cubic-bezier(0.16, 1, 0.3, 1)` easing:
       - Starts at `opacity: 0`, `transform: translateY(48px) scale(0.97)`, `filter: blur(8px)`.
       - Glides up smoothly to `opacity: 1`, `transform: translateY(0) scale(1)`, `filter: blur(0)`.
     - Built with full accessibility: immediately renders in its resting state when `prefers-reduced-motion: reduce` is enabled.
- **Rationale:** Delivers immediate, unblocked page rendering with a visually stunning, smooth entrance glide for the official brand centerpiece, coupled with a recognizable feather favicon.

## D-023 - Premium Coordinated Hero Entrance Animation (GSAP Timeline)

- **Status:** Accepted
- **Date:** 2026-10-25
- **Context:** Upgraded the homepage hero section with a coordinated, cinematic brand entrance animation matching the FLASHAX HERO ANIMATION implementation brief.
- **Decision:**
  1. **Coordinated GSAP Timeline (~2.8s Total Duration):**
     - **0.0s**: Navigation header smoothly fades in place. Ambient purple/magenta/gold particle canvas fades in.
     - **0.1s**: Main Flashax logo rises from 70px below with a smooth ease curve (`cubic-bezier(0.22, 1, 0.36, 1)`) and fade-in over 1.25s.
     - **0.35s - 1.15s**: Radiant golden spark (`.hero__feather-spark`) travels up the spine curve of the feather mark from base (5%, 70%) through mid-arch (9.5%, 44%) to tip (18%, 22%) with glowing core and trail.
     - **0.95s - 1.70s**: Restrained diagonal light sweep beam (`.hero__lettering-beam`) sweeps smoothly across the "FLASHAX" lettering from left to right.
     - **1.65s - 1.95s**: Optical 4-point star flare (`.hero__x-flare`) illuminates at the center intersection of the stylized X symbol (87%, 44.5%) with golden-magenta radiance.
     - **1.95s - 2.80s**: Tagline descriptor pill ("EVENTS • EXPERIENCES • BRAND SOLUTIONS") rises 24px and fades in smoothly.
     - **2.25s - 3.00s**: Primary "GET A PROPOSAL" CTA button rises 20px and fades in.
     - **2.42s - 3.10s**: Secondary "EXPLORE SERVICES" CTA button rises 20px with slight stagger.
  2. **Subtle Background Particles & Desktop Cursor Interaction:**
     - Enhanced `HeroParticles.tsx` with gentle cursor deflection: particles near the cursor part softly (within 90px) and continue floating upward.
  3. **Button Hover Micro-Interactions:**
     - Added smooth upward-right arrow glide (`translate(3px, -3px)`) and warm golden bloom on hovering "GET A PROPOSAL".
  4. **Performance & Accessibility:**
     - Timeline managed via `gsap.context()` with full cleanup on unmount (`ctx.revert()`).
     - All elements finish in their exact natural CSS positions with zero layout shifts or post-animation floating distortion.
     - Full `prefers-reduced-motion` support: immediately presents all elements at resting positions with 0 duration.
     - Validated with `npm run typecheck`, `npm run lint`, and `npm run build`.
