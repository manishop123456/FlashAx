import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Our Services | FLASHAX EVENT SOLUTIONS",
  description:
    "Explore Flashax's seven core service divisions: Event Management, Event Production, Brand Activation, Campus Marketing, Digital Marketing, Corporate Gifting, and CSR Programs.",
};

const SERVICES_FAQS = [
  {
    question: "Can we hire Flashax for a single service or only complete projects?",
    answer: (
      <p>
        Every division operates independently. You can engage us specifically for an individual service — such as
        production support, campus marketing, or corporate gifting — or combine multiple divisions under a single
        coordinated brief.
      </p>
    ),
  },
  {
    question: "How are project responsibilities and specialist partners coordinated?",
    answer: (
      <p>
        Flashax directly leads strategy, concept planning, creative direction, and project coordination. When specialist
        technical rigging, large-scale fabrication, or specialized talent is required, we coordinate vetted partners while
        maintaining single-source accountability for the agreed brief.
      </p>
    ),
  },
  {
    question: "What is the typical timeline and proposal process?",
    answer: (
      <p>
        After reviewing your enquiry details, we schedule an initial discovery discussion to understand your objectives,
        audience, location, and parameters before delivering an itemised scope and timeline proposal.
      </p>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          titleId="services-page-title"
          eyebrow="OUR SERVICES"
          titleLines={["SEVEN DIVISIONS.", "ONE CO-ORDINATED TEAM."]}
          lead="From event management and brand activations to campus marketing, digital solutions and educational programs, explore Flashax's integrated service divisions."
        />

        <section className="section" aria-labelledby="services-list-title">
          <div className="wrap">
            <h2 id="services-list-title" className="sr-only">
              All Seven Service Divisions
            </h2>
            <div className="svc-list" role="list">
              {services.map((s) => (
                <article key={s.slug} className="card svc-row" role="listitem">
                  <div className="svc-row__media">
                    <ServiceVisual slug={s.slug} />
                  </div>
                  <div className="svc-row__body">
                    <span className="svc-row__num">SERVICE {s.number}</span>
                    <h3 className="svc-row__title">{s.title}</h3>
                    <p className="svc-row__text">{s.fullDescription}</p>

                    <div>
                      <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold)", marginBottom: "0.6rem" }}>
                        Key Capabilities &amp; Subservices
                      </h4>
                      <ul
                        className="ticks"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "0.4rem 1.25rem",
                        }}
                        aria-label={`${s.title} subservices`}
                      >
                        {s.offerings.map((offering) => (
                          <li key={offering} style={{ fontSize: "var(--fs-small)" }}>
                            {offering}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/services/${s.slug}`} className="link-arrow">
                      EXPLORE {s.title.toUpperCase()}
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Services FAQ Section */}
            <div style={{ marginTop: "5rem" }}>
              <SectionHeading
                eyebrow="SERVICES FAQ"
                lines={["FREQUENTLY ASKED QUESTIONS"]}
                lead="Answers to common questions about engaging Flashax across single or multiple service divisions."
              />
              <div style={{ marginTop: "2rem" }}>
                <Accordion items={SERVICES_FAQS} label="Services FAQ accordion" />
              </div>
            </div>

            {/* Multi-Service Project Callout */}
            <div className="callout">
              <div>
                <h3 className="callout__title">Need a combination of services?</h3>
                <p>
                  Most client projects span multiple divisions. We provide one dedicated project lead to coordinate everything
                  so you never have to manage separate vendors or deal with misaligned handovers.
                </p>
              </div>
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                START A PROJECT
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}