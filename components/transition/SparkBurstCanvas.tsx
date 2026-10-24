"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { prefersReducedMotion } from "@/lib/webgl";

export interface SparkBurstHandle {
  burst: (x: number, y: number, mode?: "major" | "service") => void;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
  isStar: boolean;
  rotation: number;
  rotSpeed: number;
  size: number;
}

const GOLD_PALETTE = [
  "#F7B721", // Flashax Primary Gold
  "#FFD05C", // Light Gold
  "#FFE699", // Warm Amber
  "#FFF6D6", // Shimmer Gold
];
const WHITE_HOT = "#FFFFFF";
const MAGENTA = "#F609CF"; // Flashax Feather Magenta

export const SparkBurstCanvas = forwardRef<SparkBurstHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SparkParticle[]>([]);
  const animIdRef = useRef<number | null>(null);

  useImperativeHandle(ref, () => ({
    burst(x: number, y: number, mode = "major") {
      if (prefersReducedMotion()) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const count = mode === "service" ? 12 : 28;
      const newParticles: SparkParticle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (mode === "service" ? 4.5 : 7.5) + 2.0;

        // Color selection
        const rand = Math.random();
        let color: string;
        if (rand < 0.65) {
          color = GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)];
        } else if (rand < 0.85) {
          color = WHITE_HOT;
        } else {
          color = MAGENTA;
        }

        const isStar = Math.random() < 0.3;

        newParticles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2, // slight upward bias
          radius: 1.2 + Math.random() * 1.8,
          size: 3 + Math.random() * 4,
          color,
          alpha: 1,
          decay: 0.022 + Math.random() * 0.018,
          isStar,
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.25,
        });
      }

      particlesRef.current.push(...newParticles);

      // Start loop if not already running
      if (!animIdRef.current) {
        startAnimation();
      }
    },
  }));

  const drawStar = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    color: string,
    alpha: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;

    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.quadraticCurveTo(size * 0.15, -size * 0.15, size, 0);
    ctx.quadraticCurveTo(size * 0.15, size * 0.15, 0, size);
    ctx.quadraticCurveTo(-size * 0.15, size * 0.15, -size, 0);
    ctx.quadraticCurveTo(-size * 0.15, -size * 0.15, 0, -size);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.93; // friction
        p.vy *= 0.93;
        p.vy += 0.14; // gentle gravity
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isStar) {
          drawStar(ctx, p.x, p.y, p.size, p.rotation, p.color, p.alpha);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;

          if (p.alpha > 0.45) {
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 6;
          }
          ctx.fill();
          ctx.restore();
        }
      }

      if (particles.length > 0) {
        animIdRef.current = requestAnimationFrame(render);
      } else {
        animIdRef.current = null;
        ctx.clearRect(0, 0, width, height);
      }
    };

    animIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="spark-canvas-overlay" aria-hidden="true" />;
});

SparkBurstCanvas.displayName = "SparkBurstCanvas";
