# FLASHAX — Official Website

> **Where Engagement Sparks Success**  
> A premium, purple-first digital experience for an event management, production, brand activation, campus partnership, and creative solutions company.

This README is the **single source of truth** for the Flashax website's product vision, visual design, content structure, technical architecture, implementation order, and quality bar. Use it as the primary brief when vibe-coding with Antigravity, Codex, or another coding agent. Keep the implementation aligned with this document and update it if a meaningful architectural decision changes.


## Companion project documents

Use these files together; do not maintain conflicting copies of the same decisions.

| File | Purpose |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | Shared coding-agent rules for Antigravity, Codex, and other tools |
| [`docs/SYSTEM_DESIGN.md`](./docs/SYSTEM_DESIGN.md) | Routes, architecture, components, content models, data flow, and integrations |
| [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) | Brand colours, typography, spacing, components, and motion rules |
| [`docs/IMPLEMENTATION_PLAN.md`](./docs/IMPLEMENTATION_PLAN.md) | Milestones, acceptance criteria, and development order |
| [`docs/DECISIONS.md`](./docs/DECISIONS.md) | Accepted decisions and how to document changes |

---

## 1. Product Vision

Flashax should not look like a generic agency template. It should feel like a premium creative and event-production brand with a memorable cinematic opening, clear service discovery, real project evidence, and a simple path for prospective clients to enquire.

**Chosen concept: Option 05 — The Hybrid Signature Experience.**

Combine:

- A cinematic 3D hero and scroll-driven visual storytelling.
- High-quality editorial typography and art-directed layouts.
- Seven clearly organized service divisions.
- A real portfolio and project case studies.
- Audience-specific paths for corporate, college, brand, agency, and community clients.
- A practical project enquiry flow.
- Purposeful motion, excellent mobile design, accessibility, and performance.

### Business positioning

Flashax offers both end-to-end projects and individual services. A client may enquire about a complete corporate event or only about production, manpower, an exhibition stall, campus sponsorship support, photography, a website, or another specific service.

Some specialist work may be delivered through qualified vendors or partners. The website must describe capabilities honestly and must not claim that every asset or specialist service is in-house.

### Business facts to preserve

- **Brand:** FLASHAX
- **Tagline:** Where Engagement Sparks Success
- **Founder:** Mukesh Choudhary
- **Co-founder:** Manish Choudhary
- **Primary goal:** Generate credible project enquiries and present Flashax's services professionally.
- **Secondary goals:** Establish brand identity, explain service capabilities, and build a portfolio that can grow over time.

Do not invent a founding date, clients, awards, event statistics, testimonials, team size, contact details, or completed projects.

---

## 2. Brand Identity and Design System

The uploaded logo files are in `public/brand/`:

- `public/brand/flashax-logo-purple.png`
- `public/brand/flashax-logo-gold-panel.jpg`

Inspect both assets before using them. Preserve the actual wordmark, colours, proportions, and clear space. Never stretch, skew, recreate, or approximate the logo with plain text. Select the asset that gives the best contrast for the background. If neither asset is suitable for a particular context, ask for or create an approved transparent variant rather than distorting the existing file.

### Working brand palette

These values are the current working palette based on the supplied logo images. The sampled purple and gold are not certified brand-standard values; refine them only when official brand codes are supplied.

| Token | HEX | Intended use |
|---|---|---|
| Flashax Purple | `#521262` | Core brand colour, prominent brand sections, selected surfaces |
| Flashax Gold | `#F7B721` | Primary CTAs, active states, highlighted words, key accents |
| Midnight Aubergine | `#17091D` | Main cinematic background and deep sections |
| Deep Purple | `#220D2B` | Secondary surfaces and section transitions |
| Purple Card | `#2C1236` | Cards, menus, panels and interactive surfaces |
| Warm Ivory | `#F2F4E8` | Main headings and text on dark backgrounds |
| Muted Lavender | `#C5B8C9` | Descriptions and secondary text |
| Muted Text | `#A899AF` | Nonessential metadata; do not use for small low-contrast text |
| Feather Magenta | `#F609CF` | Rare decorative accent inspired by the logo feather |
| Light Gold | `#FFD05C` | Gold hover state and subtle gradient highlight |

### Required CSS tokens

