"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, portfolioCategories } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function SelectedWork() {
  const [activeCat, setActiveCat] = useState(0);

  const filtered =
    activeCat === 0
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === portfolioCategories[activeCat]);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <div className="work-head">
          <SectionHeading
            id="work-title"
            eyebrow="SELECTED WORK"
            lines={["BUILT FOR THE", "MOMENTS THAT MATTER."]}
            lead="Selected projects across corporate events, campus festivals, exhibitions, brand activations and digital campaigns."
          />
          <div className="chips" role="tablist" aria-label="Project categories">
            {portfolioCategories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                role="tab"
                className="chip"
                aria-selected={activeCat === i}
                onClick={() => setActiveCat(i)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="work-empty">
            <div>
              <p className="eyebrow">PORTFOLIO CURATION IN PROGRESS</p>
              <h3 className="work-empty__title">Real projects. Verified outcomes only.</h3>
              <p className="work-empty__text">
                In line with our transparency commitment, we do not publish synthetic case studies or client logos.
                Verified project case studies and attendee photography will appear here once approved for public
                display.
              </p>
              <div className="work-empty__actions">
                <ButtonLink href="/contact" variant="primary" icon="up-right">
                  DISCUSS YOUR PROJECT
                </ButtonLink>
              </div>
            </div>

            <div className="work-empty__frames" aria-hidden="true">
              <div className="frame">Corporate &amp; Annual Days</div>
              <div className="frame">Brand Activations</div>
              <div className="frame">Campus Connect</div>
            </div>
          </div>
        ) : (
          <div className="work-grid" role="list">
            {filtered.map((p) => (
              <article key={p.slug} className="card project" role="listitem">
                <Link href={`/work/${p.slug}`} className="project__media">
                  <Image src={p.coverImage} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </Link>
                <div className="project__body">
                  <span className="project__cat">{p.category}</span>
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__text">{p.summary}</p>
                  <Link href={`/work/${p.slug}`} className="link-arrow">
                    VIEW CASE STUDY &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}