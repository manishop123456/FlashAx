# FLASHAX — Design System

## 1. Design direction

**Concept:** Hybrid Signature Experience.

The website should feel cinematic, editorial, immersive, premium, confident, contemporary, and clear. The design must look art-directed rather than like a generic agency template.

Main ideas:

- A deep-purple cinematic hero inspired by event stages and production environments.
- Golden highlights that echo the Flashax logo.
- Strong display typography and readable body text.
- Large, carefully cropped event imagery.
- Editorial/asymmetric section composition balanced by a consistent grid.
- Intentional, restrained interaction states.
- Service discovery and project enquiry remain easy throughout the site.

## 2. Brand assets

Keep supplied logo files in `public/brand/`:

- `flashax-logo-purple.png`
- `flashax-logo-gold-panel.jpg`

Use the appropriate version for its background. Preserve the original wordmark, feather, proportions, and clear space. Never stretch or redraw the logo. Use `next/image` or a suitable image implementation according to the current codebase and asset characteristics.

## 3. Working colour palette

The values below are website-working values estimated from the supplied logos; they are not certified official brand specifications. Refine them only when official values are provided.

| Token | HEX | Intended use |
|---|---|---|
| Flashax Purple | `#521262` | Core brand areas and prominent accents |
| Flashax Gold | `#F7B721` | Primary CTAs, active states, selective emphasis |
| Midnight Aubergine | `#17091D` | Main background and cinematic scenes |
| Deep Purple | `#220D2B` | Secondary background and panels |
| Purple Card | `#2C1236` | Card and menu surfaces |
| Warm Ivory | `#F2F4E8` | Primary text on dark backgrounds |
| Muted Lavender | `#C5B8C9` | Supporting text |
| Muted Text | `#A899AF` | Secondary metadata; check contrast |
| Feather Magenta | `#F609CF` | Rare decorative reference to the logo feather |
| Light Gold | `#FFD05C` | Gold hover state and small gradient accents |

## 4. CSS design tokens

Maintain a single source for visual tokens in the global stylesheet or the established token location. Avoid introducing near-duplicate hex values into components.

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

## 5. Colour usage rules

- The site is **purple-first, not yellow-first**.
- Use Midnight Aubergine for the cinematic hero and deep visual sections.
- Use purple as a recognisable brand colour, not as a flat background for every section.
- Use ivory for primary text and lavender for supporting copy.
- Use gold deliberately for primary actions and a limited number of visual highlights.
- Use magenta sparingly. It should echo the feather, not become a second dominant colour.
- Avoid excessive neon outlines, glowing text, bright gold panels, and gradients on every component.
- Check text contrast, particularly muted text and gold text on pale surfaces.

Approximate visual distribution is a flexible guide, not a rule: 45% deep background, 25% brand purple, 15% secondary surfaces, 10% text/light areas, and 5% accent colours combined.

## 6. Typography

Use a strong contemporary display face for large hero statements and a readable sans-serif for paragraphs and UI. Prefer available/licensed fonts or a reliable system fallback. Do not block the first render while waiting for a remote font.

Typographic hierarchy:

- Hero headline: oversized but carefully line-broken; fluid across viewports.
- Section headline: bold and concise.
- Card title: readable, high contrast, and limited to a useful number of lines.
- Body copy: comfortable line length and line height.
- Eyebrow and metadata: small, restrained letter spacing; never too faint.

Do not set every heading in all caps. Use uppercase strategically for hero statements, labels, and selected calls to action.

## 7. Layout and spacing

- Establish a consistent content max-width and responsive page gutter.
- Use generous vertical spacing between major homepage sections.
- Prefer editorial/asymmetric composition where it strengthens the story.
- Keep service descriptions and calls to action easy to scan.
- Use cards only when they improve grouping and interaction; not every section should be a card grid.
- Desktop can feature wide imagery and asymmetric layouts; mobile should become a designed single-column experience.

## 8. Core UI components

### Navigation

Transparent or visually light over the hero, transitioning to a readable deep surface after scroll. Desktop Services uses an accessible mega-menu. Mobile uses a clear drawer with keyboard and close support.

### Primary CTA

Gold background, dark text, clear label, visible hover/focus state, and an understandable action. Avoid glow as the only state indicator.

### Secondary CTA

Transparent or dark surface with a subtle border and high-contrast text. Keep a distinct focus state.

### Service cards

Service number, title, short copy, relevant image/visual, and a clear service link. Use image crop transitions and subtle depth rather than excessive 3D tilting.

### Portfolio cards

Strong imagery first, followed by project title and category. Hover effects should not hide essential information. Mobile must provide the equivalent information without hover.

### Accordion

Semantic button controls, clear expanded state, keyboard support, and simple transitions.

### Forms

Visible labels, helpful instructions, clear validation, pending state, success state only when confirmed by the server, and a useful error/retry state.

## 9. Motion principles

Motion should reinforce hierarchy, spatial depth, or storytelling. Use CSS for simple hover/focus transitions and GSAP for complex sequenced scroll timelines. Keep the main 3D timeline coherent and avoid competing pinned sections.

Preferred motion:

- Short, controlled section reveals.
- Masked image reveals.
- Slight image scaling on hover.
- Smooth navigation background transition.
- A single camera choreography for the hero environment.
- A restrained scroll-progress marker if it does not distract.

Avoid:

- Constant movement in every section.
- Text that becomes unreadable while moving.
- Scroll hijacking.
- Long intro gates before the page can be used.
- Excessive post-processing and particles.
- Unnecessary loading screens.

Respect `prefers-reduced-motion`. Core content and navigation must work without animation or WebGL.

## 10. Responsive expectations

- Desktop: expansive editorial layouts and rich but controlled 3D.
- Tablet: adjusted composition, smaller scene detail, less expensive rendering.
- Mobile: single-column layouts, concise text, touch-friendly targets, compact navigation, reduced 3D cost, and no hover-only information.

Always test the real rendered result at mobile dimensions. Responsive design is not simply shrinking desktop content.
