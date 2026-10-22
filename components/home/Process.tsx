import { processSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section section--alt" aria-labelledby="process-title">
      <div className="wrap">
        <SectionHeading
          id="process-title"
          eyebrow="OUR PROCESS"
          align="center"
          lines={["FROM BRIEF TO APPLAUSE.", "OUR FIVE PHASES."]}
          lead="A disciplined framework that adapts to your scope — whether you need a single specialist deliverable or full-scale production."
        />

        <div className="timeline" role="list">
          {processSteps.map((step, i) => (
            <article key={step.title} className="step" role="listitem">
              <span className="step__node">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
              <ul className="ticks" aria-label={`${step.title} key activities`}>
                {step.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="process__note">
          The process flexes to your needs. A single-service engagement might only require Coordinate and Execute, while a full festival or launch runs all five phases under a dedicated project lead.
        </p>
      </div>
    </section>
  );
}