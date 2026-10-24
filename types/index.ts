export type FlashaxService = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  relatedServiceSlugs: string[];
  heroImage?: string;
  image?: string;
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
  icon: "instagram" | "linkedin" | "whatsapp" | "twitter" | "youtube";
};

export type SiteConfig = {
  name: string;
  shortName?: string;
  tagline: string;
  founder: string;
  coFounder?: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  location: string;
  preferredDomain?: string;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
};