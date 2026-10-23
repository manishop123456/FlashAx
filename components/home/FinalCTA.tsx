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
          Tell us what you&apos;re planning. We&apos;ll discuss your requirements and the right services to help bring your project to life.
        </p>
        <div className="final__actions">
          <ButtonLink href="/contact" variant="primary" icon="up-right">
            START A PROJECT
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            TALK TO OUR TEAM
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}