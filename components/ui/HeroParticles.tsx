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

    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    if (!reduced) {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
      window.addEventListener("mouseleave", onPointerLeave, { passive: true });
    }

    // Determine particle count based on screen width for clean visual density
    const count = width < 768 ? 28 : width < 1200 ? 42 : 55;
    const dots: Dot[] = [];

    for (let i = 0; i < count; i++) {
      // 50% purple, 35% magenta, 15% gold
      const rand = Math.random();
      const colorPrefix = rand < 0.5 ? COLORS[0] : rand < 0.85 ? COLORS[1] : COLORS[2];

      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.1 + Math.random() * 1.5, // small, elegant particle sizes
        color: colorPrefix,
        vx: (Math.random() - 0.5) * 0.18, // restrained movement
        vy: -0.1 - Math.random() * 0.16, // gentle upward drift
        alpha: 0.22 + Math.random() * 0.42,
        alphaSpeed: 0.007 + Math.random() * 0.012,
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

          // Subtle cursor interaction: gentle deflection when cursor nears particle
          if (mouseX > -500) {
            const dx = d.x - mouseX;
            const dy = d.y - mouseY;
            const dist = Math.hypot(dx, dy);
            if (dist < 90 && dist > 1) {
              const force = (1 - dist / 90) * 0.35;
              d.x += (dx / dist) * force;
              d.y += (dy / dist) * force;
            }
          }

          // Wrap boundaries smoothly
          if (d.y < -10) d.y = height + 10;
          if (d.y > height + 10) d.y = -10;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
        }

        // Subtle opacity twinkle
        const currentAlpha = Math.max(0.12, Math.min(0.72, d.alpha + Math.sin(d.phase) * 0.16));

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
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />;
}
