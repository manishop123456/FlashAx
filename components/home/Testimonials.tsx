import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function Testimonials() {
  return (
    <section id="testimonials" className="section section--alt" aria-labelledby="proof-title">
      <div className="wrap">
        <header className="proof-head">
          <h2 id="proof-title" className="proof-head__title">WHAT CLIENTS SAY</h2>
          <p className="proof-head__sub">Built on Trust and Communication</p>
          <p className="proof-head__desc">
            We believe good working relationships begin with clear expectations, thoughtful planning and open communication. We aim to make every project a collaborative process from the first discussion to final execution.
          </p>
        </header>

        <div className="proof">
          <article className="card proof__card">
            <span className="proof__mark" aria-hidden="true">&ldquo;</span>
            <h3 className="proof__title">Client testimonials under approval</h3>
            <p className="proof__text">
              We respect client non-disclosure agreements and brand guidelines. Signed endorsements from our corporate,
              campus and agency partners are published only with explicit written consent.
            </p>
            <div className="proof__cta">
              <ButtonLink href="/contact" variant="secondary" size="sm" icon="up-right">
                GET A PROPOSAL
              </ButtonLink>
            </div>
          </article>

          <article className="card proof__card">
            <span className="proof__mark" aria-hidden="true">&</span>
            <h3 className="proof__title">Ecosystem & vendor partners</h3>
            <p className="proof__text">
              For specialist requirements such as heavy fabrication, technical rigging or niche talent, Flashax
              coordinates with vetted vendor networks across major Indian cities.
            </p>
            <div className="proof__slots" aria-hidden="true">
              <span className="proof__slot">Production</span>
              <span className="proof__slot">Venues</span>
              <span className="proof__slot">Campus Leads</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}