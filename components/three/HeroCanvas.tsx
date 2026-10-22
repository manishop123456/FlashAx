"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/Button";
import { canUseWebGL, prefersReducedMotion } from "@/lib/webgl";
import {
  StageEnvironment,
  HERO_PARAMS,
  QUALITY_HIGH,
  QUALITY_LOW,
  type StageParams,
} from "./StageEnvironment";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [ready3D, setReady3D] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const paramsRef = useRef<StageParams>({ ...HERO_PARAMS });
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const webgl = canUseWebGL();
    const reduced = prefersReducedMotion();
    setCanRender3D(webgl && !reduced);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hero load animation sequence:
  // 1. Reveal stage environment & ambient lighting
  // 2. Illuminate golden spotlights
  // 3. Reveal FLASHAX brand identity
  // 4. Introduce tagline
  // 5. Reveal supporting service label
  // 6. Reveal CTAs
  useEffect(() => {
    const reduced = prefersReducedMotion();
    if (reduced || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stage ambient lighting & spotlights ramp
      tl.fromTo(
        paramsRef.current,
        { wall: 0.15, beams: 0, sparks: 0.2 },
        { wall: 1, beams: 1.15, sparks: 0.95, duration: 1.0 },
        0
      );

      // Oversized brand identity reveal
      if (brandRef.current) {
        tl.fromTo(
          brandRef.current,
          { opacity: 0, scale: 0.92, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85 },
          0.25
        );
      }

      // Tagline reveal
      if (taglineRef.current) {
        tl.fromTo(
          taglineRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          0.55
        );
      }

      // Supporting label reveal
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.75
        );
      }

      // Action buttons entrance
      if (actionsRef.current) {
        tl.fromTo(
          actionsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.95
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // GSAP scroll trigger: subtle camera dolly and gentle fade into Section 2
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
        onUpdate: (self) => {
          if (canRender3D) {
            paramsRef.current.scroll = self.progress;
          }
          if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(0, ${self.progress * 40}px, 0)`;
            contentRef.current.style.opacity = `${Math.max(0, 1 - self.progress * 1.35)}`;
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [canRender3D]);

  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
      {/* Cinematic 3D Stage Background */}
      <div className="hero__stage" aria-hidden="true">
        <div className="stage-poster" />
        {canRender3D && (
          <div className={`stage-canvas ${ready3D ? "is-ready" : ""}`}>
            <Canvas
              camera={{ position: HERO_PARAMS.cam, fov: 45 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              onCreated={({ gl }) => {
                gl.outputColorSpace = THREE.SRGBColorSpace;
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1.15;
                setReady3D(true);
              }}
            >
              <StageEnvironment
                params={paramsRef}
                quality={isMobile ? QUALITY_LOW : QUALITY_HIGH}
                parallax={!isMobile}
                animate={true}
              />
            </Canvas>
          </div>
        )}
      </div>

      {/* Hero Foreground Content: Dominant Brand Centerpiece */}
      <div className="wrap hero__inner">
        <div ref={contentRef} className="hero__content">
          {/* Oversized FLASHAX Brand Identity */}
          <div ref={brandRef} className="hero__brand">
            <Image
              src="/brand/flashax-logo-transparent.png"
              alt="FLASHAX"
              width={816}
              height={230}
              priority
              quality={100}
              className="hero__brand-img"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 84vw, 860px"
            />
          </div>

          {/* Tagline */}
          <h1 id="hero-title" ref={taglineRef} className="hero__tagline">
            WHERE ENGAGEMENT SPARKS SUCCESS
          </h1>

          {/* Supporting Service Category Label */}
          <p ref={badgeRef} className="hero__subtag">
            <span>EVENTS</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>EXPERIENCES</span>
            <span className="hero__dot" aria-hidden="true">•</span>
            <span>BRAND SOLUTIONS</span>
          </p>

          {/* Primary & Secondary Calls to Action */}
          <div ref={actionsRef} className="hero__actions">
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              LET&apos;S BUILD SOMETHING
            </ButtonLink>
            <ButtonLink href="#who-we-are" variant="secondary" icon="down">
              EXPLORE OUR WORLD
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export HeroContent alias for compatibility with app/page.tsx
export const HeroContent = Hero;