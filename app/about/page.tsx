import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Flashax — our founders, our approach to experiences, and our seven integrated service divisions.",
};

const VALUES = [
  {
    n: "01",
    title: "Accountability",
    desc: "One dedicated project lead. Clear milestones, transparent budgets and no hidden surprises.",
  },
  {
    n: "02",
    title: "Creative Rigour",
    desc: "Ideas backed by strategic intent. Concepts designed to solve real business goals, not just look impressive.",
  },
  {
    n: "03",
    title: "True Partnership",
    desc: "We measure success by your outcomes. Long-term collaborative relationships over one-off transactions.",
  },
  {
    n: "04",
    title: "Complete Integrity",
    desc: "Honest about in-house capabilities. Transparent about partners. Zero fabricated claims or inflated stats.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          titleId="about-page-title"
          eyebrow="ABOUT FLASHAX"
          titleLines={["WHERE ENGAGEMENT", "SPARKS SUCCESS."]}
          lead="We create moments that move people through strategic creative thinking and coordinated on-ground execution."
        />

        <section className="section" aria-labelledby="about-approach-title">
          <div className="wrap">
            <div className="about-grid">
              <div>
                <SectionHeading
                  id="about-approach-title"
                  eyebrow="OUR PHILOSOPHY"
                  lines={["ARCHITECTED WITH INTENTION"]}
                  lead="Flashax was founded on the conviction that memorable experiences don't happen by accident — they are engineered through creative ambition and operational discipline."
                />
                <div className="prose" style={{ marginTop: "1.75rem" }}>
                  <p>
                    From corporate annual conventions and college cultural festivals to high-impact brand activations
                    and CSR programmes, every Flashax project runs through our five-phase framework: Discover,
                    Strategise, Coordinate, Execute and Review.
                  </p>
                  <p>
                    Our leadership brings together complementary backgrounds in large-scale event production, brand
                    marketing and campus engagement networks. Together, we build teams that operate as a genuine
                    partner to your internal stakeholders.
                  </p>
                  <p>
                    We operate with transparency: our core planning, creative direction and project coordination are
                    led directly by Flashax. When specialist requirements arise — such as heavy architectural
                    fabrication, aerial rigging or niche technical systems — we coordinate vetted partners while
                    retaining sole accountability for the outcome.
                  </p>
                </div>
              </div>

              <div className="stack">
                <div className="card person">
                  <h3 className="section-head__title" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                    LEADERSHIP
                  </h3>
                  <div className="people">
                    <div>
                      <p className="person__role">FOUNDER</p>
                      <h4 className="person__name">{siteConfig.founder}</h4>
                    </div>
                  </div>
                </div>

                <div className="card panel">
                  <h3 className="panel__title">Our Commitment to Transparency</h3>
                  <ul className="ticks">
                    <li>Never invent clients, testimonials, numbers or awards</li>
                    <li>Always clarify in-house scope versus partner coordination</li>
                    <li>Provide itemized, honest budget breakdowns without hidden costs</li>
                    <li>Deliver on agreed briefs with verified outcomes</li>
                  </ul>
                </div>

                <div className="card panel">
                  <h3 className="panel__title">Seven Core Divisions</h3>
                  <ul className="cap-list">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`}>{s.title}</Link>
                        <span>{s.number}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" aria-labelledby="about-values-title">
          <div className="wrap">
            <SectionHeading
              id="about-values-title"
              eyebrow="CORE PRINCIPLES"
              align="center"
              lines={["HOW WE OPERATE"]}
              lead="Four guiding principles that shape every project delivery and client relationship."
            />

            <div className="values" role="list">
              {VALUES.map((v) => (
                <article key={v.title} className="card value" role="listitem">
                  <span className="value__n">{v.n}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="about-cta-title">
          <div className="wrap text-center">
            <SectionHeading
              id="about-cta-title"
              eyebrow="START A CONVERSATION"
              align="center"
              lines={["READY TO BUILD SOMETHING?"]}
              lead="Whether you have an established brief or are exploring initial concepts, our team is ready to assist."
            />
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                START A PROJECT
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" icon="up-right">
                EXPLORE ALL SERVICES
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}