import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceVisual } from "@/components/ui/ServiceVisual";

export function ServicesGrid() {
  return (
    <section id="services" className="section services section--alt" aria-labelledby="services-title">
      <div className="wrap">
        <header className="svc-head">
          <h2 id="services-title" className="svc-head__title">OUR SERVICES</h2>
          <p className="svc-head__sub">Everything Your Idea Needs. All in One Place.</p>
          <p className="svc-head__desc">
            From corporate events and college festivals to brand campaigns, digital marketing and corporate gifting,
            Flashax offers services to help you plan, promote and execute your next project.
          </p>
        </header>

        <div className="svc-grid" role="list">
          {services.map((s) => (
            <article key={s.slug} className="card svc" role="listitem">
              <div className="svc__media">
                <ServiceVisual
                  slug={s.slug}
                  imageSrc={s.image}
                  alt={`${s.title} — Flashax Event Solutions`}
                />
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
            EXPLORE SERVICES
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}