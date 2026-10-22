import { principles } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyFlashax() {
  return (
    <section id="why-flashax" className="section section--alt" aria-labelledby="why-title">
      <div className="wrap">
        <div className="why">
          <div className="why__head">
            <SectionHeading
              id="why-title"
              eyebrow="WHY FLASHAX"
              lines={["THE DIFFERENCE IS", "IN THE EXECUTION."]}
              lead="Four principles that define how we work — whether you need end-to-end delivery or a single specialist capability."
            />
          </div>

          <div className="why__list" role="list">
            {principles.map((pr, i) => (
              <article key={pr.title} className="why-row" role="listitem">
                <span className="why-row__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="why-row__title">{pr.title}</h3>
                  <p className="why-row__text">{pr.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}