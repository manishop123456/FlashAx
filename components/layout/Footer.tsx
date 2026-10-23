import Link from "next/link";
import { services, siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" aria-label="FLASHAX EVENT SOLUTIONS — home">
              <Logo sizes="200px" />
            </Link>
            <p>
              {siteConfig.tagline}. We create moments that move people through creative thinking and coordinated
              execution.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer services">
            <h2>Our Services</h2>
            <ul className="footer__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Footer company">
            <h2>Company</h2>
            <ul className="footer__list">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Footer contact and legal">
            <h2>Contact &amp; Connect</h2>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {siteConfig.phone}
                </a>
              </li>
              <li>
                <span style={{ color: "var(--muted)", fontSize: "var(--fs-small)" }}>
                  {siteConfig.location}
                </span>
              </li>
              <li style={{ marginTop: "0.5rem" }}>
                <Link href="/contact" style={{ color: "var(--gold)" }}>
                  Start a project enquiry &rarr;
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              {siteConfig.socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} &#8599;
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="footer__people">
            <span>
              Founder: <b>{siteConfig.founder}</b>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}