Keep the design system centralized in `app/globals.css` or the existing global stylesheet. Do not hardcode slightly different versions of brand colours across components.

```css
:root {
  color-scheme: dark;

  --flashax-purple: #521262;
  --flashax-gold: #F7B721;
  --flashax-magenta: #F609CF;

  --background-primary: #17091D;
  --background-secondary: #220D2B;
  --background-card: #2C1236;

  --text-primary: #F2F4E8;
  --text-secondary: #C5B8C9;
  --text-muted: #A899AF;

  --accent-primary: #F7B721;
  --accent-hover: #FFD05C;

  --border-subtle: rgba(242, 244, 232, 0.12);
  --border-highlight: rgba(247, 183, 33, 0.55);
  --glow-purple: rgba(82, 18, 98, 0.45);
  --glow-gold: rgba(247, 183, 33, 0.20);

  --gradient-brand: linear-gradient(135deg, #521262 0%, #35103F 50%, #17091D 100%);
  --gradient-gold: linear-gradient(110deg, #F7B721 0%, #FFD05C 100%);
  --gradient-cinematic: radial-gradient(ellipse at 50% 0%, #521262 0%, #220D2B 45%, #17091D 100%);

  --content-width: 1240px;
  --page-gutter: clamp(20px, 5vw, 76px);
  --section-space: clamp(84px, 10vw, 160px);
  --radius-small: 6px;
  --radius-medium: 12px;
}
```

### Colour rules

- The site is **purple-first, not yellow-first**.
- Use midnight aubergine for the cinematic hero and deep visual sections.
- Use purple as a recognisable brand colour, not as a flat background for every section.
- Use ivory for primary text and lavender for supporting copy.
- Use gold deliberately for primary actions and a limited number of visual highlights.
- Use magenta sparingly. It should echo the feather, not become a second dominant colour.
- Avoid excessive neon outlines, glowing text, bright gold panels, and gradients on every component.
- Check text contrast, particularly muted text and gold text on pale surfaces.

### Typography and art direction

Use a bold contemporary display face for hero statements and a highly readable sans-serif for body text and interface labels. Prefer strong scale contrast, compact headlines, generous whitespace, and restrained letter spacing. Font choices should be licensed/available in the project and should not block first render.

Visual language: **cinematic, editorial, immersive, premium, bold, contemporary, clear**.

Avoid: generic agency templates, excessive glassmorphism, random floating objects, constant motion, unnecessary rounded cards, decorative elements that reduce readability, and oversized typography that breaks on mobile.

---

## 3. Information Architecture and Routes

### Main navigation

`FLASHAX` logo | Home | Services | Our Work | About Us | Contact | **LET'S TALK ↗**

The Services item opens an accessible mega-menu with all seven service divisions. The nav may begin transparent over the hero and gain a dark, softly blurred surface after scrolling. Keep mobile navigation compact, keyboard-accessible, and easy to close.

### Route map

| Route | Purpose |
|---|---|
| `/` | Cinematic homepage and primary conversion flow |
| `/services` | Overview of all seven divisions |
| `/services/event-management` | Event Management & Experiences |
| `/services/exhibitions` | Exhibition & Trade Show Solutions |
| `/services/production-operations` | Event Production, Manpower & Operations |
| `/services/brand-activation` | Brand Activation & Experiential Marketing |
| `/services/campus-connect` | Campus Connect, Sponsorships & Partnerships |
| `/services/digital-creative` | Digital Marketing, Creative & Content |
| `/services/csr-education` | CSR, Financial Literacy & Educational Programs |
| `/work` | Filterable portfolio and project highlights |
| `/work/[slug]` | Individual case study page |
| `/about` | Company introduction, principles and team information when approved |
| `/contact` | Project enquiry and verified contact options |
| `/privacy-policy` | Privacy information for website visitors and enquiries |
| `/terms` | Website/service terms where applicable |

Do not create a route just to make the sitemap look complete. Every visible link must go to a real destination or be clearly disabled until implemented.

---

## 4. Homepage Design Blueprint

The homepage must follow this order. Sections can be adjusted only when implementation shows a clear UX or performance reason.

### 01 — Cinematic 3D hero

**Headline:**

> WE DON'T JUST ORGANISE EVENTS.  
> WE CREATE MOMENTS THAT MOVE PEOPLE.

