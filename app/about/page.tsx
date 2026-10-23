import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | FLASHAX EVENT SOLUTIONS",
  description:
    "Learn about Flashax Event Solutions — our Mumbai-based event management and brand experience company, founder Mukesh Choudhary, and our core operating principles.",
};

const CORE_PRINCIPLES = [
  {
    n: "01",
    title: "Understand the Brief",
    desc: "Understand the client's goals, audience, constraints and requirements from the very first conversation.",
  },
  {
    n: "02",
    title: "Plan with Purpose",
    desc: "Build an approach aligned with the agreed objectives, budget and timeline without unnecessary complexity.",
  },
  {
    n: "03",
    title: "Coordinate Responsibly",
    desc: "Coordinate the right people, resources and specialist partners for the agreed project scope with single-point accountability.",
  },
  {
    n: "04",
    title: "Communicate Clearly",
    desc: "Maintain clear expectations, responsibilities and transparent project updates throughout the delivery lifecycle.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* Page Hero */}
        <PageHero
          titleId="about-page-title"
          eyebrow="ABOUT FLASHAX"
          titleLines={["WHERE ENGAGEMENT", "SPARKS SUCCESS."]}
          lead="Flashax Event Solutions is an event management and brand experience company based in Mumbai."
        />

        {/* 01. About Flashax */}
        <section className="section" aria-labelledby="about-flashax-title">
          <div className="wrap">
            <div className="about-grid">
              <div>
                <SectionHeading
                  id="about-flashax-title"
                  eyebrow="01. ABOUT FLASHAX"
                  lines={["CREATIVE THINKING.", "COORDINATED PLANNING."]}
                  lead="We work with businesses, brands, colleges and event partners to plan and coordinate engaging experiences tailored to each client's objectives."
                />
                <div className="prose" style={{ marginTop: "2rem" }}>
                  <div>
                    <h3 style={{ color: "var(--gold)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                      Company Introduction
                    </h3>
                    <p>
                      Flashax Event Solutions is an event management and brand experience company based in Mumbai. We
                      work with businesses, brands, colleges and event partners to plan and coordinate engaging experiences
                      tailored to each client&apos;s objectives.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: "var(--gold)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                      Business Focus
                    </h3>
                    <p>
                      From corporate events and college festivals to brand activations, campus campaigns, digital
                      solutions and educational programs, we bring creative thinking, organised planning and on-ground
                      coordination together.
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: "var(--gold)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                      How We Work
                    </h3>
                    <p>
                      Every project starts with understanding the brief, the intended audience, the budget and the timeline.
                      We use that understanding to develop a suitable approach and coordinate the required resources for the
                      agreed scope.
                    </p>
                    <p>
                      We operate with complete clarity: planning, creative direction and core management are led directly
                      by Flashax. When specialist requirements arise — such as heavy fabrication or technical rigging — we
                      coordinate vetted partners while maintaining direct responsibility for the final outcome.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stack">
                <div className="card panel" style={{ borderLeft: "3px solid var(--gold)" }}>
                  <h3 className="panel__title">Our Operational Scope</h3>
                  <ul className="ticks">
                    <li>Single coordinated point of contact from brief to delivery</li>
                    <li>Solutions tailored to client objectives, constraints and budgets</li>
                    <li>Coordination of vetted production and technical partners</li>
                    <li>Transparent delivery process with milestone updates</li>
                  </ul>
                </div>

                <div className="card panel">
                  <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "0.5rem" }}>HEADQUARTERS</p>
                  <h4 style={{ fontSize: "1.25rem", color: "var(--ivory)", marginBottom: "0.5rem" }}>Mumbai, Maharashtra</h4>
                  <p style={{ color: "var(--lavender)", fontSize: "var(--fs-small)" }}>
                    Based in Mumbai, coordinating projects across corporate venues, college campuses, and exhibition centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Statement Showcase */}
        <section className="section mv-section" aria-labelledby="about-mv-title">
          <div className="wrap">
            <SectionHeading
              id="about-mv-title"
              eyebrow="PURPOSE &amp; DIRECTION"
              align="center"
              lines={["DRIVEN BY PURPOSE.", "FOCUSED ON IMPACT."]}
              lead="Our mission and vision define why Flashax exists and where we are steering the future of engagement."
            />

            <div className="mv-grid" role="region" aria-label="Mission and Vision">
              {/* Mission Card */}
              <article className="mv-card">
                <div className="mv-card__watermark" aria-hidden="true">
                  <svg viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M150 20C180 80 260 180 230 320C210 390 170 450 150 480C130 450 90 390 70 320C40 180 120 80 150 20Z"
                      fill="url(#mv-mission-feather)"
                    />
                    <path d="M150 30L150 470" stroke="#F7B721" strokeWidth="2" strokeOpacity="0.3" />
                    <path d="M150 140C190 125 220 155 240 190" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 220C195 205 225 240 235 280" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 300C185 290 205 320 210 350" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 160C110 145 80 175 60 210" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M150 240C105 225 75 260 65 300" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M150 320C115 310 95 340 90 370" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <defs>
                      <linearGradient id="mv-mission-feather" x1="150" y1="20" x2="150" y2="480" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F609CF" stopOpacity="0.35" />
                        <stop offset="50%" stopColor="#8A1EA3" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#521262" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="mv-card__header">
                  <div className="mv-card__brand">
                    <Image
                      src="/brand/flashax-logo-transparent.png"
                      alt="FLASHAX"
                      width={140}
                      height={36}
                      unoptimized
                      className="mv-card__brand-img"
                    />
                  </div>
                  <h3 className="mv-card__title">MISSION</h3>
                </div>
                <div className="mv-card__box">
                  <p className="mv-card__text">
                    To redefine engagement through authentic, high-impact experiences. We empower institutions and
                    organizations to connect with their audiences in meaningful ways—sparking inspiration, fostering
                    professional synergy, and building the leaders of tomorrow.
                  </p>
                </div>
              </article>

              {/* Vision Card */}
              <article className="mv-card">
                <div className="mv-card__watermark" aria-hidden="true">
                  <svg viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M150 20C180 80 260 180 230 320C210 390 170 450 150 480C130 450 90 390 70 320C40 180 120 80 150 20Z"
                      fill="url(#mv-vision-feather)"
                    />
                    <path d="M150 30L150 470" stroke="#F7B721" strokeWidth="2" strokeOpacity="0.3" />
                    <path d="M150 140C190 125 220 155 240 190" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 220C195 205 225 240 235 280" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 300C185 290 205 320 210 350" stroke="#F609CF" strokeWidth="1.5" strokeOpacity="0.25" />
                    <path d="M150 160C110 145 80 175 60 210" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M150 240C105 225 75 260 65 300" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M150 320C115 310 95 340 90 370" stroke="#521262" strokeWidth="1.5" strokeOpacity="0.3" />
                    <defs>
                      <linearGradient id="mv-vision-feather" x1="150" y1="20" x2="150" y2="480" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F609CF" stopOpacity="0.35" />
                        <stop offset="50%" stopColor="#8A1EA3" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#521262" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="mv-card__header">
                  <div className="mv-card__brand">
                    <Image
                      src="/brand/flashax-logo-transparent.png"
                      alt="FLASHAX"
                      width={140}
                      height={36}
                      unoptimized
                      className="mv-card__brand-img"
                    />
                  </div>
                  <h3 className="mv-card__title">VISION</h3>
                </div>
                <div className="mv-card__box">
                  <p className="mv-card__text">
                    To be the pioneering force in engagement solutions, where every event—from the campus to the
                    boardroom—is a strategic platform for growth and connection. We envision a future where every gathering
                    serves as a powerful catalyst for success and sets a new benchmark for community and culture.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 02. Our Founder */}
        <section className="section section--alt" aria-labelledby="about-founder-title">
          <div className="wrap">
            <div className="about-grid">
              <div>
                <SectionHeading
                  id="about-founder-title"
                  eyebrow="02. LEADERSHIP"
                  lines={["OUR FOUNDER"]}
                  lead="Meet the leadership guiding Flashax Event Solutions."
                />
                <div className="prose" style={{ marginTop: "2rem" }}>
                  <p>
                    <strong>Mukesh Choudhary</strong> is the founder of Flashax Event Solutions. With a commitment to
                    delivering organised, transparent, and high-impact event experiences, he leads the company&apos;s
                    vision, client partnerships, and strategic execution.
                  </p>
                  <p>
                    Under his direction, Flashax operates on the philosophy that every successful event is built on
                    attentive listening, disciplined coordination, and genuine accountability. Whether partnering with
                    emerging brands, established corporate institutions, or student festival committees, the focus
                    remains consistent: understanding the brief and executing with excellence.
                  </p>
                </div>
              </div>

              <div>
                <article className="card person" style={{ background: "var(--bg-2)", border: "1px solid var(--line-gold)", padding: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                  <p className="person__role">FOUNDER</p>
                  <h3 className="person__name" style={{ color: "var(--ivory)", marginTop: "0.25rem" }}>
                    {siteConfig.founder}
                  </h3>
                  <p style={{ color: "var(--gold)", fontSize: "0.85rem", letterSpacing: "0.05em", marginTop: "0.25rem" }}>
                    Founder, Flashax Event Solutions
                  </p>
                  <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
                    <p style={{ color: "var(--lavender)", fontSize: "var(--fs-small)", lineHeight: 1.7 }}>
                      &ldquo;Our focus is straightforward: listen carefully to what the client wants to achieve, plan
                      responsibly within their parameters, and coordinate the team and partners to deliver on ground
                      without friction.&rdquo;
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Our Core Principles */}
        <section className="section" aria-labelledby="about-principles-title">
          <div className="wrap">
            <SectionHeading
              id="about-principles-title"
              eyebrow="03. OPERATING PRINCIPLES"
              align="center"
              lines={["OUR CORE PRINCIPLES"]}
              lead="Four standards that guide how Flashax plans, coordinates and delivers every project."
            />

            <div className="values" role="list">
              {CORE_PRINCIPLES.map((principle) => (
                <article key={principle.title} className="card value" role="listitem">
                  <span className="value__n">{principle.n}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.desc}</p>
                </article>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "4rem", flexWrap: "wrap" }}>
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                START A PROJECT
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" icon="up-right">
                EXPLORE OUR SERVICES
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}