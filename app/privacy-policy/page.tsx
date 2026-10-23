import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "Privacy policy and client data handling commitments for Flashax Event Solutions.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          titleId="privacy-hero-heading"
          eyebrow="LEGAL & PRIVACY"
          titleLines={["TRANSPARENCY", "& CLIENT PRIVACY"]}
          lead="How Flashax handles client briefs, vendor communications, and information submitted through our platform."
        />

        <section className="section">
          <div className="wrap">
            <article className="legal" style={{ marginInline: "auto" }}>
              <div>
                <h2>1. Commitment to Data Integrity</h2>
                <p>
                  Flashax (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is an event management, experiential production, and multi-service company based in Mumbai, Maharashtra. We respect your confidentiality. We do not sell, rent, or barter client details or commercial briefs to third-party advertising brokers.
                </p>
              </div>

              <div>
                <h2>2. Information We Collect</h2>
                <p>
                  When you submit a project enquiry or interact with our platform, we collect information necessary to assess, quote, and coordinate your event production:
                </p>
                <ul>
                  <li>Contact details: name, business email address, phone number, and organisation name.</li>
                  <li>Event specifications: event dates, target cities or venues, audience size estimates, and preliminary budget brackets.</li>
                  <li>Technical information: IP address and browser user-agent collected automatically for site security, spam prevention, and telemetry diagnostics.</li>
                </ul>
              </div>

              <div>
                <h2>3. Purpose of Processing</h2>
                <p>
                  Information provided through our contact channels is used exclusively for:
                </p>
                <ul>
                  <li>Reviewing project requirements and assessing technical production feasibility.</li>
                  <li>Contacting you with clarified scopes, itemised estimates, or scheduling discovery conversations.</li>
                  <li>Coordinating with verified event production vendors and technical crew when preparing formal staging proposals.</li>
                </ul>
              </div>

              <div>
                <h2>4. Third-Party Services & Production Vendors</h2>
                <p>
                  To deliver multi-service productions, we collaborate with vetted sound/lighting vendors, fabricators, and staffing partners. Commercial project details are shared on a strict need-to-know basis under standard confidentiality expectations.
                </p>
                <p style={{ marginTop: "var(--s-3)" }}>
                  Our website relies on trusted infrastructure providers:
                </p>
                <ul>
                  <li>Resend for transactional email dispatch of project briefs.</li>
                  <li>Hosting infrastructure operating under standard web telemetry protocols.</li>
                </ul>
              </div>

              <div>
                <h2>5. Contact Regarding Privacy</h2>
                <p>
                  To request correction, review, or deletion of any personal information or commercial briefs previously submitted to Flashax, please email:
                </p>
                <p style={{ marginTop: "var(--s-3)", color: "var(--gold)" }}>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