**Eyebrow:** `EVENTS • EXPERIENCES • BRAND SOLUTIONS`

**Supporting copy:**

> From corporate experiences and college festivals to brand activations, exhibitions and digital campaigns, Flashax brings ideas to life through creative thinking and coordinated execution.

**Actions:** `LET'S BUILD SOMETHING ↗` and `EXPLORE OUR WORLD ↓`.

Visual direction: a monumental event stage emerging from darkness; architectural structure; carefully composed spotlights; rich purple atmosphere; golden light accents; subtle atmospheric detail; prominent and legible Flashax identity. The scene should feel like the opening of a premium event-production showreel, not a videogame lobby.

Scroll timeline:

| Scroll progress | Scene intention |
|---|---|
| 0–20% | Stage architecture gradually appears from darkness |
| 20–40% | Gold lighting sweeps across the structure; brand identity becomes clear |
| 40–60% | Camera moves toward the stage and reveals depth and production detail |
| 60–80% | Environment transitions toward an exhibition or branded installation |
| 80–100% | Camera travels through the scene into the next content section |

Build one cohesive scene and timeline before considering multiple scenes. Keep headline contrast high, make the CTA immediately available, and do not force users to watch an intro. The scroll animation should enhance navigation, not hijack it.

### 02 — Who we are

**Headline:** `ONE PARTNER. MULTIPLE POSSIBILITIES.`

Introduce Flashax's connected service model. Show four clear capabilities:

- **PLAN** — Strategy, concepts and event planning.
- **CREATE** — Creative concepts, branding and experiences.
- **PRODUCE** — Production, resources and coordination.
- **AMPLIFY** — Promotions, audience engagement and digital content.

Use editorial text composition with one relevant photograph or video. Avoid another generic set of four cards.

### 03 — Seven core services

**Headline:** `EVERYTHING YOUR IDEA NEEDS. ALL IN ONE PLACE.`

Create a premium asymmetric service grid. Each division gets a number, title, compact description, relevant visual, and an `EXPLORE SERVICE ↗` link. At least one card may be larger to create visual rhythm. Keep the grid readable and usable at every breakpoint.

1. **Event Management & Experiences** — Corporate events, conferences, annual days, college festivals, product launches, employee engagement, planning and hospitality coordination.
2. **Exhibition & Trade Show Solutions** — Exhibition stalls, trade show booths, fabrication coordination, branded display counters, visitor engagement, lead capture and logistics.
3. **Event Production, Manpower & Operations** — Stage, sound, lighting, LED screens, trussing, event manpower, ushers, promoters, merchandise and logistics.
4. **Brand Activation & Experiential Marketing** — Brand activations, interactive campaigns, product demonstrations, sampling, roadshows, gamification and audience engagement.
5. **Campus Connect, Sponsorships & Partnerships** — College outreach, sponsorship acquisition, sponsor proposals, campus ambassadors, brand-college collaboration and student engagement.
6. **Digital Marketing, Creative & Content** — Websites, branding, graphic design, social media, photography, videography, editing and digital campaigns.
7. **CSR, Financial Literacy & Educational Programs** — Financial awareness, educational workshops, career readiness, digital literacy, community initiatives and CSR programs.

Optional services such as corporate gifting, festive merchandise, QR registration, digital certificates and attendance tools belong within the relevant divisions, not as extra main divisions.

### 04 — The Flashax experience

**Headline:** `FROM THE FIRST IDEA TO THE FINAL MOMENT.`

Create one scroll-led environment with four chapters:

1. **IMAGINE** — Empty event space; “Every great experience begins with a vision.”
2. **DESIGN** — Environment forms into an event or branded installation; “We turn ideas into creative concepts and engaging environments.”
3. **PRODUCE** — Production structures and lighting appear; “Planning, resources and coordination bring the concept together.”
4. **EXPERIENCE** — Completed environment is illuminated; “The final experience brings people together.”

Use camera movement and scene changes intentionally. Do not make the 3D scene so heavy that it delays access to the rest of the page.

### 05 — Selected work

**Headline:** `BUILT FOR THE MOMENTS THAT MATTER.`

