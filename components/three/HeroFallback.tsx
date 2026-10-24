"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function HeroFallback() {
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

          <div className="hero__brand">
            <div className="hero__brand-halo" aria-hidden="true" />
            <Image
              src="/brand/flashax-logo-transparent.png"
              alt="FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success"
              width={1024}
              height={261}
              priority
              unoptimized
              className="hero__brand-img"
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 86vw, (max-width: 1440px) 76vw, 1260px"
            />
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