import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Flashax's seven service divisions — Event Management, Exhibitions, Production, Brand Activation, Campus Connect, Digital Creative, and CSR Programs.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          titleId="services-page-title"
          eyebrow="OUR CAPABILITIES"
          titleLines={["SEVEN DIVISIONS.", "ONE SEAMLESS PARTNER."]}
          lead="Each division operates independently or as part of an integrated solution. Select a service to explore capabilities, process and deliverables."
        />

        <section className="section" aria-labelledby="services-list-title">
          <div className="wrap">
            <h2 id="services-list-title" className="sr-only">
              All Services
            </h2>
            <div className="svc-list" role="list">
              {services.map((s) => (
                <article key={s.slug} className="card svc-row" role="listitem">
                  <div className="svc-row__media">
                    <ServiceVisual slug={s.slug} />
                  </div>
                  <div className="svc-row__body">
                    <span className="svc-row__num">DIVISION {s.number}</span>
                    <h3 className="svc-row__title">{s.title}</h3>
                    <p className="svc-row__text">{s.fullDescription}</p>
                    <ul className="ticks" aria-label={`${s.title} key offerings`}>
                      {s.offerings.slice(0, 4).map((offering) => (
                        <li key={offering}>{offering}</li>
                      ))}
                    </ul>
                    <Link href={`/services/${s.slug}`} className="link-arrow">
                      EXPLORE FULL DIVISION
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="callout">
              <div>
                <h3 className="callout__title">Need a combination of services?</h3>
                <p>
                  Most projects span multiple divisions. We provide one dedicated project lead to coordinate everything
                  so you never have to juggle separate vendors.
                </p>
              </div>
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                START A MULTI-SERVICE PROJECT
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}