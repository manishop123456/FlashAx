import type { ReactNode } from "react";

/** Shared hero for interior pages. Offsets itself below the fixed header. */
export function PageHero({
  eyebrow,
  titleLines,
  lead,
  aside,
  titleId,
}: {
  eyebrow: string;
  titleLines: ReactNode[];
  lead?: ReactNode;
  aside?: ReactNode;
  titleId: string;
}) {
  return (
    <section className="page-hero" aria-labelledby={titleId}>
      <div className="wrap">
        <div className={`page-hero__grid ${aside ? "page-hero__grid--split" : ""}`.trim()}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 id={titleId} className="page-hero__title">
              {titleLines.map((line, i) => (
                <span key={i} className="line">
                  {line}
                </span>
              ))}
            </h1>
            {lead && <p className="page-hero__lead">{lead}</p>}
          </div>
          {aside && <div className="page-hero__aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
