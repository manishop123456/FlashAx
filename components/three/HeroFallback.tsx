"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { prefersReducedMotion } from "@/lib/webgl";

export function HeroFallback() {
  const [shouldAnimateFlash, setShouldAnimateFlash] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = setTimeout(() => {
      setShouldAnimateFlash(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero hero--fallback" aria-labelledby="hero-title-fallback">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__radial" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__content">
          <h1 id="hero-title-fallback" className="sr-only">
            FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success
          </h1>

          <div className={`hero__brand ${shouldAnimateFlash ? "hero__brand--flash" : ""}`}>
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

          <p className="hero__descriptor">
            <span>EVENTS</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>EXPERIENCES</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>BRAND SOLUTIONS</span>
          </p>

          <div className="hero__actions">
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              LET&apos;S BUILD SOMETHING
            </ButtonLink>
            <ButtonLink href="#who-we-are" variant="secondary" icon="down">
              EXPLORE OUR WORLD
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}