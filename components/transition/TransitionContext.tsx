"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { prefersReducedMotion } from "@/lib/webgl";
import {
  type TransitionMode,
  type TransitionStatus,
  classifyTransition,
} from "@/lib/transitions";
import { SparkBurstCanvas, type SparkBurstHandle } from "./SparkBurstCanvas";
import { SparkWipeOverlay } from "./SparkWipeOverlay";

interface TransitionContextValue {
  status: TransitionStatus;
  mode: TransitionMode;
  navigate: (href: string, origin?: { x: number; y: number }) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  status: "idle",
  mode: "major",
  navigate: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const [status, setStatus] = useState<TransitionStatus>("idle");
  const [mode, setMode] = useState<TransitionMode>("major");

  const sparkRef = useRef<SparkBurstHandle>(null);
  const isNavigatingRef = useRef(false);
  const pendingUrlRef = useRef<string | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTransition = useCallback(
    (href: string, origin?: { x: number; y: number }) => {
      if (isNavigatingRef.current) return;

      const reduced = prefersReducedMotion();
      const transitionMode = classifyTransition(pathname, href, reduced);

      if (transitionMode === "none") return;

      if (transitionMode === "reduced") {
        router.push(href);
        return;
      }

      isNavigatingRef.current = true;
      pendingUrlRef.current = href;
      setMode(transitionMode);
      setStatus("wiping_in");

      // 1. Fire gold particle burst at origin coordinates (or fallback to top-center)
      const burstX = origin?.x ?? window.innerWidth / 2;
      const burstY = origin?.y ?? 60;
      sparkRef.current?.burst(burstX, burstY, transitionMode);

      // 2. Timing for curtain wipe completion
      const coverDelay = transitionMode === "service" ? 200 : 320;

      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

      safetyTimerRef.current = setTimeout(() => {
        setStatus("covered");
        router.push(href);

        // Safety timeout to ensure curtain clears even if router is slow
        safetyTimerRef.current = setTimeout(() => {
          if (isNavigatingRef.current) {
            setStatus("wiping_out");
            setTimeout(() => {
              setStatus("idle");
              isNavigatingRef.current = false;
              pendingUrlRef.current = null;
            }, 360);
          }
        }, 850);
      }, coverDelay);
    },
    [pathname, router]
  );

  // When pathname changes, complete the transition
  useEffect(() => {
    if (isNavigatingRef.current) {
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

      // Scroll to top immediately while covered
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      setStatus("wiping_out");

      const exitDuration = mode === "service" ? 240 : 380;
      const timer = setTimeout(() => {
        setStatus("idle");
        isNavigatingRef.current = false;
        pendingUrlRef.current = null;
      }, exitDuration);

      return () => clearTimeout(timer);
    }
  }, [pathname, mode]);

  // Global delegated click handler for seamless internal link interception
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Ignore right clicks, prevented events, or modifier keys (cmd/ctrl for new tab)
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Ignore external, download, new-tab, or non-HTTP links
      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.getAttribute("rel")?.includes("external") ||
        link.getAttribute("data-no-transition") === "true" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Check if internal destination
      const isInternal = href.startsWith("/") || href.startsWith(window.location.origin);
      if (!isInternal) return;

      // Ignore hash-only anchors on current page (e.g. #services, #event-management)
      if (
        href.startsWith("#") ||
        (href.includes("#") && href.split("#")[0] === window.location.pathname)
      ) {
        return;
      }

      // Ignore identical path + query
      const targetPath = href.replace(window.location.origin, "");
      const currentFull = window.location.pathname + window.location.search;
      if (targetPath === currentFull) {
        e.preventDefault();
        return;
      }

      // Intercept and run Spark-Wipe
      e.preventDefault();

      let x = e.clientX;
      let y = e.clientY;

      // Fallback for keyboard activation (Enter key)
      if (x === 0 && y === 0) {
        const rect = link.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      startTransition(targetPath, { x, y });
    };

    document.addEventListener("click", handleDocumentClick, { capture: false });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: false });
    };
  }, [startTransition]);

  return (
    <TransitionContext.Provider value={{ status, mode, navigate: startTransition }}>
      {children}
      {/* Particle Canvas Overlay */}
      <SparkBurstCanvas ref={sparkRef} />
      {/* Cinematic Curtain Wipe & Shared Logo Anchor */}
      <SparkWipeOverlay status={status} mode={mode} />
    </TransitionContext.Provider>
  );
}
