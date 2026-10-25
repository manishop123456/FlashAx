"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { siteConfig, services as serviceData } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const megaRef = useRef<HTMLLIElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrolled(currentY > 24);

          if (Math.abs(currentY - lastY) > 8) {
            setScrollDir(currentY > lastY && currentY > 100 ? "down" : "up");
            lastY = currentY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMegaOpen(false);
    setDrawerOpen(false);
    setSubOpen(false);
  }, [pathname]);

  // Outside click + Escape for the mega menu
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        megaRef.current &&
        !megaRef.current.contains(target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target)
      ) {
        setMegaOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  // Drawer: scroll lock, Escape, initial focus
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerCloseRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const openMega = useCallback(() => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);
  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  }, []);

  const isServices = pathname.startsWith("/services");
  const isAbout = pathname.startsWith("/about");
  const isWork = pathname.startsWith("/work");
  const solid = scrolled || megaOpen;
  const unobtrusive = scrollDir === "down" && scrolled && !megaOpen && !drawerOpen;

  return (
    <header
      className={`header ${solid ? "header--solid" : ""} ${
        unobtrusive ? "header--unobtrusive" : ""
      }`}
    >
      <div className="wrap">
        <div className="header__bar">
          {/* Brand Logo */}
          <Link href="/" className="header__logo" aria-label="FLASHAX EVENT SOLUTIONS — home">
            <Logo priority className="header__logo-img" sizes="172px" />
          </Link>

          {/* Center Navigation Links: Home -> About -> Services -> Our Work */}
          <nav className="header__nav" aria-label="Main">
            <ul className="nav-list">
              <li>
                <Link
                  href="/"
                  className="nav-link"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="nav-link"
                  aria-current={isAbout ? "page" : undefined}
                >
                  About Us
                </Link>
              </li>
              <li ref={megaRef} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                <button
                  ref={triggerRef}
                  type="button"
                  className="nav-link"
                  aria-expanded={megaOpen}
                  aria-controls="services-menu"
                  aria-current={isServices ? "page" : undefined}
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  Our Services
                  <ChevronDown aria-hidden="true" />
                </button>
              </li>
              <li>
                <Link
                  href="/work"
                  className="nav-link"
                  aria-current={isWork ? "page" : undefined}
                >
                  Our Work
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right CTA */}
          <ButtonLink href="/contact" size="sm" variant="primary" icon="up-right" className="header__cta">
            GET A PROPOSAL
          </ButtonLink>

          {/* Mobile hamburger */}
          <button
            ref={burgerRef}
            type="button"
            className="header__burger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {megaOpen && (
        <div
          ref={megaMenuRef}
          id="services-menu"
          className="mega"
          onMouseEnter={openMega}
          onMouseLeave={scheduleClose}
          onBlur={(e) => {
            if (
              !megaRef.current?.contains(e.relatedTarget as Node) &&
              !megaMenuRef.current?.contains(e.relatedTarget as Node)
            ) {
              setMegaOpen(false);
            }
          }}
        >
          <div className="mega__inner">
            <ul className="mega__grid">
              {serviceData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mega__item"
                    onClick={() => setMegaOpen(false)}
                  >
                    <span className="mega__num">{s.number}</span>
                    <span className="mega__title">{s.title}</span>
                    <p className="mega__desc">{s.shortDescription}</p>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="mega__item mega__item--all"
                  onClick={() => setMegaOpen(false)}
                >
                  <div className="mega__all-content">
                    <span className="mega__num">OVERVIEW</span>
                    <span className="mega__title">View All 7 Services</span>
                    <p className="mega__desc">
                      Explore our full end-to-end event production and brand capabilities.
                    </p>
                  </div>
                  <span className="mega__all-icon">
                    <ArrowRight aria-hidden="true" width={20} height={20} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {drawerOpen && (
        <div id="mobile-menu" className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap drawer__top">
            <Link href="/" className="header__logo" aria-label="FLASHAX EVENT SOLUTIONS — home" onClick={() => setDrawerOpen(false)}>
              <Logo sizes="150px" className="header__logo-img" />
            </Link>
            <button
              ref={drawerCloseRef}
              type="button"
              className="header__burger"
              style={{ gridColumn: "auto" }}
              aria-label="Close menu"
              onClick={() => {
                setDrawerOpen(false);
                burgerRef.current?.focus();
              }}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav className="wrap drawer__nav" aria-label="Mobile">
            <Link
              href="/"
              className="drawer__link"
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={() => setDrawerOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="drawer__link"
              aria-current={isAbout ? "page" : undefined}
              onClick={() => setDrawerOpen(false)}
            >
              About Us
            </Link>
            <button
              type="button"
              className="drawer__toggle"
              aria-expanded={subOpen}
              aria-controls="drawer-services"
              onClick={() => setSubOpen((v) => !v)}
            >
              Our Services
              <ChevronDown aria-hidden="true" />
            </button>
            {subOpen && (
              <div id="drawer-services" className="drawer__sub">
                {serviceData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="drawer__sublink"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <span>{s.number}</span>
                    {s.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="drawer__sublink drawer__sublink--all"
                  onClick={() => setDrawerOpen(false)}
                >
                  <span>ALL</span>
                  View all 7 services
                </Link>
              </div>
            )}
            <Link
              href="/work"
              className="drawer__link"
              aria-current={isWork ? "page" : undefined}
              onClick={() => setDrawerOpen(false)}
            >
              Our Work
            </Link>
            <div className="drawer__cta">
              <ButtonLink href="/contact" block variant="primary" icon="up-right" onClick={() => setDrawerOpen(false)}>
                GET A PROPOSAL
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}