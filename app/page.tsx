import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroContent } from "@/components/three/HeroCanvas";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ExperienceShowcase } from "@/components/home/ExperienceShowcase";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WhyFlashax } from "@/components/home/WhyFlashax";
import { Audiences } from "@/components/home/Audiences";
import { Process } from "@/components/home/Process";
import { Impact } from "@/components/home/Impact";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQs } from "@/components/home/FAQs";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <HeroContent />
        <WhoWeAre />
        <ServicesGrid />
        <ExperienceShowcase />
        <SelectedWork />
        <WhyFlashax />
        <Audiences />
        <Process />
        <Impact />
        <Testimonials />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}