Create an editorial, image-led portfolio with filters for `ALL WORK`, `CORPORATE`, `CAMPUS`, `EXHIBITIONS`, `BRAND ACTIVATIONS`, `PRODUCTION`, and `DIGITAL`. Each project can include a title, category, image/video, short summary and case-study link.

Use real, approved work only. If approved portfolio material is unavailable, launch with an honest “Portfolio coming soon” or a small genuine selection. Never fabricate projects, client logos or outcomes.

### 06 — Why Flashax

**Headline:** `THE DIFFERENCE IS IN THE EXECUTION.`

- Connected Capabilities
- Tailored Experiences
- Flexible Engagement
- Coordinated Delivery

Present these as business principles with concise explanations and strong typography. Do not make unsupported claims about delivery history or scale.

### 07 — Who we work with

Five audience pathways:

- Corporates & Enterprises
- Colleges & Universities
- Brands & Businesses
- Event Organisers & Agencies
- NGOs & Community Organisations

Each one should direct visitors to relevant service pages or the enquiry form.

### 08 — Our process

`DISCOVER → STRATEGISE → COORDINATE → EXECUTE → REVIEW`

Use a horizontal timeline on desktop and a vertical timeline on mobile. Explain each step briefly. Adapt the process to the real scope of the individual project.

### 09 — Our impact

Use verified statistics only, such as events delivered, participants reached, brands served, colleges engaged, or campaigns executed. If verified figures are unavailable, replace counters with genuine company highlights. Never show fake animated counters.

### 10 — Testimonials & partners

Use approved client testimonials and partner logos when available. Do not invent testimonials or imply a client relationship without a genuine basis. Omit this section temporarily if there is no legitimate content to show.

### 11 — FAQs

Use a keyboard-accessible accordion covering the service portfolio, individual versus end-to-end engagements, production support, digital services, project requirements and quotation requests.

### 12 — Final CTA

**Headline:**

> HAVE AN IDEA?  
> LET'S MAKE IT HAPPEN.

**Copy:** “Tell us what you're planning. We'll help you explore the services, approach, and next steps that best suit your project.”

Actions: `START A PROJECT ↗` and `TALK TO OUR TEAM`.

### 13 — Footer

Include the Flashax logo, tagline, all seven services, About, Our Work, Contact, verified contact information, official social links, Privacy Policy and Terms. Do not invent contact details.

---

## 5. Individual Service Page Pattern

Each of the seven service pages should have its own content and visual treatment while reusing a consistent information architecture:

1. Service-specific hero with relevant photograph, video, or lightweight 3D scene.
2. Short introduction explaining who the service is for and what problem it solves.
3. Detailed service catalogue.
4. Delivery capabilities and scope.
5. Relevant case studies, when real material exists.
6. A practical explanation of the delivery process.
7. Related services.
8. Service-specific FAQs.
9. CTA that opens the enquiry form with the relevant service preselected.

Do not ship seven copies of the same page with only the headings changed. Preserve the shared layout while tailoring content, imagery and examples to the service.

---

## 6. Portfolio and About Pages

### Portfolio — `/work`

Build a filterable gallery and individual case-study pages at `/work/[slug]`. A case study can cover:

- Project brief and objective.
- Scope of work.
- Services delivered.
- Execution details.
- Approved images and videos.
- Verified outcomes, where available.

Use structured project data so new case studies can be added without rewriting page components.

### About — `/about`

Recommended sections:

1. Company introduction.
2. Mission and vision, once confirmed by the owners.
3. Approach to experiences and project delivery.
4. Seven service capabilities.
5. Team or founder information, with approval.
6. Genuine portfolio and partnerships.
7. Contact CTA.

Never make up a company founding date, history, team size, awards or client list.

---

## 7. Project Enquiry Flow

Build a concise, mobile-friendly project enquiry wizard. Visitors should be able to request a quote for one service or a combination of services.

**Step 1 — Services:** allow one or more of the seven divisions, plus “Multiple Services” and “Other”.

**Step 2 — Project:** project/event name, brief, location, tentative date and expected audience where relevant.

**Step 3 — Budget:** optional range; allow visitors who do not yet know their budget to proceed.

**Step 4 — Contact:** name, organisation if relevant, email and phone if needed.

The form must have server-side validation, clear errors, loading and success states, spam protection as appropriate, and a privacy notice. A success screen must only appear when a real server-side handler confirms receipt. Do not fake email delivery or data storage.

