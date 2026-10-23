import { deliveryStandards } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function Impact() {
  return (
    <section id="impact" className="section" aria-labelledby="impact-title">
      <div className="wrap">
        <header className="impact-head">
          <p className="eyebrow">OUR IMPACT</p>
          <h2 id="impact-title" className="impact-head__title">OUR IMPACT</h2>
          <p className="impact-head__sub">Meaningful Work. Thoughtful Execution.</p>
          <p className="impact-head__desc">
            We deliver meaningful impact through creative ambition, disciplined coordination, and verified execution standards rather than unverified commercial claims.
          </p>
        </header>

        <div className="facts" role="list">
          {deliveryStandards.map((std) => (
            <article key={std.title} className="fact" role="listitem">
              <span className="fact__value">{std.num}</span>
              <h3 className="fact__label">{std.title}</h3>
              <p className="fact__text">{std.text}</p>
            </article>
          ))}
        </div>

        <div className="impact__note">
          <div>
            <strong>Confidentiality & verified metrics:</strong> Detailed attendance figures, campus participation data, and
            campaign analytics are shared directly with prospective clients during discovery under mutual confidentiality.
          </div>
          <ButtonLink href="/contact" variant="secondary" size="sm" icon="up-right">
            GET A PROPOSAL
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}