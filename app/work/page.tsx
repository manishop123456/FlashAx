"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { portfolioProjects, portfolioCategories } from "@/lib/site";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredProjects =
    activeCategory === 0
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === portfolioCategories[activeCategory]);

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <PageHero
          titleId="work-page-title"
          eyebrow="OUR PORTFOLIO"
          titleLines={["BUILT FOR THE", "MOMENTS THAT MATTER."]}
          lead="Real projects. Verified outcomes. Only work cleared and approved for public display."
        />

        <section className="section" aria-labelledby="work-grid-title">
          <div className="wrap">
            <div className="work-head">
              <SectionHeading
                id="work-grid-title"
                eyebrow="PORTFOLIO"
                lines={["SELECTED WORK"]}
                lead="Filter by category to explore verified case studies across corporate experiences, festivals, trade exhibitions and campaigns."
              />
              <div className="chips" role="tablist" aria-label="Project categories">
                {portfolioCategories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === index}
                    onClick={() => setActiveCategory(index)}
                    className="chip"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="work-empty">
                <div>
                  <p className="eyebrow">PORTFOLIO CURATION IN PROGRESS</p>
                  <h3 className="work-empty__title">Verified Case Studies Coming Soon</h3>
                  <p className="work-empty__text">
                    We only publish case studies, photography and performance metrics with explicit client approval.
                    As authorized assets are released, full project breakdowns will appear here.
                  </p>
                  <div className="work-empty__actions">
                    <ButtonLink href="/contact" variant="primary" icon="up-right">
                      DISCUSS A PROJECT
                    </ButtonLink>
                  </div>
                </div>

                <div className="work-empty__frames" aria-hidden="true">
                  <div className="frame">Corporate Conferences &amp; Summits</div>
                  <div className="frame">Brand Activation Pavilions</div>
                  <div className="frame">Campus Connect Initiatives</div>
                </div>
              </div>
            ) : (
              <div className="work-grid" role="list">
                {filteredProjects.map((project) => (
                  <article key={project.slug} className="card project" role="listitem">
                    <Link href={`/work/${project.slug}`} className="project__media">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </Link>
                    <div className="project__body">
                      <span className="project__cat">{project.category}</span>
                      <h3 className="project__title">{project.title}</h3>
                      <p className="project__text">{project.summary}</p>
                      <Link href={`/work/${project.slug}`} className="link-arrow">
                        VIEW CASE STUDY &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}