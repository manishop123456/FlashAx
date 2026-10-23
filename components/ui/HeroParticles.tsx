"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/webgl";

interface Dot {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
  phase: number;
}

const COLORS = [
  "rgba(154, 43, 184,", // Flashax Purple
  "rgba(246, 9, 207,",  // Flashax Magenta
  "rgba(247, 183, 33,",  // Flashax Gold (occasional)
];

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const reduced = prefersReducedMotion();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Determine particle count based on screen width for clean visual density
    const count = width < 768 ? 30 : width < 1200 ? 45 : 60;
    const dots: Dot[] = [];

    for (let i = 0; i < count; i++) {
      // 50% purple, 35% magenta, 15% gold
      const rand = Math.random();
      const colorPrefix = rand < 0.5 ? COLORS[0] : rand < 0.85 ? COLORS[1] : COLORS[2];

      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 1.6, // small particle sizes
        color: colorPrefix,
        vx: (Math.random() - 0.5) * 0.22, // restrained movement
        vy: -0.12 - Math.random() * 0.18, // gentle upward drift
        alpha: 0.25 + Math.random() * 0.45,
        alphaSpeed: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        if (!reduced) {
          d.x += d.vx;
          d.y += d.vy;
          d.phase += d.alphaSpeed;

          // Wrap boundaries smoothly
          if (d.y < -10) d.y = height + 10;
          if (d.y > height + 10) d.y = -10;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
        }

        // Subtle opacity twinkle
        const currentAlpha = Math.max(0.12, Math.min(0.75, d.alpha + Math.sin(d.phase) * 0.18));

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${d.color} ${currentAlpha})`;
        ctx.fill();
      }

      if (!reduced) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />;
}
