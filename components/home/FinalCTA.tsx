import { ButtonLink } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="final-cta" className="final" aria-labelledby="cta-title">
      <div className="wrap">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          LET&apos;S CONNECT
        </p>
        <h2 id="cta-title" className="final__title">
          <span className="line">HAVE AN IDEA?</span>
          <span className="line gold">LET&apos;S MAKE IT HAPPEN.</span>
        </h2>
        <p className="final__lead">
          Tell us what you are planning. We will help you explore the services, approach and next steps that best suit
          your project — from a single specialist service to a full production.
        </p>
        <div className="final__actions">
          <ButtonLink href="/contact" variant="primary" icon="up-right">
            START A PROJECT ENQUIRY
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" icon="up-right">
            EXPLORE ALL SERVICES
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}