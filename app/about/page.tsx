import { Metadata } from "next";
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