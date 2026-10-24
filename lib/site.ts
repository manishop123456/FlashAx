import type { SiteConfig, FlashaxService, PortfolioProject } from "@/types";

export const siteConfig: SiteConfig = {
  name: "FLASHAX EVENT SOLUTIONS",
  shortName: "FLASHAX",
  tagline: "Where Engagement Sparks Success",
  founder: "Mukesh Choudhary",
  email: "info.flashax@gmail.com",
  phone: "+91 7757855121",
  whatsappUrl: "https://wa.me/917757855121?text=Hello%20Flashax%20Event%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  location: "Mumbai-based",
  preferredDomain: "flashaxeventsolutions.in",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Our Services",
      href: "/services",
      children: [
        { label: "Event Management", href: "/services/event-management" },
        { label: "Event Production", href: "/services/event-production" },
        { label: "Brand Activation", href: "/services/brand-activation" },
        { label: "Campus Marketing", href: "/services/campus-marketing" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "CSR Initiatives", href: "/services/csr-initiatives" },
        { label: "Corporate Gifting", href: "/services/corporate-gifting" },
      ],
    },
    { label: "Our Work", href: "/work" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/flashax._/",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/flashax-event-solutions",
      icon: "linkedin",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/917757855121?text=Hello%20Flashax%20Event%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.",
      icon: "whatsapp",
    },
  ],
};

import { servicesData } from "@/lib/servicesData";

export const services: FlashaxService[] = servicesData.map((s) => ({
  slug: s.slug,
  number: s.number.split("/")[0],
  title: s.title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Csr", "CSR"),
  shortDescription: s.mainDescription,
  fullDescription: s.mainDescription,
  offerings: s.divisions.map((d) => d.title),
  relatedServiceSlugs:
    s.slug === "event-management"
      ? ["event-production", "brand-activation", "digital-marketing"]
      : s.slug === "event-production"
      ? ["event-management", "brand-activation", "corporate-gifting"]
      : s.slug === "brand-activation"
      ? ["event-management", "campus-marketing", "digital-marketing"]
      : s.slug === "campus-marketing"
      ? ["brand-activation", "event-management", "csr-initiatives"]
      : s.slug === "digital-marketing"
      ? ["brand-activation", "event-management", "campus-marketing"]
      : s.slug === "csr-initiatives"
      ? ["campus-marketing", "event-management", "digital-marketing"]
      : ["event-management", "event-production", "brand-activation"],
}));

import { portfolioProjectsData } from "@/lib/portfolioData";

export const portfolioProjects: PortfolioProject[] = portfolioProjectsData.map((p) => ({
  slug: p.id,
  title: p.title,
  category: p.category,
  summary: p.descriptionParagraphs[0],
  location: p.venue,
  coverImage: p.images[0].src,
  gallery: p.images.map((img) => img.src),
  servicesDelivered: p.highlights,
  approvedForPublicDisplay: true,
  verifiedOutcomes: p.highlights,
}));

export const portfolioCategories = [
  "All Work",
  "Corporate",
  "Campus",
  "Exhibitions",
  "Brand Activations",
  "Production",
  "Digital",
];