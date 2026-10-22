"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { canUseWebGL, prefersReducedMotion } from "@/lib/webgl";
import {
  StageEnvironment,
  QUALITY_HIGH,
  QUALITY_LOW,
  type StageParams,
} from "@/components/three/StageEnvironment";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CHAPTERS = [
  {
    key: "imagine",
    label: "IMAGINE",
    quote: "Every great experience begins with a vision.",
    params: {
      wall: 0.35,
      beams: 0,
      truss: 0.2,
      crowd: 0,
      sparks: 0.3,
      glow: 0.1,
      fog: 0.024,
      warm: 0,
      shift: 0,
      scroll: 0,
      zoom: 1.15,
      cam: [0, 5, 26] as [number, number, number],
      look: [0, 3.5, 0] as [number, number, number],
    },
  },
  {
    key: "design",
    label: "DESIGN",
    quote: "We turn ideas into creative concepts and engaging environments.",
    params: {
      wall: 0.7,
      beams: 0.45,
      truss: 1,
      crowd: 0,
      sparks: 0.6,
      glow: 0.5,
      fog: 0.018,
      warm: 0.25,
      shift: 0,
      scroll: 0,
      zoom: 1,
      cam: [-3, 4.2, 22] as [number, number, number],
      look: [0, 3.5, 0] as [number, number, number],
    },
  },
  {
    key: "produce",
    label: "PRODUCE",
    quote: "Planning, resources and coordination bring the concept together.",
    params: {
      wall: 1,
      beams: 1.1,
      truss: 1,
      crowd: 0.35,
      sparks: 0.85,
      glow: 0.9,
      fog: 0.015,
      warm: 0.5,
      shift: 0,
      scroll: 0,
      zoom: 0.92,
      cam: [3.5, 3.8, 19] as [number, number, number],
      look: [0, 3, 0] as [number, number, number],
    },
  },
  {
    key: "experience",
    label: "EXPERIENCE",
    quote: "The final experience brings people together.",
    params: {
      wall: 1.25,
      beams: 1.35,
      truss: 1,
      crowd: 1,
      sparks: 1,
      glow: 1,
      fog: 0.012,
      warm: 0.75,
      shift: 0,
      scroll: 0,
      zoom: 0.86,
      cam: [0, 3.2, 17] as [number, number, number],
      look: [0, 3.4, 0] as [number, number, number],
    },
  },
] as const;

export function ExperienceShowcase() {
  const [canLive, setCanLive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const paramsRef = useRef<StageParams>({ ...CHAPTERS[0].params });

  useEffect(() => {
    const webgl = canUseWebGL();
    const reduced = prefersReducedMotion();
    setCanLive(webgl && !reduced);

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP scroll driven camera transitions between the 4 chapters
  useEffect(() => {
    if (!canLive || !trackRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress; // 0..1
          const seg = progress * (CHAPTERS.length - 1);
          const i0 = Math.min(Math.floor(seg), CHAPTERS.length - 2);
          const i1 = i0 + 1;
          const blend = seg - i0;

          // update chapter indicator
          const currentChapter = Math.round(seg);
          setActiveIdx(currentChapter);

          const c0 = CHAPTERS[i0].params;
          const c1 = CHAPTERS[i1].params;
          const p = paramsRef.current;

          // lerp all parameters smoothly
          p.wall = THREE.MathUtils.lerp(c0.wall, c1.wall, blend);
          p.beams = THREE.MathUtils.lerp(c0.beams, c1.beams, blend);
          p.truss = THREE.MathUtils.lerp(c0.truss, c1.truss, blend);
          p.crowd = THREE.MathUtils.lerp(c0.crowd, c1.crowd, blend);
          p.sparks = THREE.MathUtils.lerp(c0.sparks, c1.sparks, blend);
          p.glow = THREE.MathUtils.lerp(c0.glow, c1.glow, blend);
          p.fog = THREE.MathUtils.lerp(c0.fog, c1.fog, blend);
          p.warm = THREE.MathUtils.lerp(c0.warm, c1.warm, blend);
          p.zoom = THREE.MathUtils.lerp(c0.zoom, c1.zoom, blend);

          p.cam = [
            THREE.MathUtils.lerp(c0.cam[0], c1.cam[0], blend),
            THREE.MathUtils.lerp(c0.cam[1], c1.cam[1], blend),
            THREE.MathUtils.lerp(c0.cam[2], c1.cam[2], blend),
          ];
          p.look = [
            THREE.MathUtils.lerp(c0.look[0], c1.look[0], blend),
            THREE.MathUtils.lerp(c0.look[1], c1.look[1], blend),
            THREE.MathUtils.lerp(c0.look[2], c1.look[2], blend),
          ];
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [canLive]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`showcase ${canLive ? "showcase--live" : ""}`}
      aria-labelledby="experience-title"
    >
      <div className="wrap showcase__head">
        <SectionHeading
          id="experience-title"
          eyebrow="THE FLASHAX EXPERIENCE"
          align="center"
          lines={["FROM THE FIRST IDEA", "TO THE FINAL MOMENT."]}
          lead="Our four-chapter journey transforms vision into reality. Scroll to experience each phase."
        />
      </div>

      <div ref={trackRef} className="showcase__track">
        <div className="showcase__sticky">
          <div className="showcase__poster" />
          {canLive && (
            <div className="showcase__canvas">
              <Canvas
                camera={{ position: CHAPTERS[0].params.cam, fov: 45 }}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
                onCreated={({ gl }) => {
                  gl.outputColorSpace = THREE.SRGBColorSpace;
                  gl.toneMapping = THREE.ACESFilmicToneMapping;
                  gl.toneMappingExposure = 1.2;
                }}
              >
                <StageEnvironment
                  params={paramsRef}
                  quality={isMobile ? QUALITY_LOW : QUALITY_HIGH}
                  parallax={false}
                  animate={true}
                />
              </Canvas>
            </div>
          )}
          <div className="showcase__shade" />

          <div className="wrap showcase__ui">
            <div className="chapters" role="list">
              {CHAPTERS.map((ch, i) => (
                <div
                  key={ch.key}
                  className={`chapter ${canLive && activeIdx === i ? "is-active" : ""}`}
                  role="listitem"
                >
                  <span className="chapter__index">
                    CHAPTER {String(i + 1).padStart(2, "0")} — {ch.label}
                  </span>
                  <h3 className="chapter__title">{ch.label}</h3>
                  <p className="chapter__text">&ldquo;{ch.quote}&rdquo;</p>
                </div>
              ))}
            </div>

            {canLive && (
              <div className="rail" role="tablist" aria-label="Experience chapters">
                {CHAPTERS.map((ch, i) => (
                  <button
                    key={ch.key}
                    type="button"
                    role="tab"
                    className="rail__btn"
                    aria-selected={activeIdx === i}
                    aria-current={activeIdx === i ? "true" : undefined}
                    onClick={() => {
                      if (!trackRef.current) return;
                      const rect = trackRef.current.getBoundingClientRect();
                      const scrollTop = window.scrollY || document.documentElement.scrollTop;
                      const trackTop = rect.top + scrollTop;
                      const step = (rect.height - window.innerHeight) / (CHAPTERS.length - 1);
                      window.scrollTo({ top: trackTop + step * i, behavior: "smooth" });
                    }}
                  >
                    <span>{ch.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}