import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { DivisionVisual } from "@/components/ui/DivisionVisual";
import { servicesData } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "Our Services | FLASHAX EVENT SOLUTIONS",
  description:
    "From planning memorable events to building brand experiences and engaging audiences, Flashax Event Solutions offers coordinated solutions for businesses, colleges and organisations.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* 1. Services Page Introduction */}
        <section className="svc-hero" aria-labelledby="services-h1">
          <div className="wrap svc-hero__inner">
            <h1 id="services-h1" className="svc-hero__h1">
              OUR SERVICES
            </h1>

            <p className="svc-hero__desc">
              From planning memorable events to building brand experiences and engaging audiences, Flashax Event
              Solutions offers coordinated solutions for businesses, colleges and organisations. Explore our services to
              understand how we can support your next project.
            </p>

            <div className="svc-hero__actions">
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                DISCUSS YOUR PROJECT
              </ButtonLink>
              <ButtonLink href="#event-management" variant="secondary" icon="down">
                EXPLORE OUR SERVICES
              </ButtonLink>
            </div>

            {/* Seven Services Overview Showcase */}
            <div className="svc-hero__overview">
              <div className="svc-hero__overview-frame">
                <Image
                  src="/images/services/seven-services-overview.png"
                  alt="Flashax Seven Services Overview — Event Management, Event Production, Brand Activation, Campus Marketing, Digital Marketing, CSR Initiatives, and Corporate Gifting"
                  width={1500}
                  height={1000}
                  priority
                  className="svc-hero__overview-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1080px"
                  unoptimized
                />
                <div className="svc-hero__overview-overlay" />
                <div className="svc-hero__overview-badge">
                  <span>7 Core Capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Quick Navigation Anchor Bar */}
        <nav className="svc-quicknav" aria-label="Service categories quick navigation">
          <div className="svc-quicknav__inner wrap">
            {servicesData.map((svc) => (
              <a key={svc.slug} href={`#${svc.anchorId}`} className="svc-quicknav__link">
                <span>{svc.number.split("/")[0]}.</span>
                <span>{svc.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 3. Seven Full-Width Service Sections */}
        <div id="service-catalogue">
          {servicesData.map((svc) => (
            <section
              key={svc.slug}
              id={svc.anchorId}
              className="svc-section"
              aria-labelledby={`${svc.slug}-title`}
            >
              <div className="wrap">
                {/* Main Service Introduction: 2-column editorial on desktop */}
                <div className="svc-lead-block">
                  <div className="svc-lead-block__content">
                    <span className="svc-lead-block__num">{svc.number}</span>
                    <h2 id={`${svc.slug}-title`} className="svc-lead-block__title">
                      {svc.title}
                    </h2>
                    <p className="svc-lead-block__desc">{svc.mainDescription}</p>

                    <div className="svc-lead-block__actions">
                      <ButtonLink
                        href={`/contact?service=${svc.slug}`}
                        variant="primary"
                        icon="up-right"
                      >
                        DISCUSS THIS SERVICE
                      </ButtonLink>
                      <ButtonLink
                        href={`/services/${svc.slug}`}
                        variant="secondary"
                        icon="up-right"
                      >
                        VIEW SERVICE GUIDE
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="svc-lead-block__visual" aria-hidden="true">
                    <ServiceVisual
                      slug={svc.slug}
                      imageSrc={svc.image}
                      alt={svc.title}
                    />
                  </div>
                </div>

                <div className="division-list" role="list">
                  {svc.divisions.map((div, divIndex) => {
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
                            serviceSlug={svc.slug}
                            imageSrc={div.imageSrc}
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 4. Multi-Service Integrated Coordination Callout */}
        <div className="wrap">
          <div className="callout" style={{ marginBlock: "clamp(3.5rem, 6vw, 6rem)" }}>
            <div>
              <h3 className="callout__title">Need a combination of services?</h3>
              <p>
                Most client projects span multiple services. We provide one dedicated project lead to coordinate
                everything across events, production, marketing and gifting, so you never have to manage separate vendors
                or misaligned handovers.
              </p>
            </div>
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              GET A PROPOSAL
            </ButtonLink>
          </div>
        </div>

        {/* 5. Final Enquiry Section */}
        <section className="services-enquiry" aria-labelledby="enquiry-heading">
          <div className="wrap services-enquiry__inner">
            <h2 id="enquiry-heading" className="services-enquiry__title">
              Have a Project in Mind?
            </h2>
            <p className="services-enquiry__text">
              Tell us what you are planning, and let&apos;s discuss how Flashax Event Solutions can support your
              requirements.
            </p>
            <div className="services-enquiry__cta">
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                DISCUSS YOUR PROJECT
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}