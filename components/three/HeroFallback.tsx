"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function HeroFallback() {
  return (
    <div className="hero hero--fallback" aria-labelledby="hero-title-fallback">
      <div className="hero__stage" aria-hidden="true">
        <div className="stage-poster" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__content">
          <div className="hero__brand">
            <Image
              src="/brand/flashax-logo-transparent.png"
              alt="FLASHAX"
              width={816}
              height={230}
              priority
              className="hero__brand-img"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 84vw, 860px"
            />
          </div>

          <h1 id="hero-title-fallback" className="hero__tagline">
            WHERE ENGAGEMENT SPARKS SUCCESS
          </h1>

          <p className="hero__subtag">
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