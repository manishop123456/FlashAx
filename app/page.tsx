import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroContent } from "@/components/three/HeroCanvas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyFlashax } from "@/components/home/WhyFlashax";
import { Impact } from "@/components/home/Impact";
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

        {/* 04. Our Impact */}
        <Impact />

        {/* 05. Testimonials */}
        <Testimonials />

        {/* 06. FAQs */}
        <FAQs />

        {/* 07. Let's Make It Happen */}
        <FinalCTA />
      </main>
      {/* 08. Footer */}
      <Footer />
    </>
  );
}