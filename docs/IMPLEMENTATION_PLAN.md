# FLASHAX — Implementation Plan

This roadmap guides incremental vibe-coding using Antigravity and Codex. Work on one milestone at a time. Inspect the existing repository before each milestone and preserve working functionality.

## Delivery principles

- The README is the product brief; this file defines the order of implementation.
- `AGENTS.md` rules apply to every task.
- Use real content or explicitly labelled conceptual visuals only.
- Do not add dependencies unless needed; inspect `package.json` first.
- Every milestone must finish with a functional, testable state.
- Do not start by building an elaborate 3D scene before the page layout, content hierarchy, and responsive behavior are established.

## M0 — Repository audit and baseline

**Tasks**
- Inspect `package.json`, Next.js configuration, `app/`, `components/`, `lib/`, and available assets.
- Determine what is already implemented and what is still a starter scaffold.
- Check whether logo assets are available under `public/brand/`.
- Run baseline lint, typecheck, and build when dependencies are available.
- Report existing errors separately from errors introduced by new work.

**Acceptance criteria**
- Existing architecture and scripts are understood.
- No useful functionality is removed blindly.
- Current blockers and implementation status are recorded.

## M1 — Foundation and design system

**Tasks**
- Implement central CSS variables using `docs/DESIGN_SYSTEM.md`.
- Establish base typography, page gutters, content width, section spacing, focus styles, and reusable buttons.
- Configure root layout and metadata.
- Implement a responsive navigation header, Services mega-menu, mobile drawer, and footer.
- Use the supplied logo assets without distortion.

**Acceptance criteria**
- Palette and typography are consistent.
- Desktop and mobile navigation work with mouse, touch, and keyboard.
- Logo is legible on its actual backgrounds.
- No dead navigation links are presented as completed.

## M2 — Homepage structure and content

**Tasks**
- Build the homepage in the documented order: hero, introduction, seven services, experience showcase, selected work, why Flashax, audiences, process, impact, testimonials/partners where authentic, FAQs, final CTA, footer.
- Make each section visually distinct but consistent with the brand system.
- Create reusable service and section components.
- Ensure all content remains readable without animation.
- Use only genuine portfolio content; omit unsupported sections or use an honest alternative if evidence is unavailable.

**Acceptance criteria**
- The homepage has a complete responsive content hierarchy.
- All seven service divisions are represented and linked correctly.
- CTAs have meaningful destinations.
- No invented clients, stats, or testimonials exist.

## M3 — Hero 3D scene and scroll choreography

**Tasks**
- Create one coherent event-stage environment using Three.js / React Three Fiber.
- Separate HTML hero content from the rendered scene.
- Integrate GSAP/ScrollTrigger for one coordinated scroll timeline.
- Use purple atmosphere and restrained gold lighting.
- Add graceful WebGL fallback and reduced-motion behavior.
- Simplify rendering for mobile and lower-powered devices.

**Acceptance criteria**
- Hero renders reliably and does not block primary content.
- Scroll movement is smooth, intentional, and does not trap scrolling.
- Scene failure does not hide CTA, headline, or services.
- Reduced-motion behavior removes or substantially simplifies nonessential movement.
- No obvious render-loop, resize, cleanup, or scroll-trigger duplication issues.

## M4 — Services directory and individual service pages

**Tasks**
- Create `/services` with all seven divisions.
- Create the seven documented service routes.
- Use a reusable service-page template populated by typed service data.
- Add related-service links and service-specific enquiry CTA behavior.
- Add meaningful metadata per route.

**Acceptance criteria**
- Each division has unique and relevant content.
- All service cards and related links work.
- Each service CTA passes or preselects the appropriate division in the enquiry form where practical.
- No route is represented as complete if it is just a placeholder.

## M5 — Portfolio, case studies, and About

**Tasks**
- Implement `/work` with useful category filters.
- Implement `/work/[slug]` driven by approved project records.
- Implement `/about` using confirmed company facts.
- Use image optimization and proper alt text.
- If public work is not yet available, display an honest empty/coming-soon state rather than fake projects.

**Acceptance criteria**
- Filters work and are accessible.
- Case-study pages only expose approved, genuine project data.
- About page contains no invented company history, team size, awards, or client list.
- Missing media does not break layout.

## M6 — Project enquiry and contact

**Tasks**
- Build an accessible enquiry flow with service selection, project brief, location/date when relevant, optional budget range, and contact details.
- Implement independent server-side validation.
- Handle server configuration and errors honestly.
- If an email provider is configured, integrate it server-side with appropriate abuse controls.
- If delivery is not configured, provide a clear unavailable/configuration state; never simulate delivery.
- Add or verify privacy information.

**Acceptance criteria**
- Client and server validation exist.
- Loading, success, and error states are useful and accurate.
- Successful status is returned only after real server acceptance.
- Secrets remain server-only.
- Spam controls and privacy notice are appropriate to deployment.

## M7 — Polish, accessibility, SEO, and performance

**Tasks**
- Test all route destinations and calls to action.
- Verify mobile layouts and touch targets.
- Test keyboard navigation and reduced-motion behavior.
- Verify colour contrast, semantic headings, labels, and focus states.
- Optimize images, textures, models, and lazy loading.
- Add correct page metadata, social preview metadata, and site URL when known.
- Check error and not-found states.
- Run lint, typecheck, and production build.

**Acceptance criteria**
- No known dead links or fake interactions.
- No severe layout overflow at supported widths.
- 3D content has fallback behavior and does not prevent page use.
- Build checks pass, or all blockers are reported accurately.
- Remaining limitations are documented.

## M8 — Deployment readiness

**Tasks**
- Confirm deployment target and production domain.
- Configure actual environment variables in the hosting provider.
- Verify email sender/domain if enquiry delivery is enabled.
- Test production build and deployed routes.
- Confirm privacy policy, contact details, favicon, social previews, and analytics/privacy choices as applicable.

**Acceptance criteria**
- Production secrets are not committed.
- Contact delivery has been tested end-to-end if advertised as available.
- Deployed paths and metadata are correct.
- No development-only content or fake project data is exposed.

## Working with Antigravity and Codex

For each task, provide a small, bounded objective. Ask the agent to:

1. Read `AGENTS.md`, `README.md`, and the relevant document under `docs/`.
2. Inspect the actual files before editing.
3. Implement the requested milestone, not unrelated redesigns.
4. Test the changed behavior and run applicable checks.
5. Update docs if decisions or behavior change.
6. Report changed files, tests run, results, and remaining limitations.

## Immediate next task

Start with M0 repository audit. Then complete M1 (foundation and design system) before implementing the full 3D hero. Do not build every page, model, animation, and backend integration in one giant unverified change.
