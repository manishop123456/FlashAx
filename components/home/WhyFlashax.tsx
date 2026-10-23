import { ButtonLink } from "@/components/ui/Button";

const principles = [
  {
    number: "01",
    title: "BUILT AROUND YOUR GOALS",
    text: "We consider your objectives, audience, budget and timeline before recommending a suitable approach.",
  },
  {
    number: "02",
    title: "ONE COORDINATED TEAM",
    text: "We coordinate the relevant planning, creative work, production and specialist partners required for the agreed project scope.",
  },
  {
    number: "03",
    title: "FLEXIBLE SERVICES",
    text: "Clients can enquire about individual services or a connected project covering multiple service divisions.",
  },
  {
    number: "04",
    title: "CLEAR COMMUNICATION",
    text: "A structured approach to responsibilities, timelines and project updates helps clients understand the delivery process.",
  },
];

export function WhyFlashax() {
  return (
    <section id="why-flashax" className="section section--alt" aria-labelledby="why-title">
      <div className="wrap">
        <div className="why-grid">
          <div className="why-content">
            <h2 id="why-title" className="why-content__title">
              <span className="why-content__title--ivory">WHY </span>
              <span className="why-content__title--gold">FLASHAX?</span>
            </h2>
            <p className="why-content__sub">The Difference Is in the Execution.</p>
            <p className="why-content__desc">
              Every project starts with understanding what you want to achieve. We focus on clear planning, suitable solutions and coordinated execution.
            </p>
            <div className="why-content__cta">
              <ButtonLink href="/contact" variant="primary" icon="up-right">
                DISCUSS YOUR PROJECT
              </ButtonLink>
            </div>
          </div>

          <div className="why-principles" role="list">
            {principles.map((p, i) => (
              <article key={p.number} className="principle-row" role="listitem">
                <span className="principle-row__num" aria-hidden="true">{p.number}</span>
                <div className="principle-row__content">
                  <h3 className="principle-row__title">{p.title}</h3>
                  <p className="principle-row__text">{p.text}</p>
                </div>
                {i < principles.length - 1 && <hr className="principle-row__divider" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}