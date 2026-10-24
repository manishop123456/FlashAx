import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { TransitionProvider } from "@/components/transition";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flash-ax.vercel.app";
const description =
  "Flashax Event Solutions is a Mumbai-based event management and brand experience company delivering corporate events, college festivals, trade exhibitions, brand activations, event production, and campus partnerships. Where Engagement Sparks Success.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "event management company Mumbai",
    "corporate event planners Mumbai",
    "college festival management India",
    "exhibition stall design Mumbai",
    "trade show solutions",
    "event production services",
    "brand activation agency",
    "campus connect sponsorships",
    "digital marketing events",
    "CSR Initiatives",
    "Flashax Event Solutions",
    "Flashax",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: "index, follow",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/brand/flashax-logo-transparent.png",
    apple: "/brand/flashax-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description,
    images: [
      {
        url: "/brand/flashax-logo-transparent.png",
        width: 1024,
        height: 264,
        alt: "FLASHAX EVENT SOLUTIONS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description,
    images: ["/brand/flashax-logo-transparent.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#17091D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanningService",
  name: "Flashax Event Solutions",
  alternateName: "Flashax",
  description,
  url: siteUrl,
  logo: `${siteUrl}/brand/flashax-logo-transparent.png`,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: siteConfig.email,
    telephone: siteConfig.phone,
  },
  sameAs: [
    "https://www.instagram.com/flashax._/",
    "https://www.linkedin.com/company/flashax-event-solutions",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}