A possible initial integration is a Next.js route handler that sends the enquiry through a configured email provider. Keep API keys server-side, validate all user input, and never put secrets in client components or `NEXT_PUBLIC_*` variables.

---

## 8. System Architecture

### Preferred technology stack

This repository is already configured around the following stack; inspect the installed dependencies before adding anything new.

- **Next.js App Router** — routing, server rendering and metadata.
- **React + TypeScript** — component composition and typed application code.
- **CSS / global stylesheet / CSS Modules** — styling and design tokens; Tailwind is not assumed to be installed.
- **Three.js + React Three Fiber** — interactive 3D hero.
- **GSAP + ScrollTrigger** — scroll-driven 3D camera and section transitions.
- **Lucide React** — consistent interface icons where useful.
- **Next.js route handler** — secure server-side handling of project enquiries.
- **Configured email provider** — optional delivery of enquiries after credentials and sender identity are verified.

Do not add a CMS, database, animation library, or other dependency unless a concrete requirement justifies it.

### High-level system diagram

```text
Visitor (desktop / tablet / mobile)
                |
                v
       Next.js App Router
                |
       +--------+---------+
       |                  |
       v                  v
Server-rendered        Client-enhanced
pages and metadata    interactive components
       |                  |
       |             +----+----------------+
       |             |                     |
       |             v                     v
       |       Three.js / R3F         GSAP timelines
       |       hero scene             scroll choreography
       |             |                     |
       +-------------+---------------------+
                     |
                     v
          Service and project content
         (typed local data initially)
                     |
                     v
            Project enquiry form
                     |
                     v
          POST /api/contact (server)
                     |
           validation + rate limiting
                     |
                     v
          Configured mail provider
                     |
                     v
          Flashax business inbox
```

The 3D scene is decorative and must never be the only place where important content exists. Service descriptions, CTAs, headings and navigation must remain real HTML content.

### Recommended code organisation

Adapt to the actual starter rather than blindly overwriting it. A maintainable target structure is:

```text
flashax-website/
├── README.md                       # Single project brief and system design
├── package.json
├── next.config.ts
├── tsconfig.json
├── .env.example
├── app/
│   ├── layout.tsx                  # Root layout, metadata, global providers
│   ├── page.tsx                    # Home page composition
│   ├── globals.css                 # Brand tokens and global styles
│   ├── not-found.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── event-management/page.tsx
│   │   ├── exhibitions/page.tsx
│   │   ├── production-operations/page.tsx
│   │   ├── brand-activation/page.tsx
│   │   ├── campus-connect/page.tsx
│   │   ├── digital-creative/page.tsx
│   │   └── csr-education/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts         # Server-side enquiry endpoint
├── components/
│   ├── layout/                      # Header, navigation, footer
│   ├── home/                        # Homepage sections
│   ├── services/                    # Service grid and page sections
│   ├── portfolio/                   # Gallery and case-study components
│   ├── three/                       # Canvas, scene and 3D objects
│   ├── forms/                       # Project enquiry flow
│   └── ui/                          # Buttons, section heading, accordion
├── lib/
│   ├── services.ts                  # Seven service records
│   ├── projects.ts                  # Real portfolio data only
│   ├── site.ts                      # Brand details and navigation
│   ├── contact-validation.ts        # Server-side input validation
│   └── seo.ts                       # Shared metadata helpers
├── types/
│   └── index.ts                     # Shared TypeScript types
└── public/
    ├── brand/
    │   ├── flashax-logo-purple.png
    │   └── flashax-logo-gold-panel.jpg
    └── images/                      # Optimised approved project imagery
```

Folders and files may be introduced as implementation requires them. Avoid empty abstraction layers. Keep components focused and data-driven.

### Initial data models

```ts
type FlashaxService = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  relatedServiceSlugs: string[];
  heroImage?: string;
};

type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  location?: string;
  date?: string;
  coverImage: string;
  gallery?: string[];
  servicesDelivered: string[];
  clientName?: string;
  approvedForPublicDisplay: boolean;
  verifiedOutcomes?: string[];
};
```

Use a project in public-facing work only when it is genuine, the relevant image/content usage is authorised, and the public-display flag is approved. If there are no verified projects, keep the portfolio empty or explain that it is being developed rather than generating fake records.

