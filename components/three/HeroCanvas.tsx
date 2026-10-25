"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/Button";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { prefersReducedMotion } from "@/lib/webgl";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const brandEntranceRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const sparkRef = useRef<HTMLDivElement>(null);
  const xFlareRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLParagraphElement>(null);
  const primaryCtaRef = useRef<HTMLDivElement>(null);
  const secondaryCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = prefersReducedMotion();

    // GSAP Context ensures clean teardown of all tweens and timelines
    const ctx = gsap.context(() => {
      if (isReduced) {
        // Instant presentation for users with reduced motion preferences
        gsap.set(
          [
            brandEntranceRef.current,
            descriptorRef.current,
            primaryCtaRef.current,
            secondaryCtaRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            clearProps: "opacity,transform",
          }
        );
        return;
      }

      // Initial resting state before entrance
      gsap.set(brandEntranceRef.current, { opacity: 0, y: 70 });
      gsap.set(sparkRef.current, {
        opacity: 0,
        scale: 0.3,
        left: "5%",
        top: "70%",
      });
      gsap.set(xFlareRef.current, { opacity: 0, scale: 0.2 });
      gsap.set(descriptorRef.current, { opacity: 0, y: 24 });
      gsap.set(primaryCtaRef.current, { opacity: 0, y: 20 });
      gsap.set(secondaryCtaRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Logo rises smoothly from below (duration 1.25s, 70px vertical offset)
      tl.to(
        brandEntranceRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        0.1
      );

      // 2. Golden spark travels up the curve of the feather
      tl.to(
        sparkRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.18,
          ease: "power2.out",
        },
        0.35
      );

      tl.to(
        sparkRef.current,
        {
          left: "9.5%",
          top: "44%",
          duration: 0.35,
          ease: "power1.inOut",
        },
        0.48
      );

      tl.to(
        sparkRef.current,
        {
          left: "18%",
          top: "22%",
          duration: 0.35,
          ease: "power2.out",
        },
        0.83
      );

      tl.to(
        sparkRef.current,
        {
          opacity: 0,
          scale: 1.3,
          duration: 0.22,
          ease: "power2.in",
        },
        1.15
      );

      // 3. Optical flare briefly illuminates the X symbol
      tl.fromTo(
        xFlareRef.current,
        { opacity: 0, scale: 0.2 },
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(2)",
        },
        1.2
      );

      tl.to(
        xFlareRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.35,
          ease: "power2.in",
        },
        1.5
      );

      // 4. Tagline pill fades in and rises upward slightly
      tl.to(
        descriptorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        1.6
      );

      // 5. Primary CTA button ("GET A PROPOSAL") fades in after tagline
      tl.to(
        primaryCtaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        1.85
      );

      // 6. Secondary CTA button ("EXPLORE SERVICES") appears with slight stagger
      tl.to(
        secondaryCtaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
        2.02
      );
    }, heroRef);

    // Desktop interactive 3D perspective tilt on the inner brand element
    if (!isReduced) {
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let animId: number;

      const onPointerMove = (e: PointerEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const normX = (e.clientX - centerX) / centerX;
        const normY = (e.clientY - centerY) / centerY;

        targetRotY = normX * 2.5;
        targetRotX = -normY * 2.0;
      };

      const onPointerLeave = () => {
        targetRotX = 0;
        targetRotY = 0;
      };

      const updateLoop = () => {
        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;

        if (brandRef.current) {
          brandRef.current.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
        }

        if (haloRef.current) {
          const shiftX = (currentRotY * 3.5).toFixed(1);
          const shiftY = (-currentRotX * 3.5).toFixed(1);
          haloRef.current.style.transform = `translate(calc(-50% + ${shiftX}px), calc(-50% + ${shiftY}px)) scale(1.02)`;
        }

        animId = requestAnimationFrame(updateLoop);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave, { passive: true });
      animId = requestAnimationFrame(updateLoop);

      return () => {
        ctx.revert();
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", onPointerLeave);
        cancelAnimationFrame(animId);
      };
    }

    return () => ctx.revert();
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

          {/* Official Brand Logo with Coordinated Rise Entrance & 3D Depth */}
          <div ref={brandEntranceRef} className="hero__brand-entrance">
            <div ref={brandRef} className="hero__brand">
              <div ref={haloRef} className="hero__brand-halo" aria-hidden="true" />
              <Image
                src="/brand/flashax-logo-transparent.png"
                alt="FLASHAX EVENT SOLUTIONS — Where Engagement Sparks Success"
                width={1024}
                height={342}
                priority
                unoptimized
                className="hero__brand-img"
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 86vw, (max-width: 1440px) 76vw, 1260px"
              />

              {/* Coordinated Visual Reveal Effects */}
              <div className="hero__brand-effects" aria-hidden="true">
                {/* Golden Feather Spark travelling up the spine */}
                <div ref={sparkRef} className="hero__feather-spark">
                  <div className="hero__feather-spark-core" />
                  <div className="hero__feather-spark-glow" />
                </div>

                {/* Optical Star Burst Illuminating the X symbol */}
                <div ref={xFlareRef} className="hero__x-flare">
                  <div className="hero__x-flare-core" />
                  <div className="hero__x-flare-rays" />
                  <div className="hero__x-flare-rays hero__x-flare-rays--vertical" />
                  <div className="hero__x-flare-rays hero__x-flare-rays--cross1" />
                  <div className="hero__x-flare-rays hero__x-flare-rays--cross2" />
                </div>
              </div>
            </div>
          </div>

          {/* Small Service Descriptor (Gold Accent #F7B721, Clean Spacing) */}
          <p ref={descriptorRef} className="hero__descriptor">
            <span>EVENTS</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>EXPERIENCES</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>BRAND SOLUTIONS</span>
          </p>

          {/* Primary & Secondary Calls to Action */}
          <div className="hero__actions">
            <div ref={primaryCtaRef} className="hero__action-item hero__action-item--primary">
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                GET A PROPOSAL
              </ButtonLink>
            </div>
            <div ref={secondaryCtaRef} className="hero__action-item hero__action-item--secondary">
              <ButtonLink href="#services" variant="secondary" icon="down">
                EXPLORE SERVICES
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export HeroContent alias for compatibility with app/page.tsx
export const HeroContent = Hero;