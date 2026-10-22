# FLASHAX — Vibe Coding Master Prompt

> **Project:** Official Flashax website  
> **Tagline:** Where Engagement Sparks Success  
> **Concept:** Hybrid Signature Experience — cinematic 3D, editorial layouts, premium service discovery, and strong project enquiries.

Use this prompt in Antigravity or Codex from the root of the Flashax repository. The repository documentation remains the source of truth; this prompt focuses implementation quality, motion, 3D, loaders, and carousels.

---

## MASTER PROMPT

Act as a senior creative developer, UI/UX designer, motion designer, Three.js engineer, and production-minded full-stack developer. Build and refine the actual Flashax website in the existing repository. Do not respond with only ideas, mockups, or isolated snippets: inspect the project, implement cohesive changes, and verify them.

### 1. Read and inspect before coding

Before editing anything:

1. Read `README.md`, `AGENTS.md`, and the relevant documents in `docs/`, especially `SYSTEM_DESIGN.md`, `DESIGN_SYSTEM.md`, `IMPLEMENTATION_PLAN.md`, and `DECISIONS.md`.
2. Inspect the actual `package.json`, routes, components, styles, public assets, and current Git changes.
3. Identify what already works. Preserve it unless there is a clear, documented reason to change it.
4. Check which animation and 3D packages are already installed. Do not assume a package exists and do not add overlapping libraries without a concrete reason.
5. Use the supplied brand assets in `public/brand/`. Preserve logo proportions and use the correct logo version for the background.

If documentation and code disagree, trust the actual repository for what currently exists, compare the intended behaviour in the docs, and make a small, deliberate correction. Do not rebuild the app blindly.

### 2. Brand and visual direction

The site must feel like a premium, art-directed event-production and creative-solutions brand—not a generic agency template.

**Working palette:**

- Flashax Purple: `#521262`
- Flashax Gold: `#F7B721`
- Midnight Aubergine: `#17091D`
- Deep Purple: `#220D2B`
- Purple Card: `#2C1236`
- Warm Ivory: `#F2F4E8`
- Muted Lavender: `#C5B8C9`
- Feather Magenta: `#F609CF` — rare accent only
- Light Gold: `#FFD05C`

These are working values sampled/derived from supplied logos, not certified official brand standards.

Keep the website purple-first. Use deep aubergine for cinematic backgrounds, purple for brand presence, ivory for strong text, lavender for supporting text, and gold for important CTAs and selective emphasis. Do not paint every surface purple or gold. Use magenta sparingly. Avoid constant neon glows, excessive glassmorphism, random gradients, generic rounded-card grids, and decorative motion with no purpose.

Use a strong display face for large headlines and a highly readable sans-serif for body and UI. Maintain generous whitespace, deliberate line breaks, fluid typography, consistent gutters, and excellent text contrast.

### 3. Homepage structure

Keep the approved homepage narrative:

1. Cinematic 3D hero.
2. Who We Are — “One Partner. Multiple Possibilities.”
3. Seven Core Services.
4. The Flashax Experience — Imagine → Design → Produce → Experience.
5. Selected Work.
6. Why Flashax.
7. Who We Work With.
8. Our Process.
9. Our Impact — verified information only.
10. Testimonials & Partners — genuine and approved only.
11. FAQs.
12. Final CTA — “Have an Idea? Let’s Make It Happen.”
13. Footer.

Main hero copy:

**Eyebrow:** `EVENTS • EXPERIENCES • BRAND SOLUTIONS`

**Headline:** `WE DON'T JUST ORGANISE EVENTS. WE CREATE MOMENTS THAT MOVE PEOPLE.`

**Supporting copy:** `From corporate experiences and college festivals to brand activations, exhibitions and digital campaigns, Flashax brings ideas to life through creative thinking and coordinated execution.`

Primary CTA: `LET'S BUILD SOMETHING ↗`  
Secondary CTA: `EXPLORE OUR WORLD ↓`

Keep important content and calls to action as real HTML. Do not render essential text inside the 3D canvas.

### 4. Signature 3D hero and scroll choreography

Build one coherent, premium 3D environment based on a monumental event stage. It should emerge from deep aubergine darkness, use controlled architectural lighting and a few high-quality details, and include golden spotlights that complement the brand. The scene must look art-directed, not like a pile of primitive shapes.

Use the installed project stack. If appropriate, use Three.js/React Three Fiber for the scene and GSAP + ScrollTrigger for a controlled animation timeline. Keep the 3D canvas isolated in focused components; keep copy, links, and controls accessible in HTML.

