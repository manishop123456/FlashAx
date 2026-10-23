"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { prefersReducedMotion } from "@/lib/webgl";

export function Hero() {
  const [shouldAnimateFlash, setShouldAnimateFlash] = useState(false);

  useEffect(() => {
    // Skip animation if reduced motion is requested
    if (prefersReducedMotion()) return;

    // Trigger cool white flash animation on initial opening or whenever refreshed
    const timer = setTimeout(() => {
      setShouldAnimateFlash(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Subtle Floating Particle Background (Purple, Magenta, Muted Gold) */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__radial" />
        <HeroParticles />
      </div>

      {/* Hero Foreground Content: Clean, Brand-Focused Section */}
      <div className="wrap hero__inner">
        <div className="hero__content">
          {/* Accessible Level-1 Heading for SEO & Screen Readers */}
          <h1 id="hero-title" className="sr-only">
            FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success
          </h1>

          {/* Oversized Official Brand Logo with Opening White Flash Reveal */}
          <div className={`hero__brand ${shouldAnimateFlash ? "hero__brand--flash" : ""}`}>
            {/* Transient ambient golden bloom behind the logo during reveal */}
            {shouldAnimateFlash && (
              <span className="hero__brand-glow" aria-hidden="true" />
            )}

            <Image
              src="/brand/flashax-logo-transparent.png"
              alt="FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success"
              width={1024}
              height={264}
              priority
              unoptimized
              className="hero__brand-img"
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 86vw, (max-width: 1440px) 76vw, 1260px"
            />

            {/* High-intensity White Flash Beam & Glint Sweeping Once Across the Logo */}
            {shouldAnimateFlash && (
              <span
                className="hero__brand-flash"
                aria-hidden="true"
                onAnimationEnd={() => setShouldAnimateFlash(false)}
              >
                <span className="hero__brand-beam" />
                <span className="hero__brand-sparkle" />
              </span>
            )}
          </div>

          {/* Small Service Descriptor (Gold Accent #F7B721, Clean Spacing) */}
          <p className="hero__descriptor">
            <span>EVENTS</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>EXPERIENCES</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>BRAND SOLUTIONS</span>
          </p>

          {/* Primary & Secondary Calls to Action */}
          <div className="hero__actions">
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              GET A PROPOSAL
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" icon="down">
              EXPLORE SERVICES
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export HeroContent alias for compatibility with app/page.tsx
export const HeroContent = Hero;