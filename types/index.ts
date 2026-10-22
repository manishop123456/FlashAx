export type FlashaxService = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  relatedServiceSlugs: string[];
  heroImage?: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  location?: string;
  date?: string;
  coverImage: string;
  gallery?: string[];
  servicesDelivered: string[];
  clientName?: string;
  approvedForPublicDisplay: boolean;
  verifiedOutcomes?: string[];
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "twitter" | "youtube";
};

export type SiteConfig = {
  name: string;
  tagline: string;
  founder: string;
  coFounder?: string;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
};