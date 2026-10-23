import { Metadata } from "next";
import { notFound } from "next/navigation";
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

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const PROCESS_STEPS = [
  { title: "Discover", text: "Understand objectives, audience, venue constraints and deliverables." },
  { title: "Strategise", text: "Shape the concept, creative direction, resource plan and milestones." },
  { title: "Coordinate", text: "Line up specialists, vendors, permits, logistics and equipment." },
  { title: "Execute", text: "On-site direction, real-time quality control and flawless delivery." },
  { title: "Review", text: "Evaluate outcomes against the brief and capture insights for next time." },
];

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = service.relatedServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  const faqs = [
    {
      question: `What is included in ${service.title}?`,
      answer: <p>{service.fullDescription}</p>,
    },
    {
      question: "Can I hire this service as a standalone engagement?",
      answer: (
        <p>
          Yes. Every division operates independently. You can engage us specifically for {service.title} or combine it
          with other services under a single coordinated agreement.
        </p>
      ),
    },
    {
      question: "Does Flashax handle all specialist work in-house?",
      answer: (
        <p>
          Core strategy, planning, creative and production leadership are led in-house. When highly specialized
          elements (large-scale custom fabrication, specialized technical machinery) are needed, we coordinate vetted
          partners while remaining your single accountable contact.
        </p>
      ),
    },
    {
      question: "How do we receive a detailed scope and quotation?",
      answer: (
        <p>
          Submit the project enquiry form with your tentative date and requirements. We review it and schedule a
          discovery call to establish scope before preparing a proposal.
        </p>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          titleId="service-detail-title"
          eyebrow={`SERVICE DIVISION ${service.number}`}
          titleLines={[service.title]}
          lead={service.shortDescription}
          aside={
            <div className="visual-frame">
              <ServiceVisual slug={service.slug} />
            </div>
          }
        />

        <section className="section" aria-labelledby="service-overview-title">
          <div className="wrap">
            <div className="detail">
              <div className="detail__main">
                <div>
                  <SectionHeading
                    id="service-overview-title"
                    eyebrow="CAPABILITY SCOPE"
                    lines={["WHAT WE DELIVER"]}
                    lead={service.fullDescription}
                  />
                  <div className="offers" role="list">
                    {service.offerings.map((offering, i) => (
                      <div key={offering} className="card offer" role="listitem">
                        <span className="offer__n">{String(i + 1).padStart(2, "0")}</span>
                        <p>{offering}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading
                    eyebrow="EXECUTION FRAMEWORK"
                    lines={["OUR DELIVERY PROCESS"]}
                    lead="How this division coordinates every stage from the initial brief to post-project review."
                  />
                  <div className="mini-steps" role="list">
                    {PROCESS_STEPS.map((st, i) => (
                      <article key={st.title} className="mini-step" role="listitem">
                        <span className="mini-step__n">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <h3>{st.title}</h3>
                          <p>{st.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading
                    eyebrow="DIVISION FAQS"
                    lines={["FREQUENTLY ASKED"]}
                    lead={`Key questions regarding ${service.title} delivery and engagement.`}
                  />
                  <div style={{ marginTop: "1.5rem" }}>
                    <Accordion items={faqs} label={`${service.title} FAQs`} />
                  </div>
                </div>
              </div>

              <aside className="detail__side">
                <div className="card panel">
                  <h3 className="panel__title">Start a Project</h3>
                  <p>Ready to discuss {service.title} for your upcoming event or campaign?</p>
                  <ButtonLink href={`/contact?service=${service.slug}`} variant="primary" icon="up-right" block>
                    GET A PROPOSAL
                  </ButtonLink>
                </div>

                {related.length > 0 && (
                  <div className="card panel">
                    <h3 className="panel__title">Related Divisions</h3>
                    <div className="related">
                      {related.map((rel) => (
                        <Link key={rel.slug} href={`/services/${rel.slug}`}>
                          <span>{rel.title}</span>
                          <ArrowUpRight aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}