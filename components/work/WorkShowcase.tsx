"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { portfolioProjectsData } from "@/lib/portfolioData";
import { WorkCarousel } from "./WorkCarousel";
import { ButtonLink } from "@/components/ui/Button";

interface WorkShowcaseProps {
  id?: string;
  isSection?: boolean;
}

export function WorkShowcase({ id = "our-work", isSection = false }: WorkShowcaseProps) {
  const HeadingTag = isSection ? "h2" : "h1";

  return (
    <section
      id={id}
      className={`work-showcase ${isSection ? "work-showcase--section" : ""}`}
      aria-labelledby="our-work-heading"
    >
      <div className="wrap">
        {/* SECTION INTRODUCTION */}
        <header className="work-showcase__header">
          <p className="work-showcase__eyebrow">OUR WORK</p>
          <HeadingTag id="our-work-heading" className="work-showcase__headline">
            Ideas brought to life. Experiences remembered.
          </HeadingTag>
          <p className="work-showcase__lead">
            Explore selected Flashax projects across event execution, production support, audience engagement and brand experiences.
          </p>
        </header>

        {/* ALL THREE PROJECTS DISPLAYED VERTICALLY */}
        <div className="work-projects-list">
          {portfolioProjectsData.map((project, index) => {
            const isReversed = index % 2 === 1; // Project 2 has image left on desktop

            return (
              <article
                key={project.id}
                className={`work-project-item ${isReversed ? "work-project-item--reversed" : ""}`}
                aria-label={project.title}
              >
                {/* Text Content Column (~45%) */}
                <div className="work-project-item__text">
                  <span className="work-project-item__category">{project.category}</span>
                  <h2 className="work-project-item__title">{project.title}</h2>

                  <div className="work-project-item__venue">
                    <MapPin size={15} className="text-gold" aria-hidden="true" />
                    <span>{project.venue}</span>
                  </div>

                  <div className="work-project-item__desc">
                    {project.descriptionParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Column (~55%) */}
                <div className="work-project-item__gallery">
                  <WorkCarousel project={project} />
                </div>
              </article>
            );
          })}
        </div>

        {/* FINAL CALL TO ACTION */}
        <aside className="work-showcase__cta" aria-labelledby="work-cta-heading">
          <div className="work-showcase__cta-content">
            <h2 id="work-cta-heading" className="work-showcase__cta-title">
              Have an event in mind?
            </h2>
            <p className="work-showcase__cta-text">
              Let&apos;s discuss your requirements and explore how Flashax can support your next project.
            </p>
          </div>
          <div className="work-showcase__cta-action">
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              GET A PROPOSAL
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
