"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { prefersReducedMotion } from "@/lib/webgl";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    // Small timeout to allow DOM from page transitions or route changes to settle
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".section-head, .cap, .process__item, .work-card, .faq__item, .who__text, .service-card, .why__grid, .division-card"
      );

      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      targets.forEach((el) => {
        // If element is already in viewport upon mount, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          el.classList.add("reveal-on-scroll");
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
