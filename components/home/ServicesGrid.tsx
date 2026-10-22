import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";

export function ServicesGrid() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHeading
          id="services-title"
          eyebrow="CORE SERVICES"
          align="center"
          lines={["EVERYTHING YOUR IDEA NEEDS.", "ALL IN ONE PLACE."]}
          lead="Seven specialized divisions. One seamless partner. Each service operates independently or as part of an integrated solution."
        />

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
                <Link href={`/services/${s.slug}`} className="link-arrow stretched">
                  EXPLORE SERVICE
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services__foot">
          <ButtonLink href="/services" variant="secondary" icon="up-right">
            VIEW ALL SERVICES
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}