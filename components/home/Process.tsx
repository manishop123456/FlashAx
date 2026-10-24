import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="wrap">
        <header className="section-head section-head--center" style={{ marginBottom: "var(--s-10)" }}>
          <h2 id="process-title" className="section-head__title display">
            HOW WE WORK
          </h2>
          <p className="section-head__lead" style={{ color: "var(--gold)", fontWeight: 600, fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", marginBottom: "var(--s-3)" }}>
            From Idea to Execution.
          </p>
          <p className="section-head__lead" style={{ maxWidth: "68ch", marginInline: "auto" }}>
            We follow a clear, collaborative process to understand your requirements, plan the right solution and coordinate the work involved.
          </p>
        </header>

        <div className="timeline" role="list">
          {processSteps.map((step) => (
            <article key={step.number} className="step" role="listitem">
              <span className="step__node" aria-hidden="true">{step.number}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}