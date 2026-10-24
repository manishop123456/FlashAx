"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/webgl";

export function LogoLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);
  const radialGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on home page on first visit in the current session
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("flashax_intro_shown");
    const isHome = window.location.pathname === "/";
    const reduced = prefersReducedMotion();

    if (alreadyShown || !isHome || reduced) {
      // Mark as shown so internal navigations don't replay
      sessionStorage.setItem("flashax_intro_shown", "1");
      document.documentElement.classList.remove("intro-pending");
      const heroBrand = document.querySelector(".hero__brand") as HTMLElement | null;
      if (heroBrand) heroBrand.style.opacity = "1";
      return;
    }

    // Scroll to top to ensure accurate hero position measurement
    window.scrollTo(0, 0);
    setShouldRender(true);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const overlay = overlayRef.current;
    const logoWrapper = logoWrapperRef.current;
    const lightSweep = lightSweepRef.current;
    const radialGlow = radialGlowRef.current;

    if (!overlay || !logoWrapper) return;

    // Initially hide the real hero brand so there is no duplicate during intro
    const heroBrand = document.querySelector(".hero__brand") as HTMLElement | null;
    const heroImg = document.querySelector(".hero__brand-img") as HTMLElement | null;
    if (heroBrand) {
      heroBrand.style.opacity = "0";
      heroBrand.style.transition = "none";
    }

    // Lock body scroll during the brief intro
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // Match cut complete: reveal real hero logo and cleanup loader
        document.documentElement.classList.remove("intro-pending");
        if (heroBrand) {
          heroBrand.style.opacity = "1";
          heroBrand.style.transition = "";
        }
        document.body.style.overflow = prevOverflow;
        sessionStorage.setItem("flashax_intro_shown", "1");
        setShouldRender(false);
      },
    });

    // 1. Initial State
    gsap.set(logoWrapper, {
      opacity: 0,
      scale: 0.94,
      filter: "blur(8px)",
      transformOrigin: "center center",
    });

    if (radialGlow) {
      gsap.set(radialGlow, { opacity: 0, scale: 0.85 });
    }

    if (lightSweep) {
      gsap.set(lightSweep, { xPercent: -140, opacity: 0 });
    }

    // 2. Logo Entrance Reveal (0 to 650ms)
    tl.to(
      logoWrapper,
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.65,
        ease: "power2.out",
      },
      0.08
    );

    if (radialGlow) {
      tl.to(
        radialGlow,
        {
          opacity: 0.8,
          scale: 1.08,
          duration: 0.75,
          ease: "power2.out",
        },
        0.08
      );
    }

    // 3. Cinematic Light Sweep across the logo (350ms to 950ms)
    if (lightSweep) {
      tl.to(
        lightSweep,
        {
          xPercent: 220,
          opacity: 0.85,
          duration: 0.7,
          ease: "power2.inOut",
        },
        0.32
      );
    }

    // 4. THE MATCH CUT: Measure and physically glide into the Hero Logo
    tl.add(() => {
      const targetEl = heroImg || heroBrand;
      const loaderImg = logoWrapper.querySelector(".logo-loader__img") as HTMLElement | null;
      const sourceEl = loaderImg || logoWrapper;

      if (!targetEl || !sourceEl) return;

      const heroRect = targetEl.getBoundingClientRect();
      const loaderRect = sourceEl.getBoundingClientRect();

      // Calculate exact translation deltas to match hero position
      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;
      const loaderCenterX = loaderRect.left + loaderRect.width / 2;
      const loaderCenterY = loaderRect.top + loaderRect.height / 2;

      const deltaX = heroCenterX - loaderCenterX;
      const deltaY = heroCenterY - loaderCenterY;
      const scaleRatio = heroRect.width / (loaderRect.width || 1);

      // Smooth FLIP animation into the hero position
      gsap.to(logoWrapper, {
        x: deltaX,
        y: deltaY,
        scale: scaleRatio,
        duration: 0.74,
        ease: "power3.inOut",
      });

      // Fade out loader background revealing the real hero content underneath
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.68,
        ease: "power2.inOut",
      });
    }, "+=0.22");

    // Hold duration for match cut to finish smoothly
    tl.to({}, { duration: 0.76 });

    return () => {
      tl.kill();
      document.documentElement.classList.remove("intro-pending");
      document.body.style.overflow = prevOverflow;
      if (heroBrand) {
        heroBrand.style.opacity = "1";
        heroBrand.style.transition = "";
      }
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div ref={overlayRef} className="logo-loader-overlay" aria-hidden="true">
      {/* Ambient background glow */}
      <div ref={radialGlowRef} className="logo-loader__radial" />

      {/* Centered Logo Match-Cut Actor */}
      <div ref={logoWrapperRef} className="logo-loader__actor">
        <div className="logo-loader__img-frame">
          <Image
            src="/brand/flashax-logo-transparent.png"
            alt="FLASHAX EVENT SOLUTIONS"
            width={1024}
            height={261}
            priority
            unoptimized
            className="logo-loader__img"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 680px"
          />
          {/* Luminous optical light sweep overlay */}
          <div ref={lightSweepRef} className="logo-loader__sweep" />
        </div>
      </div>
    </div>
  );
}
