import { capabilities } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Compass, Sparkles, Hammer, Megaphone } from "lucide-react";

const ICONS = {
  plan: Compass,
  create: Sparkles,
  produce: Hammer,
  amplify: Megaphone,
} as const;

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="section" aria-labelledby="who-title">
      <div className="wrap">
        <div className="who">
          <div>
            <SectionHeading
              id="who-title"
              eyebrow="WHO WE ARE"
              lines={["ONE PARTNER.", "MULTIPLE POSSIBILITIES."]}
              lead="Flashax brings planning, creative thinking, production and promotion together so clients can choose individual services or coordinate a complete project through one company."
            />
            <div className="who__actions">
              <ButtonLink href="/services" variant="secondary" icon="up-right">
                EXPLORE SERVICES
              </ButtonLink>
            </div>
          </div>

          <div className="cap-grid" role="list">
            {capabilities.map((cap, i) => {
              const Icon = ICONS[cap.key];
              return (
                <article key={cap.key} className="card cap" role="listitem">
                  <div className="cap__top">
                    <span className="cap__icon" aria-hidden="true">
                      <Icon strokeWidth={1.75} />
                    </span>
                    <span className="cap__num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="cap__title">{cap.title}</h3>
                  <p className="cap__text">{cap.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}