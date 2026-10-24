import { useId } from "react";
import Image from "next/image";

interface DivisionVisualProps {
  visualKey: string;
  title: string;
  divisionNumber?: string;
  serviceSlug: string;
  imageSrc?: string;
  className?: string;
}

const GOLD = "#F7B721";
const IVORY = "#F2F4E8";
const MAGENTA = "#F609CF";

function DivisionMotif({ visualKey }: { visualKey: string }) {
  const line = {
    fill: "none",
    stroke: GOLD,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const soft = {
    fill: "none",
    stroke: IVORY,
    strokeOpacity: 0.35,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const faint = {
    fill: "none",
    stroke: IVORY,
    strokeOpacity: 0.15,
    strokeWidth: 1,
  };

  switch (visualKey) {
    /* ---- 01. Event Management ---- */
    case "corporate-events":
      return (
        <g>
          {/* Executive conference stage & audience sightlines */}
          <rect x="140" y="240" width="320" height="30" rx="4" {...line} />
          <path d="M180 240 L160 140 L440 140 L420 240" {...soft} />
          <rect x="220" y="110" width="160" height="70" rx="6" {...line} />
          <path d="M250 145 h100 M265 160 h70" {...soft} />
          <circle cx="300" cy="85" r="14" fill={GOLD} opacity="0.9" />
          <path d="M120 285 h360" {...line} />
          {/* Spotlight beams */}
          <path d="M170 80 L220 240 M430 80 L380 240" stroke={GOLD} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </g>
      );
    case "college-festivals":
      return (
        <g>
          {/* Stadium festival arcs, crowd silhouette and flags */}
          {[60, 100, 140, 180].map((r, i) => (
            <path key={r} d={`M${300 - r} 270 A${r} ${r * 0.55} 0 0 1 ${300 + r} 270`} {...line} opacity={1 - i * 0.2} />
          ))}
          <path d="M300 270 V90 L360 115 L300 140" fill={GOLD} fillOpacity="0.85" stroke={GOLD} strokeWidth="1.5" />
          <circle cx="210" cy="120" r="6" fill={MAGENTA} />
          <circle cx="390" cy="130" r="5" fill={GOLD} />
          <path d="M140 270 h320" {...line} />
        </g>
      );
    case "product-launches":
      return (
        <g>
          {/* Reveal plinth with dramatic light burst */}
          <polygon points="300,100 370,220 230,220" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeWidth="1.5" />
          <rect x="250" y="220" width="100" height="50" rx="4" {...line} />
          <circle cx="300" cy="155" r="22" fill={GOLD} />
          <circle cx="300" cy="155" r="38" {...soft} strokeDasharray="3 3" />
          <path d="M220 155 h-40 M380 155 h40 M300 80 v-30 M300 210 v10" {...line} opacity="0.7" />
          <path d="M160 270 h280" {...line} />
        </g>
      );
    case "conferences-seminars":
      return (
        <g>
          {/* Podium, microphone and seminar presentation screen */}
          <rect x="170" y="80" width="260" height="130" rx="8" {...line} />
          <path d="M195 110 h100 M195 130 h180 M195 150 h140 M195 170 h90" {...soft} />
          <rect x="330" y="105" width="70" height="50" rx="4" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="1.2" />
          <rect x="270" y="230" width="60" height="45" rx="3" {...line} />
          <path d="M300 230 v-25 l-10 -15" {...soft} />
          <circle cx="290" cy="190" r="4" fill={GOLD} />
          <path d="M130 275 h340" {...line} />
        </g>
      );
    case "guest-management":
      return (
        <g>
          {/* Registration desk, VIP lanyard and guest pass */}
          <rect x="190" y="90" width="130" height="170" rx="10" {...line} />
          <circle cx="255" cy="140" r="24" {...soft} />
          <path d="M225 185 h60 M235 200 h40 M245 215 h20" {...soft} />
          <path d="M255 90 C255 50 200 45 200 70 L255 90 Z" {...soft} />
          <rect x="340" y="160" width="80" height="100" rx="6" {...soft} strokeDasharray="4 3" />
          <circle cx="380" cy="210" r="14" fill={GOLD} fillOpacity="0.5" />
          <path d="M140 270 h320" {...line} />
        </g>
      );
    case "event-planning":
      return (
        <g>
          {/* Master project timeline and architectural grid */}
          <rect x="150" y="80" width="300" height="180" rx="6" {...faint} />
          <path d="M190 80 v180 M270 80 v180 M350 80 v180" {...faint} />
          <path d="M150 130 h300 M150 180 h300 M150 220 h300" {...faint} />
          {/* Milestone nodes */}
          <circle cx="210" cy="130" r="7" fill={GOLD} />
          <circle cx="290" cy="180" r="7" fill={MAGENTA} />
          <circle cx="390" cy="220" r="9" fill={GOLD} />
          <path d="M210 130 L290 180 L390 220" stroke={GOLD} strokeWidth="2" strokeDasharray="6 4" fill="none" />
        </g>
      );

    /* ---- 02. Event Production ---- */
    case "stage-setup":
      return (
        <g>
          {/* Heavy trussing and architectural stage platform */}
          <path d="M100 100 h400 M100 130 h400" {...line} />
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={i} d={`M${100 + i * 25} ${i % 2 ? 130 : 100} l25 ${i % 2 ? -30 : 30}`} {...soft} />
          ))}
          <path d="M130 130 v130 M470 130 v130" {...line} />
          <rect x="170" y="210" width="260" height="50" rx="4" {...line} fill={GOLD} fillOpacity="0.1" />
          <path d="M90 260 h420" {...line} />
        </g>
      );
    case "sound-lighting":
      return (
        <g>
          {/* Audio line array speakers & moving head beams */}
          <rect x="140" y="90" width="40" height="120" rx="4" {...line} />
          {[110, 140, 170].map((y) => (
            <circle key={y} cx="160" cy={y} r="10" {...soft} />
          ))}
          <rect x="420" y="90" width="40" height="120" rx="4" {...line} />
          {[110, 140, 170].map((y) => (
            <circle key={y} cx="440" cy={y} r="10" {...soft} />
          ))}
          {/* Sound waves & light cones */}
          <path d="M240 70 L280 250 L340 250 L300 70 Z" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1" />
          <circle cx="270" cy="65" r="9" fill={GOLD} />
          <path d="M110 265 h380" {...line} />
        </g>
      );
    case "led-screens":
      return (
        <g>
          {/* Seamless LED display wall with content panels */}
          <rect x="130" y="80" width="340" height="160" rx="8" {...line} />
          <path d="M240 80 v160 M350 80 v160 M130 160 h340" {...soft} strokeDasharray="4 2" />
          <circle cx="240" cy="160" r="36" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.5" />
          <polygon points="230,145 260,160 230,175" fill={GOLD} />
          <path d="M100 265 h400" {...line} />
        </g>
      );
    case "exhibition-stalls":
    case "stall-fabrication":
      return (
        <g>
          {/* 3D isometric exhibition booth frame */}
          <polygon points="180,180 300,120 420,180 300,240" {...line} fill={GOLD} fillOpacity="0.08" />
          <path d="M180 180 v-70 L300 50 v70 M420 180 v-70 L300 50" {...soft} />
          <path d="M300 120 v120" {...line} />
          <rect x="330" y="160" width="50" height="30" rx="2" {...line} fill={GOLD} fillOpacity="0.25" />
          <path d="M120 270 h360" {...line} />
        </g>
      );
    case "event-branding":
      return (
        <g>
          {/* Large scale graphic backdrop & standees */}
          <rect x="180" y="80" width="240" height="160" rx="6" {...line} />
          <path d="M220 130 L260 170 L340 100 L380 150" {...soft} strokeWidth="2" />
          <circle cx="240" cy="115" r="10" fill={GOLD} />
          {/* Standee */}
          <rect x="120" y="120" width="45" height="120" rx="3" {...soft} />
          <path d="M130 145 h25 M130 165 h25" {...faint} />
          <path d="M90 260 h420" {...line} />
        </g>
      );
    case "manpower-logistics":
      return (
        <g>
          {/* Fleet logistics routes & team nodes */}
          <circle cx="200" cy="140" r="22" {...line} />
          <circle cx="300" cy="110" r="28" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="2" />
          <circle cx="400" cy="160" r="22" {...line} />
          <path d="M222 140 L272 115 M328 115 L378 160" {...soft} strokeWidth="2" strokeDasharray="5 3" />
          <rect x="250" y="210" width="100" height="40" rx="6" {...line} />
          <path d="M265 250 a10 10 0 0 1 20 0 M315 250 a10 10 0 0 1 20 0" {...line} />
          <path d="M130 270 h340" {...line} />
        </g>
      );
    case "trophies-merchandise":
      return (
        <g>
          {/* Custom trophy cup & presentation medal */}
          <path d="M250 110 h100 v40 c0 30 -20 50 -50 50 s-50 -20 -50 -50 z" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.75" />
          <path d="M250 120 c-25 0 -35 25 -10 35 M350 120 c25 0 35 25 10 35" {...soft} />
          <path d="M300 200 v30 M275 230 h50" {...line} />
          <rect x="265" y="230" width="70" height="25" rx="3" {...line} />
          <circle cx="390" cy="180" r="22" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1.5" />
          <polygon points="390,168 394,178 404,178 396,184 399,194 390,188 381,194 384,184 376,178 386,178" fill={GOLD} />
          <path d="M140 270 h320" {...line} />
        </g>
      );

    /* ---- 03. Brand Activation ---- */
    case "product-promotions":
    case "brand-campaigns":
    case "launch-campaigns":
      return (
        <g>
          {/* Concentric outreach ripples & megaphone / burst */}
          {[35, 70, 110, 150].map((r, i) => (
            <circle key={r} cx="260" cy="160" r={r} {...soft} opacity={1 - i * 0.22} />
          ))}
          <polygon points="260,160 380,110 380,210" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="1.5" />
          <circle cx="260" cy="160" r="16" fill={GOLD} />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "product-sampling":
      return (
        <g>
          {/* Sampling kiosk & customer touchpoint */}
          <rect x="200" y="130" width="200" height="110" rx="6" {...line} />
          <path d="M180 130 h240 M220 130 v-50 h160 v50" {...soft} />
          <path d="M260 80 L300 50 L340 80" {...line} />
          <rect x="230" y="160" width="35" height="35" rx="4" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.2" />
          <rect x="280" y="160" width="35" height="35" rx="4" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.2" />
          <rect x="330" y="160" width="35" height="35" rx="4" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.2" />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "influencer-campaigns":
    case "influencer-marketing":
      return (
        <g>
          {/* Creator camera viewport, ring light and engagement metrics */}
          <circle cx="300" cy="150" r="70" {...soft} strokeWidth="3" />
          <circle cx="300" cy="150" r="50" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="1.5" />
          <rect x="270" y="130" width="60" height="40" rx="6" {...line} />
          <circle cx="300" cy="150" r="10" fill={GOLD} />
          <path d="M380 90 l15 15 M380 105 l15 -15" stroke={MAGENTA} strokeWidth="2" />
          <circle cx="210" cy="95" r="7" fill={GOLD} />
          <path d="M140 265 h320" {...line} />
        </g>
      );
    case "celebrity-coordination":
      return (
        <g>
          {/* Red carpet stanchions, velvet rope and spotlight star */}
          <rect x="180" y="120" width="12" height="130" rx="3" {...line} />
          <circle cx="186" cy="115" r="8" fill={GOLD} />
          <rect x="420" y="120" width="12" height="130" rx="3" {...line} />
          <circle cx="426" cy="115" r="8" fill={GOLD} />
          <path d="M192 135 C 280 185, 330 185, 420 135" stroke={MAGENTA} strokeWidth="3" fill="none" />
          <polygon points="300,90 306,104 320,105 310,114 313,128 300,121 287,128 290,114 280,105 294,104" fill={GOLD} />
          <path d="M120 265 h360" {...line} />
        </g>
      );
    case "roadshows":
      return (
        <g>
          {/* Mobile activation truck and regional route mapping */}
          <rect x="180" y="130" width="160" height="90" rx="8" {...line} />
          <path d="M340 160 h50 l25 30 v30 h-75 Z" {...line} fill={GOLD} fillOpacity="0.12" />
          <circle cx="230" cy="225" r="16" {...line} fill="#220D2B" />
          <circle cx="370" cy="225" r="16" {...line} fill="#220D2B" />
          <path d="M210 160 h100 M210 180 h70" {...soft} />
          <path d="M120 260 h360" {...line} />
        </g>
      );
    case "audience-engagement":
      return (
        <g>
          {/* Interactive touch kiosk and connected gamification rays */}
          <rect x="230" y="90" width="140" height="120" rx="10" {...line} />
          <rect x="250" y="110" width="100" height="80" rx="4" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.2" />
          <circle cx="300" cy="150" r="18" fill={GOLD} />
          <path d="M290 210 v40 M265 250 h70" {...line} />
          <path d="M170 120 l40 20 M430 120 l-40 20 M170 180 l40 -10 M430 180 l-40 -10" {...soft} strokeDasharray="3 3" />
          <path d="M130 265 h340" {...line} />
        </g>
      );

    /* ---- 04. Campus Marketing ---- */
    case "campus-ambassadors":
      return (
        <g>
          {/* Student leadership badge, star emblem and networking links */}
          <circle cx="300" cy="150" r="60" {...line} />
          <polygon points="300,105 312,135 342,137 320,157 326,187 300,172 274,187 280,157 258,137 288,135" fill={GOLD} />
          <circle cx="190" cy="150" r="12" {...soft} />
          <circle cx="410" cy="150" r="12" {...soft} />
          <path d="M202 150 h38 M360 150 h38" {...soft} strokeDasharray="4 3" />
          <path d="M140 265 h320" {...line} />
        </g>
      );
    case "college-sponsorships":
      return (
        <g>
          {/* Strategic handshake banner and collegiate crest */}
          <rect x="180" y="80" width="240" height="150" rx="8" {...line} />
          <path d="M210 120 h180 M210 145 h140 M210 170 h160" {...soft} />
          <circle cx="340" cy="165" r="24" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="1.5" />
          <polygon points="300,60 360,60 300,80" fill={GOLD} />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "college-outreach":
    case "intercollegiate-events":
      return (
        <g>
          {/* Multiple collegiate campus pavilions connected together */}
          <polygon points="200,100 240,60 280,100" {...line} />
          <rect x="210" y="100" width="60" height="70" {...soft} />
          <polygon points="320,100 360,60 400,100" {...line} />
          <rect x="330" y="100" width="60" height="70" {...soft} />
          <path d="M270 135 h60" stroke={GOLD} strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="300" cy="135" r="8" fill={GOLD} />
          <path d="M120 260 h360" {...line} />
        </g>
      );
    case "student-engagement":
    case "campus-promotions":
      return (
        <g>
          {/* Dynamic interactive megaphone, student festival crowd arcs */}
          {[40, 80, 120].map((r, i) => (
            <path key={r} d={`M${300 - r} 250 A${r} ${r * 0.6} 0 0 1 ${300 + r} 250`} {...line} opacity={1 - i * 0.25} />
          ))}
          <circle cx="300" cy="120" r="28" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="1.75" />
          <path d="M290 115 h20 M300 105 v20" {...line} strokeWidth="2" />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "guest-speaker-sessions":
    case "csr-guest-speaker-coordination":
      return (
        <g>
          {/* Auditorium lectern and distinguished speaker spotlight */}
          <polygon points="270,120 330,120 315,240 285,240" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.5" />
          <circle cx="300" cy="90" r="16" fill={GOLD} />
          <path d="M290 120 v-15" {...soft} />
          <path d="M210 200 a110 50 0 0 1 180 0" {...soft} strokeDasharray="5 4" />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "registration-drives":
      return (
        <g>
          {/* Digital registration clipboard and verified checklist */}
          <rect x="200" y="70" width="200" height="170" rx="8" {...line} />
          <rect x="260" y="55" width="80" height="25" rx="4" fill={GOLD} />
          {[110, 145, 180].map((y) => (
            <g key={y}>
              <circle cx="235" cy={y} r="8" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.2" />
              <path d="M231 ${y} l3 3 l6 -6" stroke={IVORY} strokeWidth="1.5" fill="none" />
              <path d={`M255 ${y} h115`} {...soft} />
            </g>
          ))}
          <path d="M140 265 h320" {...line} />
        </g>
      );

    /* ---- 05. Digital Marketing ---- */
    case "social-media-management":
      return (
        <g>
          {/* Content schedule feed and live community notifications */}
          <rect x="180" y="80" width="240" height="160" rx="10" {...line} />
          <path d="M180 125 h240" {...soft} />
          <circle cx="210" cy="102" r="10" fill={GOLD} />
          <circle cx="380" cy="102" r="6" fill={MAGENTA} />
          <rect x="210" y="145" width="180" height="40" rx="4" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="1" />
          <path d="M230 205 h100" {...soft} />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "creative-design":
      return (
        <g>
          {/* Vector pen tool curve and typography composition */}
          <path d="M170 200 C 220 90, 360 80, 420 180" stroke={GOLD} strokeWidth="2.5" fill="none" />
          <circle cx="220" cy="90" r="5" fill={GOLD} />
          <circle cx="360" cy="80" r="5" fill={GOLD} />
          <polygon points="300,130 315,160 300,150 285,160" fill={IVORY} />
          <rect x="160" y="190" width="80" height="40" rx="4" {...soft} strokeDasharray="3 3" />
          <path d="M120 265 h360" {...line} />
        </g>
      );
    case "website-development":
      return (
        <g>
          {/* Browser window with clean semantic layout blocks */}
          <rect x="150" y="80" width="300" height="160" rx="8" {...line} />
          <path d="M150 115 h300" {...soft} />
          <circle cx="175" cy="98" r="4" fill={GOLD} />
          <circle cx="190" cy="98" r="4" fill={GOLD} />
          <circle cx="205" cy="98" r="4" fill={GOLD} />
          <rect x="175" y="135" width="80" height="85" rx="4" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="1.2" />
          <rect x="270" y="135" width="155" height="35" rx="4" {...soft} />
          <rect x="270" y="180" width="155" height="40" rx="4" {...soft} />
          <path d="M110 265 h380" {...line} />
        </g>
      );
    case "content-creation":
      return (
        <g>
          {/* Editorial article layout, fountain pen and creative spark */}
          <rect x="190" y="75" width="220" height="170" rx="6" {...line} />
          <path d="M220 110 h160 M220 135 h160 M220 160 h110 M220 185 h140" {...soft} />
          <circle cx="360" cy="190" r="16" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.5" />
          <path d="M360 178 v24 M348 190 h24" stroke={GOLD} strokeWidth="1.5" />
          <path d="M140 265 h320" {...line} />
        </g>
      );
    case "photography-videography":
    case "video-editing":
      return (
        <g>
          {/* Cinema camera lens and video timeline clips */}
          <rect x="170" y="100" width="260" height="130" rx="8" {...line} />
          <circle cx="300" cy="165" r="40" fill={GOLD} fillOpacity="0.2" stroke={GOLD} strokeWidth="2" />
          <circle cx="300" cy="165" r="22" fill={GOLD} />
          <polygon points="360,90 395,75 395,115" fill={GOLD} opacity="0.85" />
          <rect x="195" y="115" width="45" height="25" rx="3" {...soft} />
          <path d="M120 265 h360" {...line} />
        </g>
      );
    case "digital-advertising":
      return (
        <g>
          {/* Campaign target dartboard & conversion growth graph */}
          <circle cx="250" cy="160" r="50" {...soft} />
          <circle cx="250" cy="160" r="30" {...line} />
          <circle cx="250" cy="160" r="10" fill={GOLD} />
          {/* Growth graph */}
          <path d="M330 210 L360 170 L390 185 L430 110" stroke={GOLD} strokeWidth="2.5" fill="none" />
          <circle cx="430" cy="110" r="5" fill={MAGENTA} />
          <path d="M130 265 h340" {...line} />
        </g>
      );

    /* ---- 06. CSR Initiatives ---- */
    case "financial-literacy":
      return (
        <g>
          {/* Shield of financial security and upward capability chart */}
          <path d="M300 70 L370 105 v55 c0 50 -35 80 -70 95 c-35 -15 -70 -45 -70 -95 v-55 Z" fill={GOLD} fillOpacity="0.15" stroke={GOLD} strokeWidth="2" />
          <path d="M280 150 h40 M300 130 v40" stroke={GOLD} strokeWidth="2" />
          <circle cx="300" cy="150" r="24" {...soft} />
          <path d="M140 265 h320" {...line} />
        </g>
      );
    case "educational-workshops":
    case "digital-literacy":
      return (
        <g>
          {/* Open knowledge book and rising learning spark */}
          <path d="M180 210 c40 -15 80 -15 120 0 c40 -15 80 -15 120 0 v-80 c-40 -15 -80 -15 -120 0 c-40 -15 -80 -15 -120 0 Z" {...line} fill={GOLD} fillOpacity="0.1" />
          <path d="M300 130 v80" {...line} />
          <circle cx="300" cy="85" r="14" fill={GOLD} />
          <path d="M300 60 v-15 M320 70 l12 -12 M280 70 l-12 -12" stroke={GOLD} strokeWidth="1.5" />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "career-development":
    case "entrepreneurship-sessions":
      return (
        <g>
          {/* Ascending staircase / career ladder with flag of achievement */}
          <path d="M180 230 h50 v-35 h50 v-35 h50 v-35 h50 v-35" {...line} strokeWidth="2" />
          <path d="M380 90 v-30 l35 12 l-35 12" fill={GOLD} stroke={GOLD} strokeWidth="1.5" />
          <circle cx="205" cy="210" r="5" fill={GOLD} />
          <circle cx="255" cy="175" r="5" fill={GOLD} />
          <circle cx="305" cy="140" r="5" fill={GOLD} />
          <path d="M130 265 h340" {...line} />
        </g>
      );
    case "community-outreach":
      return (
        <g>
          {/* Supportive community circle and interconnected hands */}
          {[40, 80, 120].map((r, i) => (
            <circle key={r} cx="300" cy="160" r={r} {...soft} opacity={1 - i * 0.25} />
          ))}
          <circle cx="300" cy="160" r="22" fill={GOLD} />
          <circle cx="220" cy="130" r="14" fill={GOLD} fillOpacity="0.4" />
          <circle cx="380" cy="130" r="14" fill={GOLD} fillOpacity="0.4" />
          <circle cx="300" cy="240" r="14" fill={MAGENTA} fillOpacity="0.4" />
          <path d="M130 265 h340" {...line} />
        </g>
      );

    /* ---- 07. Corporate Gifting ---- */
    case "welcome-kits":
    case "employee-kits":
    case "festive-hampers":
    case "corporate-gifts":
    case "customised-merchandise":
    case "promotional-gifts":
    case "event-giveaways":
    case "gift-packaging":
    default:
      return (
        <g>
          {/* Luxury curated gift hamper box with ribbon and sparkles */}
          <rect x="190" y="130" width="220" height="120" rx="8" {...line} fill={GOLD} fillOpacity="0.1" />
          <rect x="175" y="110" width="250" height="28" rx="4" fill={GOLD} fillOpacity="0.3" stroke={GOLD} strokeWidth="1.5" />
          <rect x="288" y="110" width="24" height="140" fill={GOLD} opacity="0.85" />
          {/* Ribbon Bow */}
          <path
            d="M288 110 C 260 70, 220 70, 250 110 Z M 312 110 C 340 70, 380 70, 350 110 Z"
            fill={GOLD}
            fillOpacity="0.5"
            stroke={GOLD}
            strokeWidth="1.5"
          />
          <circle cx="300" cy="108" r="9" fill={GOLD} />
          {/* Sparkles */}
          <polygon points="150,90 154,102 166,106 154,110 150,122 146,110 134,106 146,102" fill={GOLD} />
          <polygon points="440,85 443,94 452,97 443,100 440,109 437,100 428,97 437,94" fill={IVORY} />
          <path d="M130 270 h340" {...line} />
        </g>
      );
  }
}

export function DivisionVisual({
  visualKey,
  title,
  divisionNumber,
  serviceSlug,
  imageSrc,
  className = "division-visual",
}: DivisionVisualProps) {
  const uid = useId().replace(/:/g, "");

  if (imageSrc) {
    return (
      <div className={`${className} division-visual--image`}>
        <Image
          src={imageSrc}
          alt={`${title} — Flashax Event Solutions`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          style={{ objectFit: "cover" }}
          priority={false}
          loading="lazy"
          unoptimized
        />
        <div className="division-visual__overlay" />
      </div>
    );
  }

  return (
    <div className={className} aria-label={`${title} illustration`}>
      <svg
        viewBox="0 0 600 360"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        className="division-visual__svg"
      >
        <defs>
          <linearGradient id={`grad-bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A0B33" />
            <stop offset="50%" stopColor="#1C0923" />
            <stop offset="100%" stopColor="#120517" />
          </linearGradient>
          <radialGradient id={`glow-${uid}`} cx="0.5" cy="0.4" r="0.6">
            <stop offset="0%" stopColor="#F7B721" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#F7B721" stopOpacity="0" />
          </radialGradient>
          <pattern id={`grid-${uid}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#F2F4E8" opacity="0.08" />
          </pattern>
        </defs>

        {/* Base Layers */}
        <rect width="600" height="360" fill={`url(#grad-bg-${uid})`} rx="8" />
        <rect width="600" height="360" fill={`url(#grid-${uid})`} rx="8" />
        <rect width="600" height="360" fill={`url(#glow-${uid})`} rx="8" />

        {/* Visual Border */}
        <rect
          x="1"
          y="1"
          width="598"
          height="358"
          rx="7"
          fill="none"
          stroke="rgba(247, 183, 33, 0.16)"
          strokeWidth="1"
        />

        {/* Motif Illustration */}
        <DivisionMotif visualKey={visualKey} />
      </svg>
    </div>
  );
}