### Contact form data flow

1. Client submits the enquiry form.
2. Browser performs usability validation.
3. Server route validates the full payload independently.
4. Server applies suitable anti-spam controls and rate limiting.
5. If configured, the server sends the enquiry through the selected provider.
6. Server returns an honest success or error response.
7. UI reports the actual result.

Keep secrets server-side. Never return sensitive provider error details to the browser.

---

## 9. 3D and Motion System

Use the installed Three.js, React Three Fiber and GSAP packages where they solve a real problem. Inspect the actual package versions before using APIs. Do not install helper libraries by default.

### Hero scene approach

- One coherent stage/event environment first.
- A designed camera path controlled by a single GSAP timeline.
- A restrained purple atmosphere and selective gold lighting.
- Real HTML for headings and CTAs layered above or around the canvas.
- A static or lightweight fallback if WebGL is unsupported or the scene fails.
- Reduced motion for users who request it.
- Simplified detail and rendering cost on small or weaker devices.

### Animation principles

- Motion must reinforce hierarchy or storytelling.
- Use scroll-driven motion selectively; do not attach a complex timeline to every section.
- Avoid fighting native scroll or trapping the visitor in a pinned scene.
- Respect `prefers-reduced-motion`.
- Keep text readable while moving.
- Avoid excessive particles, real-time lights, post-processing, and oversized textures.
- All essential content remains available if the canvas does not load.

### Non-3D sections

Use CSS transitions and GSAP only where necessary for:

- Section reveals.
- Image masks and crop transitions.
- Text entrance animations.
- Portfolio hover states.
- Navigation transitions.
- Scroll progress indicator.

Do not create competing scroll timelines that control the same elements.

---

## 10. Responsive Design, Accessibility and Performance

### Responsive behaviour

Design mobile layouts intentionally rather than shrinking desktop layouts.

- Desktop: expansive editorial grid, detailed hero scene and carefully composed wide imagery.
- Tablet: simplified grid and reduced 3D detail, with preserved typographic hierarchy.
- Mobile: single-column service layout, short headline lines, touch-friendly controls, simplified scene and compact navigation.

### Accessibility

- Semantic HTML and a logical heading structure.
- Keyboard-accessible links, menu, accordion and form.
- Visible focus styles.
- Descriptive form labels and accessible validation messages.
- Appropriate text contrast.
- Useful alternative text for meaningful images.
- Decorative imagery hidden from assistive technology where appropriate.
- A reduced-motion path and complete non-WebGL fallback.

### Performance

- Optimise and correctly size images.
- Compress 3D models and textures.
- Lazy-load noncritical media and below-the-fold features where appropriate.
- Avoid blocking the first render with a long 3D loading screen.
- Reduce particle count, shadow quality and post-processing on lower-powered devices.
- Use `next/image` for suitable website photography.
- Avoid loading every portfolio video on the initial page.
- Test Core Web Vitals after deployment and prioritise real bottlenecks.

---

## 11. SEO and Metadata

Every route should have a meaningful title and description. Include canonical metadata, social sharing metadata and appropriate headings. Use descriptive image alt text. Add structured data only when the facts are known and accurate. Do not fabricate review schema, ratings, testimonials, project counts, or business details.

The public production URL should be configured through `NEXT_PUBLIC_SITE_URL`. Do not assume a final domain until the company confirms it.

---

## 12. Environment Configuration