**Suggested scroll timeline:**

- **0–20%:** The environment is revealed from darkness; stage silhouettes and subtle light beams emerge.
- **20–40%:** Camera eases forward and reveals the event stage; the wordmark/headline gains visual emphasis.
- **40–60%:** Stage geometry and lighting transition toward an exhibition-installation motif.
- **60–80%:** Reveal a branded-activation environment through controlled camera travel and selected object/lighting transitions.
- **80–100%:** Settle the visual energy and guide the visitor toward the brand introduction/next section.

These beats should feel like one directed experience. Do not force the browser to use scroll-hijacking or make a normal scroll gesture feel trapped. Avoid pinning too many consecutive sections. The scene should gracefully release the scroll and hand off into the page content.

Use a restrained amount of particles, fog, bloom, and other post-processing. Post-processing must be justified by the visual result and budgeted for weaker devices. Prefer a few excellent models, materials, and lights over dozens of low-quality objects.

If polished models are not available, create a deliberate, clean architectural composition and keep it easy to replace with GLB/GLTF assets later. Do not use an unfinished toy-like scene as the final result. Do not download or copy copyrighted assets without permission.

### 5. Loader and page-transition behaviour

Create a premium, minimal branded loader that feels like part of Flashax—not a generic spinner.

**Visual idea:** Midnight Aubergine background, approved Flashax logo, a thin gold progress line, a restrained feather-inspired motion accent, and a small label such as `PREPARING THE EXPERIENCE`.

Loader requirements:

- Show it only when meaningful startup work is actually in progress.
- Where possible, base progress on real asset/loading state; if exact progress is not available, use an honest indeterminate animation rather than fake 0–100% progress.
- Reveal the logo and progress line with a short, smooth animation.
- Exit cleanly when the minimum critical content is ready; never wait for optional 3D media to load before exposing the page.
- Provide a timeout/error fallback so a failed model, video, or WebGL context cannot trap the visitor.
- Do not show a long loading gate on every route change. Use subtle route transitions instead.
- Respect `prefers-reduced-motion` and keep the content usable if the loader is skipped.
- Avoid an artificial delay added purely for spectacle.

The header, meaningful page content, and primary CTA must not remain blocked because an optional 3D asset has failed.

### 6. Scroll animations and micro-interactions

Treat motion as a design system. Define reusable animation patterns and use them consistently rather than giving every component a different effect.

Create a restrained set of reusable motion primitives where useful:

- Section reveal: small vertical movement with opacity, short distance, and clean easing.
- Text reveal: clip/mask or staggered words only for selected headlines.
- Image reveal: image clipping or mask reveal with a subtle scale settle.
- Card hover: minimal lift, image-scale, or a small directional shift.
- Navigation: smooth background/contrast change after the hero; accessible mega-menu transitions.
- Scroll progress: a thin gold indicator, only if it improves orientation.
- CTA: clear hover, pressed, and keyboard-focus states.
- Section handoff: transitions that support the story without hiding content.

Motion rules:

- Use CSS for simple hover and focus transitions.
- Use GSAP for complex coordinated timelines and scroll-driven 3D camera movement.
- Avoid using multiple libraries to animate the same property.
- Keep animations smooth and short enough to preserve responsiveness.
- Avoid repeated bounce effects, elastic easing everywhere, excessive parallax, and text moving while users are trying to read it.
- Animation must never be the only way to discover content or actions.
- Respect `prefers-reduced-motion`; disable/reduce scroll-linked movement and supply simple visible states.

### 7. Carousel and portfolio interactions

Build at least one high-quality, purposeful carousel where it fits the page narrative—preferably Selected Work or a featured project showcase. Do not turn the entire homepage into carousels.

Carousel design:

- Large editorial project image/thumbnail.
- Project title and category.
- Short supporting description.
- Distinct previous/next controls.
- Pagination dots or a clear item counter.
- Optional progress line or restrained autoplay only where appropriate.
- Smooth transitions with a subtle image-scale or masked reveal.
- Drag/swipe support if compatible with the chosen implementation.
- Keyboard support and accessible button labels.
- Pause autoplay when the visitor hovers, focuses, or interacts.
- Do not autoplay rapidly; prefer user-directed navigation.
- Respect reduced motion and disable automatic movement when requested.
- On mobile, allow natural touch gestures without breaking page scrolling.
- Do not rely on hover to reveal essential project details.

