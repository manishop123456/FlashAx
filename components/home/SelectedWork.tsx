"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

interface HomeProjectItem {
  id: string;
  title: string;
  venue: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const FEATURED_HOME_PROJECTS: HomeProjectItem[] = [
  {
    id: "cryptstock-quest-24",
    title: "CRYPTSTOCK QUEST '24",
    venue: "Thakur College of Science and Commerce",
    description:
      "An engaging online trading competition featuring approximately 1,000 students from colleges across Mumbai, in collaboration with STOCKGRO as the official trading partner.",
    imageSrc: "/images/our-work/cryptstock-quest-24/cover.webp",
    imageAlt: "CRYPTSTOCK QUEST '24 stage and auditorium at Thakur College",
    href: "/work#cryptstock-quest-24",
  },
  {
    id: "cryptstock-quest-25",
    title: "CRYPTSTOCK QUEST '25",
    venue: "Thakur College of Science and Commerce",
    description:
      "A high-energy trading experience featuring 120+ participants and 60+ teams, with a focus on audience engagement, planning, and on-ground coordination.",
    imageSrc: "/images/our-work/cryptstock-quest-25/cover.webp",
    imageAlt: "CRYPTSTOCK QUEST '25 participant teams and stage production",
    href: "/work#cryptstock-quest-25",
  },
  {
    id: "flashax-sitare",
    title: "Flashax-Powered SITARE",
    venue: "St. Xavier's College",
    description:
      "An event supported by Flashax through production coordination and influencer collaboration with Umar Punjabi.",
    imageSrc: "/images/our-work/flashax-sitare/influencer-collaboration.webp",
    imageAlt: "Flashax-Powered SITARE stage and influencer collaboration at St. Xavier's College",
    href: "/work#flashax-sitare",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="section work-home-section" aria-labelledby="work-home-title">
      <div className="wrap">
        {/* Section Header with Large, Prominent Typography */}
        <header className="work-home-head">
          <p className="work-home-head__eyebrow">PORTFOLIO</p>
          <h2 id="work-home-title" className="work-home-head__title">
            OUR WORK
          </h2>
          <p className="work-home-head__sub">
            Ideas Brought to Life. Experiences Remembered.
          </p>
          <p className="work-home-head__desc">
            Explore selected Flashax projects across event execution, production support, audience engagement and brand experiences.
          </p>
        </header>

        {/* 3-Column Responsive Horizontal Project Cards */}
        <div className="work-home-grid" role="list">
          {FEATURED_HOME_PROJECTS.map((project) => (
            <article key={project.id} className="work-home-card" role="listitem">
              <div className="work-home-card__media">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="work-home-card__img"
                />
                <div className="work-home-card__media-glow" aria-hidden="true" />
              </div>

              <div className="work-home-card__body">
                <div className="work-home-card__venue">
                  <MapPin size={14} className="text-gold" aria-hidden="true" />
                  <span>{project.venue}</span>
                </div>

                <h3 className="work-home-card__title">{project.title}</h3>

                <p className="work-home-card__desc">{project.description}</p>

                <div className="work-home-card__foot">
                  <Link href={project.href} className="work-home-card__link">
                    <span>View Project</span>
                    <ArrowUpRight size={16} aria-hidden="true" className="work-home-card__arrow" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link to Dedicated Work Page */}
        <div className="work-home-foot">
          <ButtonLink href="/work" variant="secondary" icon="up-right">
            EXPLORE ALL PROJECTS
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}