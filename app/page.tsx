import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroContent } from "@/components/three/HeroCanvas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyFlashax } from "@/components/home/WhyFlashax";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQs } from "@/components/home/FAQs";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        {/* 01. Landing Page / Hero */}
        <HeroContent />

        {/* 02. Our Services */}
        <ServicesGrid />

        {/* 03. Why Flashax */}
        <WhyFlashax />

        {/* 04. Testimonials */}
        <Testimonials />

        {/* 05. FAQs */}
        <FAQs />

        {/* 06. Let's Make It Happen */}
        <FinalCTA />
      </main>
      {/* 07. Footer */}
      <Footer />
    </>
  );
}