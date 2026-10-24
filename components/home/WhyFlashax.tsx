"use client";

import { useState, type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";

export interface PrincipleItem {
  number: string;
  title: string;
  text: string;
}

export const HOMEPAGE_PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "SOLUTIONS AROUND YOUR GOALS",
    text: "We begin by understanding your objectives, audience, budget and expectations before suggesting a suitable approach.",
  },
  {
    number: "02",
    title: "MULTIPLE SERVICES, ONE POINT OF CONTACT",
    text: "From event management and production to campus marketing, digital marketing, corporate gifting and CSR initiatives, we help coordinate the services your project requires.",
  },
  {
    number: "03",
    title: "CREATIVE IDEAS, PRACTICAL EXECUTION",
    text: "We aim to balance fresh ideas with realistic planning, available resources, timelines and budgets.",
  },
  {
    number: "04",
    title: "CLEAR COMMUNICATION",
    text: "We aim to keep expectations, responsibilities, timelines and project updates clear throughout the process.",
  },
];

export const ABOUT_DIFFERENTIATORS: PrincipleItem[] = [
  {
    number: "01",
    title: "A CONNECTED SERVICE APPROACH",
    text: "Our seven service areas allow clients to explore complementary solutions across events, production, brand activation, campus marketing, digital marketing, CSR initiatives and corporate gifting.",
  },
  {
    number: "02",
    title: "SCOPE THAT FITS THE PROJECT",
    text: "Not every client needs a complete package. We work towards defining a suitable scope, whether the requirement involves one service or a combination of services.",
  },
  {
    number: "03",
    title: "AUDIENCE-CENTRED THINKING",
    text: "We consider who the project is intended to reach and how the audience should experience, understand or engage with it.",
  },
  {
    number: "04",
    title: "COORDINATION ACROSS REQUIREMENTS",
    text: "Projects often involve different suppliers, materials, schedules and activities. We focus on bringing these requirements together through organised communication and coordination.",
  },
  {
    number: "05",
    title: "PRACTICAL AND TRANSPARENT PLANNING",
    text: "We aim to keep proposals grounded in the agreed objectives, available resources, timelines and budget, while discussing limitations or changes openly.",
  },
  {
    number: "06",
    title: "A COLLABORATIVE WORKING RELATIONSHIP",
    text: "We value client input throughout the project and aim to build working relationships based on mutual understanding, clear expectations and constructive communication.",
  },
];

export interface WhyFlashaxProps {
  id?: string;
  heading?: ReactNode;
  headingTop?: string;
  headingGold?: string;
  headingBottom?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
  principles?: PrincipleItem[];
  className?: string;
  children?: ReactNode;
}

export function WhyFlashax({
  id = "why-flashax",
  heading,
  headingTop = "WHY",
  headingGold = "FLASHAX?",
  headingBottom,
  subheading = "The Difference Is in the Execution.",
  description = "Every project has a different goal, audience and set of requirements. Flashax Event Solutions brings creative thinking, practical planning and coordinated services together to help clients turn their ideas into well-organised experiences.",
  ctaText = "DISCUSS YOUR PROJECT",
  ctaHref = "/contact",
  showCta = true,
  principles = HOMEPAGE_PRINCIPLES,
  className = "section section--alt",
  children,
}: WhyFlashaxProps = {}) {
  const [activeNumber, setActiveNumber] = useState("01");

  const titleId = `${id}-title`;

  return (
    <section id={id} className={className} aria-labelledby={titleId}>
      <div className="wrap">
        <div className="why-grid">
          <div className="why-content">
            <h2 id={titleId} className="why-content__title">
              {heading ? (
                heading
              ) : (
                <>
                  <span className="why-content__title-line why-content__title-line--ivory">{headingTop}</span>
                  <span className="why-content__title-line why-content__title-line--gold">{headingGold}</span>
                  {headingBottom && (
                    <span className="why-content__title-line why-content__title-line--ivory">{headingBottom}</span>
                  )}
                </>
              )}
            </h2>
            {subheading && <p className="why-content__sub">{subheading}</p>}
            {description && <p className="why-content__desc">{description}</p>}
            {showCta && ctaText && ctaHref && (
              <div className="why-content__cta">
                <ButtonLink href={ctaHref} variant="primary" icon="up-right">
                  {ctaText}
                </ButtonLink>
              </div>
            )}
          </div>

          <div className="why-principles" role="list">
            {principles.map((p) => {
              const isSelected = activeNumber === p.number;
              return (
                <div
                  key={p.number}
                  className={`principle-row ${isSelected ? "principle-row--selected" : ""}`}
                  role="listitem"
                  onMouseEnter={() => setActiveNumber(p.number)}
                  onFocus={() => setActiveNumber(p.number)}
                  tabIndex={0}
                  aria-label={`${p.number} ${p.title}`}
                >
                  <span className="principle-row__num" aria-hidden="true">
                    {p.number}
                  </span>
                  <div className="principle-row__content">
                    <h3 className="principle-row__title">{p.title}</h3>
                    <p className="principle-row__text">{p.text}</p>
                  </div>
                </div>
              );
            })}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}