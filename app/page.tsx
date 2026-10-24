import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroContent } from "@/components/three/HeroCanvas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyFlashax } from "@/components/home/WhyFlashax";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { FAQs } from "@/components/home/FAQs";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* 01. Hero / Landing Page */}
        <HeroContent />

        {/* 02. Our Services */}
        <ServicesGrid />

        {/* 03. Why Flashax? */}
        <WhyFlashax />

        {/* 04. How We Work */}
        <Process />

        {/* 05. Selected Work / Featured Projects */}
        <SelectedWork />

        {/* 06. FAQs */}
        <FAQs />

        {/* 07. Final Enquiry CTA */}
        <FinalCTA />
      </main>
      {/* 08. Footer */}
      <Footer />
    </>
  );
}