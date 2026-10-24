import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";
import {
  Target,
  Compass,
  MessageSquare,
  Shield,
  Link2,
  RefreshCw,
  Users,
  TrendingUp,
} from "lucide-react";
import { WhyFlashax, ABOUT_DIFFERENTIATORS } from "@/components/home/WhyFlashax";

export const metadata: Metadata = {
  title: "About Us | FLASHAX EVENT SOLUTIONS",
  description:
    "Learn about Flashax Event Solutions — our Mumbai-based event management and brand experience company, founder Mukesh Choudhary, and our core operating principles.",
};

const OPERATING_PRINCIPLES = [
  {
    number: "01",
    title: "UNDERSTAND BEFORE WE PLAN",
    desc: "We begin by understanding the client's objectives, target audience, budget, timeline and expectations before recommending a suitable solution.",
    icon: Target,
  },
  {
    number: "02",
    title: "PLAN WITH PURPOSE",
    desc: "We approach every project with clear priorities, practical timelines and organised coordination to help keep activities aligned with the agreed scope.",
    icon: Compass,
  },
  {
    number: "03",
    title: "COMMUNICATE CLEARLY",
    desc: "We believe in open discussions, timely updates and clear expectations so that clients understand the plan, responsibilities and next steps.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "BE TRANSPARENT AND RESPONSIBLE",
    desc: "We aim to communicate costs, deliverables, dependencies and limitations honestly. Any changes to the agreed scope should be discussed with the client before proceeding.",
    icon: Shield,
  },
  {
    number: "05",
    title: "COORDINATE WITH CARE",
    desc: "From venues and suppliers to production requirements and event-day activities, we coordinate the relevant people and resources according to each project's needs.",
    icon: Link2,
  },
  {
    number: "06",
    title: "STAY FLEXIBLE AND SOLUTION-FOCUSED",
    desc: "Projects can change, and we aim to respond constructively. We assess alternatives and work with clients to identify practical solutions within the available time, budget and resources.",
    icon: RefreshCw,
  },
  {
    number: "07",
    title: "FOCUS ON THE AUDIENCE EXPERIENCE",
    desc: "Whether it is a corporate event, college festival, brand activation or educational initiative, we consider the audience experience when planning activities and engagement.",
    icon: Users,
  },
  {
    number: "08",
    title: "LEARN AND IMPROVE",
    desc: "We value client feedback and project reviews to identify what worked well, address challenges and improve our approach to future projects.",
    icon: TrendingUp,
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
                    Flashax Event Solutions is a Mumbai-based event management and brand solutions company. We work with businesses, brands, colleges and event partners to plan and coordinate experiences tailored to their objectives.
                  </p>
                  <p>
                    From corporate events and college festivals to brand activations, campus marketing, digital solutions and educational programmes, we bring creative thinking, organised planning and coordinated execution together.
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
                  <p className="founder-head__sub">Mukesh Choudhary — Founder</p>
                </header>
                <div className="founder-desc">
                  <p>
                    Flashax Event Solutions was founded with a focus on helping businesses, brands and colleges bring their ideas to life through events, marketing initiatives and coordinated experiences.
                  </p>
                  <p>
                    The focus is on understanding each client&apos;s requirements, planning carefully and coordinating the resources needed to deliver the agreed project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Mission and Vision */}
        <section className="section mv-section" aria-labelledby="about-mv-title">
          <div className="wrap">
            <header className="section-head section-head--center" style={{ marginBottom: "var(--s-10)" }}>
              <h2 id="about-mv-title" className="section-head__title display">
                Vision & Mission
              </h2>
              <p className="section-head__lead">
                Our purpose and direction — what drives every project we deliver.
              </p>
            </header>

            <div className="mv-grid">
              <article className="mv-card">
                <h3 className="mv-card__title">OUR MISSION</h3>
                <p className="mv-card__text">
                  To help businesses, brands and educational institutions connect with their audiences through thoughtful planning, creative solutions and reliable execution, while building long-term relationships based on trust and transparency.
                </p>
              </article>

              <article className="mv-card">
                <h3 className="mv-card__title">OUR VISION</h3>
                <p className="mv-card__text">
                  To become a trusted event and brand solutions partner known for creating meaningful experiences, building strong connections and bringing ideas to life.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 04. What Makes Flashax Different? */}
        <WhyFlashax
          id="about-diff"
          className="section diff-section"
          heading={
            <>
              <span className="why-content__title-line why-content__title-line--ivory">WHAT MAKES</span>
              <span className="why-content__title-line">
                <span className="why-content__title-line--gold">FLASHAX</span>{" "}
                <span className="why-content__title-line--ivory">DIFFERENT?</span>
              </span>
            </>
          }
          subheading=""
          description="At Flashax Event Solutions, we look beyond individual tasks to understand how each part of a project contributes to the overall objective. Our approach brings events, production, marketing and supporting services together around the client's requirements."
          showCta={false}
          principles={ABOUT_DIFFERENTIATORS}
        >
          <div className="diff-closing">
            <p className="diff-closing__lead">
              For us, every project begins with understanding the purpose behind the idea. The solution follows from there.
            </p>
            <p className="diff-closing__sub">
              We believe in discussing requirements, deliverables, costs and changes openly so that clients know what to expect.
            </p>
          </div>
        </WhyFlashax>

        {/* 05. Our Operating Principles */}
        <section className="section section--alt" aria-labelledby="about-principles-title">
          <div className="wrap">
            <header className="principles-head">
              <h2 id="about-principles-title" className="principles-head__title">
                OPERATING PRINCIPLES
              </h2>
              <p className="principles-head__desc">
                At Flashax Event Solutions, we believe successful projects are built on clear communication, thoughtful planning and responsible execution. These principles guide the way we understand requirements, develop solutions, coordinate resources and work towards our clients&apos; objectives.
              </p>
            </header>

            <div className="principles-editorial-grid" role="list">
              {OPERATING_PRINCIPLES.map((item) => (
                <article key={item.number} className="principle-item" role="listitem">
                  <div className="principle-item__meta">
                    <span className="principle-item__num" aria-hidden="true">
                      {item.number}
                    </span>
                    <item.icon
                      className="principle-item__icon"
                      aria-hidden="true"
                      size={24}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="principle-item__title">{item.title}</h3>
                  <p className="principle-item__text">{item.desc}</p>
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