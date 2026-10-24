import { ButtonLink } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="final-cta" className="final" aria-labelledby="cta-title">
      <div className="wrap">
        <header className="final-head">
          <h2 id="cta-title" className="final-head__title">
            <span className="line">HAVE AN IDEA?</span>
            <span className="line gold">LET&apos;S MAKE IT HAPPEN.</span>
          </h2>
          <p className="final-head__desc">
            Tell us what you&apos;re planning. We&apos;ll discuss your requirements and the right services to help bring your project to life.
          </p>
        </header>
        <div className="final__actions">
          <ButtonLink href="/contact" variant="primary" icon="up-right">
            GET A PROPOSAL
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            EXPLORE SERVICES
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}