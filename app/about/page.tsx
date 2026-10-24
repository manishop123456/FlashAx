import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
        {/* 01. About Flashax */}
        <section className="section" aria-labelledby="about-flashax-title">
          <div className="wrap">
            <div className="about-grid about-grid--image-right">
              <div className="about-content">
                <header className="about-head">
                  <h2 id="about-flashax-title" className="about-head__title">ABOUT FLASHAX</h2>
                  <p className="about-head__sub">Creative Thinking. Coordinated Planning.</p>
                </header>
                <div className="about-desc">
                  <p>
                    At Flashax Event Solutions, we believe that successful projects begin with understanding people, objectives and expectations.
                  </p>
                  <p>
                    We work across event management, event production, brand activation, campus marketing, digital marketing, corporate gifting and CSR programmes. Our approach combines creative thinking with practical planning and coordination.
                  </p>
                  <p>
                    Whether you are planning a corporate event, a college festival, a brand campaign or an educational programme, we aim to understand your requirements and develop a solution suited to your goals, audience, budget and timeline.
                  </p>
                </div>
              </div>

              <div className="about-image">
                <Image
                  src="/brand/fhool pati.png"
                  alt="Flashax Event Solutions"
                  width={520}
                  height={520}
                  className="about-image__img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 02. Meet the Founder */}
        <section className="section section--alt" aria-labelledby="about-founder-title">
          <div className="wrap">
            <div className="about-grid about-grid--founder">
              <div className="founder-image">
                <Image
                  src="/brand/flashax final profile.png"
                  alt="Mukesh Choudhary, Founder"
                  width={480}
                  height={640}
                  className="founder-image__img"
                />
              </div>

              <div className="founder-content">
                <header className="founder-head">
                  <h2 id="about-founder-title" className="founder-head__title">MEET THE FOUNDER</h2>
                  <p className="founder-head__sub">Mukesh Choudhary</p>
                </header>
                <div className="founder-desc">
                  <p>
                    Flashax Event Solutions was founded with a focus on helping businesses, brands and colleges bring their ideas to life through events, marketing initiatives and coordinated experiences.
                  </p>
                  <p>
                    The focus is on understanding each client's requirements, planning carefully and coordinating the resources needed to deliver the agreed project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Vision & Mission */}
        <section className="section mv-section" aria-labelledby="about-mv-title">
          <div className="wrap">
            <div className="mv-grid">
              <article className="mv-card">
                <div className="mv-card__watermark" aria-hidden="true">
                  <Image
                    src="/brand/flashax-logo-transparent.png"
                    alt=""
                    fill
                    sizes="70vw"
                    className="mv-card__watermark-img"
                    priority={false}
                  />
                </div>
                <h2 className="mv-card__title">OUR MISSION</h2>
                <div className="mv-card__panel">
                  <p className="mv-card__text">
                    To help businesses, brands and educational institutions connect with their audiences through thoughtful planning, creative solutions and reliable execution, while building long-term relationships based on trust and transparency.
                  </p>
                </div>
              </article>

              <article className="mv-card">
                <div className="mv-card__watermark" aria-hidden="true">
                  <Image
                    src="/brand/flashax-logo-transparent.png"
                    alt=""
                    fill
                    sizes="70vw"
                    className="mv-card__watermark-img"
                    priority={false}
                  />
                </div>
                <h2 className="mv-card__title">OUR VISION</h2>
                <div className="mv-card__panel">
                  <p className="mv-card__text">
                    To become a trusted event and brand solutions partner known for creating meaningful experiences, building strong connections and bringing ideas to life.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 04. Operating Principles */}
        <section className="section" aria-labelledby="about-principles-title">
          <div className="wrap">
            <header className="principles-head">
              <h2 id="about-principles-title" className="principles-head__title">OPERATING PRINCIPLES</h2>
              <p className="principles-head__sub">Leadership Operating Principles</p>
              <p className="principles-head__desc">
                Four standards that guide how Flashax plans, coordinates and delivers every project.
              </p>
            </header>

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
                GET A PROPOSAL
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" icon="up-right">
                EXPLORE SERVICES
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}