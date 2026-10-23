import { useId } from "react";

/**
 * Abstract service artwork — an honest, consistent visual language used in place of
 * photography. It illustrates a *kind* of work and does not depict real Flashax projects.
 */
const GOLD = "#F7B721";
const IVORY = "#F2F4E8";
const MAG = "#F609CF";

function Motif({ slug }: { slug: string }) {
  const line = { fill: "none", stroke: GOLD, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const soft = { fill: "none", stroke: IVORY, strokeOpacity: 0.35, strokeWidth: 1 } as const;

  switch (slug) {
    case "event-management": // stage with gantry and beams
      return (
        <g>
          <path d="M70 250h340M90 250V120M390 250V120M90 120h300" {...line} />
          <rect x="130" y="222" width="220" height="28" {...line} />
          {[150, 200, 250, 300, 340].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="128" r="5" fill={GOLD} />
              <path d={`M${x} 133 L${x + (i - 2) * 38} 222 L${x + (i - 2) * 38 + 36} 222 Z`} fill={GOLD} opacity="0.12" />
            </g>
          ))}
          <path d="M130 172h220M130 190h220" {...soft} />
        </g>
      );
    case "event-production":
    case "production-operations":
    case "exhibitions": // truss, lighting rigs + stage structure
      return (
        <g>
          <path d="M60 100h360M60 130h360" {...line} />
          {Array.from({ length: 15 }).map((_, i) => (
            <path key={i} d={`M${60 + i * 25} ${i % 2 ? 130 : 100} l25 ${i % 2 ? -30 : 30}`} {...soft} />
          ))}
          {[110, 190, 270, 350].map((x) => (
            <g key={x}>
              <rect x={x - 11} y="130" width="22" height="26" rx="4" fill={GOLD} opacity="0.85" />
              <path d={`M${x - 8} 156 L${x - 34} 252 L${x + 34} 252 L${x + 8} 156 Z`} fill={GOLD} opacity="0.12" />
            </g>
          ))}
          <path d="M60 252h360" {...line} />
          <rect x="160" y="190" width="160" height="62" rx="4" {...soft} />
          <path d="M180 216h120M180 230h80" {...soft} />
        </g>
      );
    case "brand-activation": // ripple burst
      return (
        <g>
          {[28, 58, 92, 130].map((r, i) => (
            <circle key={r} cx="240" cy="168" r={r} {...line} opacity={0.9 - i * 0.2} />
          ))}
          <circle cx="240" cy="168" r="10" fill={GOLD} />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <path
                key={i}
                d={`M${240 + Math.cos(a) * 146} ${168 + Math.sin(a) * 146} L${240 + Math.cos(a) * 168} ${168 + Math.sin(a) * 168}`}
                {...soft}
              />
            );
          })}
        </g>
      );
    case "campus-marketing":
    case "campus-connect": // amphitheatre arcs + pennant
      return (
        <g>
          {[70, 110, 150, 190].map((r, i) => (
            <path key={r} d={`M${240 - r} 262 A${r} ${r * 0.62} 0 0 1 ${240 + r} 262`} {...line} opacity={1 - i * 0.18} />
          ))}
          <path d="M240 262V84" {...line} />
          <path d="M240 90l62 20-62 22z" fill={GOLD} opacity="0.9" />
          <path d="M100 262h280" {...line} />
        </g>
      );
    case "digital-marketing":
    case "digital-creative": // layered screens + play
      return (
        <g>
          <rect x="120" y="86" width="240" height="150" rx="10" {...line} />
          <rect x="146" y="112" width="240" height="150" rx="10" {...soft} />
          <rect x="94" y="64" width="240" height="150" rx="10" {...soft} />
          <path d="M226 138l50 25-50 25z" fill={GOLD} />
          <path d="M140 250h200" {...soft} />
          <circle cx="388" cy="92" r="6" fill={MAG} opacity="0.85" />
        </g>
      );
    case "corporate-gifting": // premium gift box with ribbon and spark
      return (
        <g>
          <path d="M110 255h260" {...soft} />
          <rect x="150" y="145" width="180" height="105" rx="6" {...line} />
          <rect x="138" y="126" width="204" height="24" rx="4" fill={GOLD} fillOpacity={0.2} stroke={GOLD} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="228" y="126" width="24" height="124" fill={GOLD} opacity="0.85" />
          <rect x="150" y="185" width="180" height="20" fill={GOLD} opacity="0.3" />
          <path
            d="M228 126 C210 94 170 94 190 126 Z M252 126 C270 94 310 94 290 126 Z"
            stroke={GOLD}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={GOLD}
            fillOpacity={0.4}
          />
          <circle cx="240" cy="124" r="8" fill={GOLD} />
          {/* Sparkles */}
          <path d="M116 100 L120 110 L130 114 L120 118 L116 128 L112 118 L102 114 L112 110 Z" fill={GOLD} opacity="0.9" />
          <path d="M366 94 L369 101 L376 104 L369 107 L366 114 L363 107 L356 104 L363 101 Z" fill={IVORY} opacity="0.75" />
          <circle cx="350" cy="226" r="4" fill={MAG} opacity="0.85" />
          <circle cx="128" cy="214" r="3.5" fill={GOLD} opacity="0.6" />
        </g>
      );
    case "csr-programs":
    case "csr-education": // growing sprout over open book
      return (
        <g>
          <path d="M120 250c40-14 80-14 120 0 40-14 80-14 120 0V190c-40-14-80-14-120 0-40-14-80-14-120 0z" {...line} />
          <path d="M240 190v-88" {...line} />
          <path d="M240 150c-6-30-34-40-62-34 4 30 30 44 62 34zM240 124c8-28 36-38 62-30-6 28-32 40-62 30z" {...line} fill={GOLD} fillOpacity="0.18" />
          <circle cx="240" cy="94" r="6" fill={GOLD} />
        </g>
      );
    default:
      return null;
  }
}

export function ServiceVisual({ slug, className = "visual" }: { slug: string; className?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      className={className}
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#521262" />
          <stop offset="0.6" stopColor="#2C1236" />
          <stop offset="1" stopColor="#17091D" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`} cx="0.5" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#F7B721" stopOpacity="0.28" />
          <stop offset="1" stopColor="#F7B721" stopOpacity="0" />
        </radialGradient>
        <pattern id={`dots-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#F2F4E8" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="480" height="320" fill={`url(#bg-${uid})`} />
      <rect width="480" height="320" fill={`url(#dots-${uid})`} />
      <rect width="480" height="320" fill={`url(#glow-${uid})`} />
      <Motif slug={slug} />
    </svg>
  );
}
