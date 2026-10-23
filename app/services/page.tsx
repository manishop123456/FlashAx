import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Our Services | FLASHAX EVENT SOLUTIONS",
  description:
    "From corporate events and college festivals to brand campaigns, digital marketing and corporate gifting, Flashax offers services to help you plan, promote and execute your next project.",
};

const SERVICES_FAQS = [
  {
    question: "Can we hire Flashax for a single service or only complete projects?",
    answer: (
      <p>
        Every division operates independently. You can engage us specifically for an individual service — such as
        event production, campus marketing, or corporate gifting — or combine multiple divisions under a single
        coordinated brief.
      </p>
    ),
  },
  {
    question: "How are project responsibilities and specialist partners coordinated?",
    answer: (
      <p>
        Flashax directly leads planning, creative direction and project coordination. When specialist technical
        rigging, large-scale fabrication, or specialized talent is required, we coordinate vetted partners while
        maintaining single-source accountability for the agreed brief.
      </p>
    ),
  },
  {
    question: "What is the typical timeline and proposal process?",
    answer: (
      <p>
        After reviewing your enquiry details, we schedule an initial discovery discussion to understand your objectives,
        audience, location and parameters before delivering an itemised scope and timeline proposal.
      </p>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* Services Page Hero: Inverted visual hierarchy with dominant H1 */}
        <section className="svc-hero" aria-labelledby="services-h1">
          <div className="wrap svc-hero__inner">
            <span className="svc-hero__eyebrow">WHAT WE OFFER</span>

            <h1 id="services-h1" className="svc-hero__h1">
              OUR SERVICES
            </h1>

            <p className="svc-hero__subheadline">
              Everything Your Idea Needs. All in One Place.
            </p>

            <p className="svc-hero__desc">
              From corporate events and college festivals to brand campaigns, digital marketing and corporate gifting,
              Flashax offers services to help you plan, promote and execute your next project.
            </p>

            <div className="svc-hero__actions">
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                GET A PROPOSAL
              </ButtonLink>
              <ButtonLink href="#service-catalogue" variant="secondary" icon="down">
                EXPLORE SERVICES
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* 7 Services Catalogue Grid */}
        <section id="service-catalogue" className="section" aria-labelledby="catalogue-title">
          <div className="wrap">
            <h2 id="catalogue-title" className="sr-only">
              Flashax Service Categories
            </h2>

            <div className="svc-grid" role="list">
              {services.map((s) => (
                <article key={s.slug} className="card svc" role="listitem">
                  <div className="svc__media">
                    <span className="svc__num">{s.number}</span>
                    <ServiceVisual slug={s.slug} />
                  </div>
                  <div className="svc__body">
                    <h3 className="svc__title">{s.title}</h3>
                    <p className="svc__text">{s.shortDescription}</p>

                    <ul
                      className="ticks"
                      style={{
                        margin: "0.25rem 0 0.5rem",
                        padding: 0,
                        display: "grid",
                        gap: "0.35rem",
                      }}
                      aria-label={`${s.title} key capabilities`}
                    >
                      {s.offerings.slice(0, 4).map((offering) => (
                        <li key={offering} style={{ fontSize: "var(--fs-small)" }}>
                          {offering}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/services/${s.slug}`} className="link-arrow">
                      EXPLORE SERVICE
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
                GET A PROPOSAL
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}