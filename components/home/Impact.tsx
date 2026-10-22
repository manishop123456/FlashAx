import { facts } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function Impact() {
  return (
    <section id="impact" className="section" aria-labelledby="impact-title">
      <div className="wrap">
        <SectionHeading
          id="impact-title"
          eyebrow="OUR IMPACT"
          align="center"
          lines={["MEASURED BY RIGOUR.", "BACKED BY STRUCTURE."]}
          lead="Genuine indicators of our scale and capability structure. We share real structural facts rather than inflated counters."
        />

        <div className="facts" role="list">
          {facts.map((f) => (
            <article key={f.label} className="fact" role="listitem">
              <span className="fact__value">{f.value}</span>
              <h3 className="fact__label">{f.label}</h3>
              <p className="fact__text">{f.text}</p>
            </article>
          ))}
        </div>

        <div className="impact__note">
          <div>
            <strong>Confidentiality &amp; verified metrics:</strong> Detailed attendance figures, campaign analytics and
            case summaries are shared directly with prospective clients during discovery under mutual confidentiality.
          </div>
          <ButtonLink href="/contact" variant="secondary" size="sm" icon="up-right">
            REQUEST DISCOVERY
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}