Use real, approved portfolio assets when available. If no projects are available, build a data-driven carousel component with clearly identified preview placeholders that are not presented as completed Flashax projects. Do not invent project metrics, clients, or testimonials.

### 8. Service interactions

Flashax has seven divisions:

1. Event Management & Experiences.
2. Exhibition & Trade Show Solutions.
3. Event Production, Manpower & Operations.
4. Brand Activation & Experiential Marketing.
5. Campus Connect, Sponsorships & Partnerships.
6. Digital Marketing, Creative & Content.
7. CSR, Financial Literacy & Educational Programs.

Create an asymmetric, image-led service grid. Cards should have consistent anatomy, purposeful hover treatments, a number/title/description, and a working `Explore Service` destination. Use a service mega-menu that remains keyboard accessible. Avoid excessive 3D card tilt; a small, controlled perspective effect is sufficient.

### 9. Implementation quality and architecture

Use the existing architecture and dependencies where possible. The documented target is Next.js App Router with React and TypeScript, with Three.js/React Three Fiber and GSAP/ScrollTrigger for the major 3D/scroll experience. Inspect `package.json` before installing anything. Do not assume Tailwind is installed; use the project's actual styling approach unless a deliberate migration is justified.

Keep components focused and reusable, for example:

- `Header` / `MegaMenu`
- `HeroContent` / `HeroScene`
- `SectionHeading`
- `ServiceGrid` / `ServiceCard`
- `ExperienceShowcase`
- `PortfolioCarousel` / `PortfolioCard`
- `ProcessTimeline`
- `FAQAccordion`
- `ProjectEnquiryForm`
- `Footer`

Keep content separate from layout using typed service and portfolio data. Use client components only where interactivity or browser-only APIs are required. Dynamically load the 3D scene when appropriate to keep server-rendered content useful and fast.

Never put secrets in the browser or `NEXT_PUBLIC_*` variables. Only expose genuinely public configuration. Build a form submission against a real server endpoint when configured; never claim an enquiry was submitted if no server accepted it.

### 10. Performance, fallback, and accessibility

- Optimize models, textures, images, and videos.
- Load optional 3D assets lazily.
- Limit expensive post-processing, real-time shadows, and high particle counts.
- Provide a 2D/static fallback when WebGL is unsupported or the scene fails.
- Keep primary content visible while nonessential 3D assets load.
- Support mobile and tablet with a simplified scene and a clear layout.
- Respect `prefers-reduced-motion`.
- Use semantic HTML, keyboard navigation, visible focus, labelled form inputs, meaningful alt text, and sufficient contrast.
- Use correct page metadata and sensible loading/error states.
- Do not make the website dependent on hover or animation.

### 11. Working method

For each task:

1. Inspect the relevant code, docs, assets, and dependencies.
2. State the implementation scope and identify likely risks.
3. Implement a cohesive slice of functionality rather than changing the whole app blindly.
4. Run the relevant lint, typecheck, build, or tests.
5. Check layout and interactions at desktop, tablet, and mobile sizes.
6. Check keyboard and reduced-motion behaviour for interactive/animated components.
7. Fix obvious regressions before moving on.
8. Update docs when meaningful decisions or architecture change.
9. Summarize changed files, behaviour implemented, checks run, and unresolved issues honestly.

Do not declare a task complete just because code was written. Verify that components compile, links work, interactions function, and fallbacks exist.

### 12. Definition of done

The work is complete only when:

- The visual result looks deliberately designed and consistent with Flashax.
- Purple and gold are used according to the documented design system.
- The 3D hero feels cinematic, controlled, and coherent.
- The loader does not trap or unnecessarily delay visitors.
- Scroll animations are smooth and do not hijack scrolling.
- The carousel has working controls, mobile support, and accessible states.
- All seven services remain easy to discover.
- All visible buttons/links have meaningful actions.
- The site remains usable when motion is reduced or WebGL fails.
- Mobile layouts are intentionally designed, not just shrunk.
- No fake clients, projects, testimonials, metrics, or contact information are introduced.
- Relevant lint/type/build checks run successfully, or any failure is reported accurately.

Begin by inspecting the repository and reading `README.md`, `AGENTS.md`, and the relevant files under `docs/`. Then implement the next incomplete milestone. Do not rewrite the entire repository without a clear technical reason.

**Final creative standard:** Flashax should feel like a cinematic digital stage—premium, immersive, energetic, beautifully composed, and easy for a real client to use.

---

## END OF MASTER PROMPT
