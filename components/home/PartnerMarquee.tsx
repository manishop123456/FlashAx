"use client";

import { useState } from "react";
import Image from "next/image";

export interface PartnerItem {
  id: string;
  name: string;
  filename: string;
  alt: string;
}

export const PARTNER_ITEMS: PartnerItem[] = [
  {
    id: "tcsc",
    name: "TCSC",
    filename: "tcsc.png",
    alt: "Thakur College of Science and Commerce (TCSC)",
  },
  {
    id: "st-xaviers",
    name: "St. Xavier's College",
    filename: "st-xaviers.png",
    alt: "St. Xavier's College Mumbai",
  },
  {
    id: "sitare",
    name: "SITARE",
    filename: "sitare.png",
    alt: "SITARE Festival & Event",
  },
  {
    id: "sky-path-digital",
    name: "Sky Path Digital",
    filename: "sky-path-digital.png",
    alt: "Sky Path Digital",
  },
  {
    id: "alpha-trader-university",
    name: "Alpha Trader University",
    filename: "alpha-trader-university.png",
    alt: "Alpha Trader University",
  },
  {
    id: "thakur-trust",
    name: "Thakur Trust",
    filename: "thakur-trust.png",
    alt: "Thakur Educational Trust",
  },
  {
    id: "finstreet",
    name: "Finstreet",
    filename: "finstreet.png",
    alt: "Finstreet",
  },
  {
    id: "digimelaa",
    name: "Digimelaa",
    filename: "digimelaa.png",
    alt: "Digimelaa",
  },
];

function PartnerLogoBadge({ partner }: { partner: PartnerItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="partner-marquee__item"
      title={partner.name}
      aria-label={partner.name}
    >
      {!imgError ? (
        <div className="partner-marquee__logo-wrapper">
          <Image
            src={`/images/partner-logos/${partner.filename}`}
            alt={partner.alt}
            width={400}
            height={200}
            className="partner-marquee__logo-img"
            style={{ objectFit: "contain" }}
            loading="eager"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="partner-marquee__fallback-badge">
          <span className="partner-marquee__fallback-text">{partner.name}</span>
        </div>
      )}
    </div>
  );
}

export function PartnerMarquee() {
  return (
    <section
      className="partner-marquee-section"
      aria-labelledby="partner-marquee-heading"
    >
      <div className="wrap partner-marquee-head-wrap">
        <h3 id="partner-marquee-heading" className="partner-marquee__heading">
          OUR COLLABORATIONS
        </h3>
      </div>

      <div
        className="partner-marquee"
        role="region"
        aria-label="Our collaborations logo marquee"
      >
        <div className="partner-marquee__fade partner-marquee__fade--left" aria-hidden="true" />
        <div className="partner-marquee__fade partner-marquee__fade--right" aria-hidden="true" />

        <div className="partner-marquee__track-container">
          <div className="partner-marquee__track">
            {/* Set 1 */}
            <div className="partner-marquee__group" aria-hidden="false">
              {PARTNER_ITEMS.map((item) => (
                <PartnerLogoBadge key={`p1-${item.id}`} partner={item} />
              ))}
            </div>

            {/* Set 2 (for seamless infinite loop) */}
            <div className="partner-marquee__group" aria-hidden="true">
              {PARTNER_ITEMS.map((item) => (
                <PartnerLogoBadge key={`p2-${item.id}`} partner={item} />
              ))}
            </div>

            {/* Set 3 (ensures seamless scrolling on ultra-wide screens) */}
            <div className="partner-marquee__group" aria-hidden="true">
              {PARTNER_ITEMS.map((item) => (
                <PartnerLogoBadge key={`p3-${item.id}`} partner={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
