import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Each entry renders as its own line (no <br> strings). */
  lines: ReactNode[];
  lead?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  lines,
  lead,
  align = "left",
  id,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <header className={`section-head ${align === "center" ? "section-head--center" : ""} ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-head__title">
        {lines.map((line, i) => (
          <span key={i} className="line">
            {line}
          </span>
        ))}
      </h2>
      {lead && <p className="section-head__lead">{lead}</p>}
      {children}
    </header>
  );
}