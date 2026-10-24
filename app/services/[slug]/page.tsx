import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { DivisionVisual } from "@/components/ui/DivisionVisual";
import { servicesData, type FullService } from "@/lib/servicesData";

interface Props {
  params: { slug: string };
}

function resolveService(slug: string): FullService | undefined {
  const normalized =
    slug === "csr-programs" || slug === "csr-education"
      ? "csr-initiatives"
      : slug === "production-operations" || slug === "exhibitions"
      ? "event-production"
      : slug === "campus-connect"
      ? "campus-marketing"
      : slug === "digital-creative"
      ? "digital-marketing"
      : slug;
  return servicesData.find((s) => s.slug === normalized);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = resolveService(params.slug);
  if (!service) return { title: "Service Not Found | FLASHAX EVENT SOLUTIONS" };
  return {
    title: `${service.title} | FLASHAX EVENT SOLUTIONS`,
    description: service.mainDescription,
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: Props) {
  const service = resolveService(params.slug);
  if (!service) notFound();

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* SECTION 01 — SERVICE HERO */}
        <section className="svc-detail-hero" aria-labelledby="service-detail-title">
          <div className="wrap">
            <nav className="svc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/services" className="svc-breadcrumb__link">
                <ArrowLeft size={14} aria-hidden="true" />
                <span>BACK TO SERVICES</span>
              </Link>
            </nav>

            <div className="svc-lead-block">
              <div className="svc-lead-block__content">
                <h1 id="service-detail-title" className="svc-lead-block__title">
                  {service.title}
                </h1>
                <p className="svc-lead-block__desc">{service.mainDescription}</p>

                {service.disclaimer && (
                  <aside
                    className="svc-lead-block__disclaimer"
                    role="note"
                    aria-label={`${service.title} scope notice`}
                  >
                    <p>{service.disclaimer}</p>
                  </aside>
                )}

                <div className="svc-lead-block__actions">
                  <ButtonLink
                    href={`/contact?service=${service.slug}`}
                    variant="primary"
                    icon="up-right"
                  >
                    GET A PROPOSAL
                  </ButtonLink>
                </div>
              </div>

              <div className="svc-lead-block__visual" aria-hidden="true">
                <ServiceVisual slug={service.slug} />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 & 03 — SERVICE OFFERINGS (Alternating Editorial Layout) */}
        <section className="svc-divisions-section" aria-label={`${service.title} offerings`}>
          <div className="wrap">
            <div className="division-list" role="list">
              {service.divisions.map((div, divIndex) => {
                const isEven = divIndex % 2 === 1;
                return (
                  <article
                    key={div.title}
                    className={`division-row ${isEven ? "division-row--even" : ""}`}
                    role="listitem"
                  >
                    <div className="division-row__content">
                      <h3 className="division-row__title">{div.title}</h3>
                      <p className="division-row__desc">{div.description}</p>
                    </div>

                    <div className="division-row__media">
                      <DivisionVisual
                        visualKey={div.visualKey}
                        title={div.title}
                        divisionNumber={div.divisionNumber}
                        serviceSlug={service.slug}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 04 — SERVICE-SPECIFIC ENQUIRY CTA */}
        <section className="services-enquiry" aria-labelledby="service-enquiry-title">
          <div className="wrap services-enquiry__inner">
            <span className="svc-lead-block__num">LET&apos;S CONNECT</span>
            <h2 id="service-enquiry-title" className="services-enquiry__title">
              READY TO DISCUSS {service.title}?
            </h2>
            <p className="services-enquiry__text">
              Tell us what you are planning, and let&apos;s discuss how Flashax Event Solutions can coordinate and deliver your requirements.
            </p>
            <div className="services-enquiry__cta">
              <ButtonLink
                href={`/contact?service=${service.slug}`}
                variant="primary"
                icon="up-right"
              >
                GET A PROPOSAL
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* SECTION 05 — RETURN NAVIGATION */}
        <nav className="svc-return-nav" aria-label="Explore other services">
          <div className="wrap svc-return-nav__inner">
            <div className="svc-return-nav__header">
              <Link href="/services" className="svc-breadcrumb__link">
                <ArrowLeft size={16} aria-hidden="true" />
                <span>VIEW ALL SERVICES OVERVIEW</span>
              </Link>
              <span className="svc-return-nav__hint">Explore other service categories:</span>
            </div>
            <div className="svc-return-nav__grid">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="svc-return-nav__item"
                >
                  <span className="svc-return-nav__num">{other.number.split("/")[0]}</span>
                  <span className="svc-return-nav__title">{other.title}</span>
                  <ArrowUpRight size={14} aria-hidden="true" className="svc-return-nav__arrow" />
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}