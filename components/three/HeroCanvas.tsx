"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { prefersReducedMotion } from "@/lib/webgl";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      // Gentle depth perspective: max 2.5 degrees tilt
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      targetRotY = normX * 2.8;
      targetRotX = -normY * 2.2;
    };

    const onPointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    const updateLoop = () => {
      // Smooth lerp damping
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      if (brandRef.current) {
        brandRef.current.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }

      if (haloRef.current) {
        const shiftX = (currentRotY * 4).toFixed(1);
        const shiftY = (-currentRotX * 4).toFixed(1);
        haloRef.current.style.transform = `translate(calc(-50% + ${shiftX}px), calc(-50% + ${shiftY}px)) scale(1.02)`;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
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

          {/* Official Brand Logo with Subtle 3D Perspective Depth */}
          <div ref={brandRef} className="hero__brand">
            <div ref={haloRef} className="hero__brand-halo" aria-hidden="true" />
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