The existing `.env.example` contains these starting variables:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=Flashax Website <website@your-verified-domain.com>
```

- `NEXT_PUBLIC_SITE_URL` is the public website origin.
- `RESEND_API_KEY` is a server-only secret.
- `CONTACT_TO_EMAIL` is the authorised destination for website enquiries.
- `CONTACT_FROM_EMAIL` must use an approved, verified sender identity.

Do not commit real keys or credentials. Do not expose the API key in a client component or prefix it with `NEXT_PUBLIC_`. Contact delivery is not ready until provider configuration and sender verification have been completed.

---

## 13. Vibe-Coding Workflow for Antigravity and Codex

Use this README as the main project specification.

### Before each task

1. Inspect the current repository and relevant files.
2. Identify the specific change needed.
3. Check existing components and dependencies before creating replacements.
4. Implement the feature in the existing architecture.
5. Keep branding and behaviour aligned with this document.
6. Run applicable checks and fix regressions.
7. Report what changed, what was tested, and what is still incomplete.

### Implementation order

**Milestone 1 — Foundation**

- Verify the Next.js starter and dependencies.
- Establish fonts, colour tokens, responsive layout, global reset and shared buttons.
- Integrate and correctly display the official logo.
- Build header, mobile navigation and footer.

**Milestone 2 — Homepage baseline**

- Implement the complete homepage section structure.
- Add realistic layouts and copy for all seven service divisions.
- Make all links and CTA destinations functional.
- Use real or clearly identified temporary visual assets.

**Milestone 3 — Cinematic 3D hero**

- Build a well-composed stage environment.
- Add camera and scroll animation.
- Implement a non-WebGL fallback and reduced-motion behaviour.
- Measure rendering cost and simplify for mobile.

**Milestone 4 — Services and content routes**

- Build the services directory.
- Implement seven unique service pages based on shared components.
- Create the portfolio and about pages.
- Add route-specific metadata.

**Milestone 5 — Enquiry experience**

- Build contact form UI and validation.
- Implement a real server-side handler.
- Configure mail delivery only when the required credentials are supplied.
- Test success and failure states honestly.

**Milestone 6 — Production quality**

- Review all routes and navigation.
- Test desktop, tablet and mobile.
- Check keyboard navigation, contrast, reduced motion and fallbacks.
- Optimise images and WebGL resources.
- Run lint, typecheck and production build.
- Fix the issues discovered rather than only listing them.

### Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Run the commands supported by the current repository. If a check cannot run because dependencies, network access, or environment variables are missing, report that fact clearly. Do not claim that a check passed unless it actually ran successfully.

### Coding-agent rules

- Do not replace the entire project without inspecting it.
- Do not add libraries without a concrete reason.
- Do not add a database or CMS before it is needed.
- Do not add fake client data, fake stats or fake testimonials.
- Do not make visible buttons that do nothing.
- Do not pretend an enquiry was sent when the server did not confirm it.
- Do not expose secrets to the browser.
- Keep the code modular and typed.
- Update this README when a meaningful architectural decision changes.
- Prefer complete working implementations over TODO-heavy scaffolds.
- Report limitations honestly.

---

## 14. Definition of Done

The website is not complete just because it looks attractive in one desktop screenshot.

A milestone is complete when the relevant checks below pass:

### Design

- Flashax logo is displayed without distortion.
- Purple/gold brand design is consistent.
- Type scale, spacing and section hierarchy are deliberate.
- The page does not feel like a generic template.
- Desktop and mobile layouts are both designed intentionally.

### Functionality

- Navigation links work.
- Seven service divisions are discoverable.
- Service pages have appropriate content and CTAs.
- Portfolio items have valid destinations.
- The enquiry form validates and reports server results accurately.
- Error, loading and success states exist where needed.

### Motion and 3D

- Hero scene does not hide important content.
- Scroll motion feels smooth and purposeful.
- Reduced-motion and non-WebGL experiences remain usable.
- Mobile rendering cost is controlled.
- Failure to load a 3D scene does not break the page.

### Quality

- No avoidable console errors.
- No broken images or dead links.
- No invented business claims.
- Lint, typecheck and build are run and their actual results are reported.
- No secrets are committed or exposed to the browser.

---

## 15. Immediate First Task

Start by inspecting the current repository and installed dependencies. Then implement a polished **homepage foundation** using this design system:

1. Global design tokens and typography.
2. Responsive navigation and working mobile menu.
3. Hero layout with the correct Flashax logo, headline and CTAs.
4. A cohesive first version of the 3D stage scene, with fallback.
5. Who We Are section.
6. Seven-service grid.
7. The Flashax Experience section.
8. Selected Work using only genuine assets or clearly identified visual placeholders.
9. Remaining homepage sections in the order defined above.
10. Footer with working route links.

Do not start building every advanced interaction at once. Establish the overall art direction and the complete page structure first, then refine and optimise the motion. The result should already look intentionally designed before the most complex 3D effects are added.

**Success means:** a recognisable Flashax identity, premium visual quality, complete service discovery, a credible business narrative, responsive usability, and a clear way for clients to enquire.
#   F l a s h A x  
 