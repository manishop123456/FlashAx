"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";
import type { TransitionMode, TransitionStatus } from "@/lib/transitions";

interface SparkWipeOverlayProps {
  status: TransitionStatus;
  mode: TransitionMode;
}

export function SparkWipeOverlay({ status, mode }: SparkWipeOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const serviceVeilRef = useRef<HTMLDivElement>(null);
  const logoAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === "reduced" || mode === "none") return;

    if (status === "wiping_in") {
      // 1. Reveal Shared Logo Anchor for continuous stability
      if (logoAnchorRef.current) {
        gsap.to(logoAnchorRef.current, {
          opacity: 1,
          duration: 0.14,
          ease: "power2.out",
        });
      }

      if (mode === "major" && curtainRef.current) {
        // Major curtain sweep from left across viewport
        gsap.killTweensOf(curtainRef.current);
        gsap.fromTo(
          curtainRef.current,
          { xPercent: -101 },
          {
            xPercent: 0,
            duration: 0.32,
            ease: "power3.inOut",
          }
        );
      } else if (mode === "service" && serviceVeilRef.current) {
        // Lighter directional veil for individual services
        gsap.killTweensOf(serviceVeilRef.current);
        gsap.fromTo(
          serviceVeilRef.current,
          { xPercent: -101 },
          {
            xPercent: 0,
            duration: 0.22,
            ease: "power2.out",
          }
        );
      }
    } else if (status === "wiping_out") {
      if (mode === "major" && curtainRef.current) {
        // Sweep curtain off to the right revealing destination page
        gsap.killTweensOf(curtainRef.current);
        gsap.fromTo(
          curtainRef.current,
          { xPercent: 0 },
          {
            xPercent: 101,
            duration: 0.36,
            ease: "power3.out",
            onComplete: () => {
              if (curtainRef.current) {
                gsap.set(curtainRef.current, { xPercent: -101 });
              }
            },
          }
        );
      } else if (mode === "service" && serviceVeilRef.current) {
        // Slide service veil off to the right
        gsap.killTweensOf(serviceVeilRef.current);
        gsap.fromTo(
          serviceVeilRef.current,
          { xPercent: 0 },
          {
            xPercent: 101,
            duration: 0.22,
            ease: "power2.inOut",
            onComplete: () => {
              if (serviceVeilRef.current) {
                gsap.set(serviceVeilRef.current, { xPercent: -101 });
              }
            },
          }
        );
      }

      // Hide Shared Logo Anchor once destination page is taking over
      if (logoAnchorRef.current) {
        gsap.to(logoAnchorRef.current, {
          opacity: 0,
          duration: 0.2,
          delay: 0.15,
          ease: "power2.in",
        });
      }
    }
  }, [status, mode]);

  const isBlocking = status === "wiping_in" || status === "covered";

  return (
    <>
      {/* Shared Logo Anchor (Requirement 5) */}
      <div
        ref={logoAnchorRef}
        className="shared-logo-anchor"
        aria-hidden="true"
      >
        <div className="shared-logo-anchor__wrap">
          <div className="shared-logo-anchor__logo">
            <Logo priority className="shared-logo-anchor__logo-img" sizes="172px" />
          </div>
        </div>
      </div>

      {/* Main Transition Overlays */}
      <div
        ref={containerRef}
        className={`spark-wipe-container ${isBlocking ? "spark-wipe-container--blocking" : ""}`}
        aria-hidden="true"
      >
        {/* Full Cinematic Curtain Wipe */}
        <div ref={curtainRef} className="spark-curtain">
          <div className="spark-curtain__edge" />
        </div>

        {/* Lighter Directional Service Veil */}
        <div ref={serviceVeilRef} className="spark-service-veil" />
      </div>
    </>
  );
}
