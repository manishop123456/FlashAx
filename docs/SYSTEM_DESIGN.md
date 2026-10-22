# FLASHAX — System Design

This document describes the technical shape of the Flashax website. It is a practical target architecture, not permission to rewrite a functioning codebase blindly. Inspect existing files and dependencies before implementing a change.

## 1. System goals

- Present Flashax's seven service divisions clearly.
- Create a memorable, cinematic homepage using a performant 3D hero.
- Keep navigation, service descriptions, portfolio content, and enquiry actions usable without WebGL.
- Support dedicated service pages and future project case studies.
- Provide a credible project-enquiry flow without pretending to send/store data when no handler is configured.
- Keep content and UI components easy to extend as Flashax grows.

## 2. Current preferred stack

Use the installed stack unless inspection reveals a good reason to change it:

- Next.js App Router
- React and TypeScript
- Global CSS / CSS Modules as appropriate to the existing code
- Three.js and React Three Fiber for the primary 3D scene
- GSAP + ScrollTrigger for scroll-driven choreography
- Lucide React for consistent interface icons where useful

Tailwind CSS is not assumed to be installed. Do not add it merely because it is common. Check `package.json` before using any dependency or API.

## 3. High-level architecture

```text
Visitor: desktop / tablet / mobile
                 |
                 v
        Next.js App Router
                 |
       +---------+----------+
       |                    |
       v                    v
Server-rendered pages   Client interactive islands
metadata and content          |
                              +-----------------------+
                              |                       |
                              v                       v
                       Three.js / R3F           GSAP timelines
                       hero environment         scroll choreography
                              |                       |
       +----------------------+-----------------------+
       |
       v
Typed local content: services, navigation, project records
       |
       +----------------------------+
       |                            |
       v                            v
Portfolio and service pages    Project enquiry form
                                    |
                                    v
                          POST /api/contact (server)
                                    |
                          validation and anti-spam
                                    |
                                    v
                          Configured email provider
                                    |
                                    v
                          Flashax business inbox
```

The 3D canvas is progressive enhancement. Important headings, service descriptions, links, and calls to action must remain real HTML and must remain available if the canvas cannot render.

## 4. Route map

| Route | Responsibility |
|---|---|
| `/` | Homepage and main conversion path |
| `/services` | Directory of all seven service divisions |
| `/services/event-management` | Event Management & Experiences |
| `/services/exhibitions` | Exhibition & Trade Show Solutions |
| `/services/production-operations` | Event Production, Manpower & Operations |
| `/services/brand-activation` | Brand Activation & Experiential Marketing |
| `/services/campus-connect` | Campus Connect, Sponsorships & Partnerships |
| `/services/digital-creative` | Digital Marketing, Creative & Content |
| `/services/csr-education` | CSR, Financial Literacy & Educational Programs |
| `/work` | Portfolio gallery and category filters |
| `/work/[slug]` | A real project case study |
| `/about` | Company overview, values, and approved team information |
| `/contact` | Project-enquiry experience and verified contact options |
| `/privacy-policy` | Privacy information for website visitors and enquiries |
| `/terms` | Applicable website and service terms |

A route should only be exposed when it has meaningful content and working navigation. Do not use empty placeholder pages to simulate completion.

## 5. Suggested source organisation

Adapt this structure to the real project; do not create empty files or abstraction layers for appearance only.

```text
app/
  layout.tsx
  page.tsx
  globals.css
  not-found.tsx
  services/
    page.tsx
    event-management/page.tsx
    exhibitions/page.tsx
    production-operations/page.tsx
    brand-activation/page.tsx
    campus-connect/page.tsx
    digital-creative/page.tsx
    csr-education/page.tsx
  work/
    page.tsx
    [slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  api/contact/route.ts
components/
  layout/       # Header, mega-menu, footer
  home/         # Homepage sections
  services/     # Service grids and service-page sections
  portfolio/    # Portfolio cards, filters, case-study sections
  three/        # Canvas, scene, models, fallback
  forms/        # Project-enquiry form and UI states
  ui/           # Buttons, headings, accordion, small primitives
lib/
  site.ts       # Brand details, navigation
  services.ts   # Typed records for the seven services
  projects.ts   # Verified, approved public portfolio records
  contact-validation.ts
  seo.ts
  utils.ts
public/
  brand/        # Supplied logo assets
  images/       # Approved and optimised media
  models/       # Optimised GLB/GLTF assets when available
  videos/       # Approved, optimised showreel/portfolio media
```

## 6. Component responsibility

- `Header`: desktop navigation, accessible Services mega-menu, mobile drawer, scroll state.
- `HeroScene`: lazy/client-only 3D scene and render fallback; no core website copy hidden inside the canvas.
- `HeroContent`: headline, supporting description, and CTA links as HTML.
- `ServiceGrid` / `ServiceCard`: consume typed service records; links must lead to real routes.
- `ExperienceShowcase`: one coordinated visual sequence when performance allows.
- `PortfolioGallery`: shows only real, approved portfolio records.
- `ProjectEnquiryForm`: accessible client-side experience backed by server validation.
- `Footer`: official contact details only; never invent business information.

## 7. Content model

```ts
export type FlashaxService = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  relatedServiceSlugs: string[];
  heroImage?: string;
};

export type PortfolioProject = {
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

Only publish portfolio records with genuine information and permission to use relevant names and imagery. Do not put fake demo content into production data.

## 8. Contact form data flow

1. User selects one or more service types and provides the relevant project details.
2. Browser performs accessible usability validation.
3. Server independently validates and normalises the payload.
4. Server applies rate limits and anti-spam controls appropriate to the deployment.
5. If the provider is configured, the server sends the enquiry through a verified mail service.
6. The route returns an honest success or error response.
7. The UI reflects the actual server result.

Keep provider API keys on the server. A configured `.env.example` is documentation, not a working credential. If mail is not configured, tell the user submission is unavailable rather than showing a false success screen.

## 9. Environment configuration

Document variables in `.env.example`, with empty placeholders and no real secrets. Likely variables:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Only include variables the implemented features actually use. Validate required server-side configuration before attempting delivery. Never expose secrets through a public variable or commit a real `.env.local` file.

## 10. SEO and error handling

- Give each public route a distinct title and meta description.
- Add Open Graph metadata and an appropriate site URL when known.
- Use semantic headings and descriptive link text.
- Provide custom not-found and error states as appropriate.
- Make media and WebGL failures degrade gracefully.
- Avoid indexing incomplete case studies or unpublished placeholder pages.

## 11. Quality checks

After substantial changes, run available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Also manually inspect desktop and mobile behavior, keyboard navigation, reduced motion, route destinations, form failures, and the 3D fallback. Report any check that could not be run honestly.
