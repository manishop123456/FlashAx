import Link from "next/link";
import { ArrowUpRight, Building2, GraduationCap, Flame, CalendarClock, HeartHandshake } from "lucide-react";
import { audiences } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const ICONS = {
  corporates: Building2,
  colleges: GraduationCap,
  brands: Flame,
  organisers: CalendarClock,
  ngos: HeartHandshake,
} as const;

export function Audiences() {
  return (
    <section id="audiences" className="section" aria-labelledby="audiences-title">
      <div className="wrap">
        <SectionHeading
          id="audiences-title"
          eyebrow="WHO WE WORK WITH"
          align="center"
          lines={["TAILORED FOR", "DIVERSE PARTNERS."]}
          lead="Five distinct audience pathways. Each with distinct needs, all served with the same strategic rigour and production craft."
        />

        <div className="aud-grid" role="list">
          {audiences.map((aud) => {
            const Icon = ICONS[aud.key];
            return (
              <article key={aud.key} className="card aud" role="listitem">
                <span className="aud__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} />
                </span>
                <h3 className="aud__title">{aud.title}</h3>
                <p className="aud__text">{aud.text}</p>
                <div className="chips">
                  {aud.services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="chip">
                      {s.label}
                    </Link>
                  ))}
                </div>
                <Link href={aud.href} className="link-arrow">
                  EXPLORE PATHWAY
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="aud__foot">
          <ButtonLink href="/contact" variant="secondary" icon="up-right">
            GET A PROPOSAL
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}