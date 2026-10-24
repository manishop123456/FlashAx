import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkShowcase } from "@/components/work/WorkShowcase";

export const metadata: Metadata = {
  title: "Our Work | Flashax Event Solutions",
  description:
    "Explore selected Flashax projects across event execution, production support, audience engagement and brand experiences.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <WorkShowcase />
      </main>
      <Footer />
    </>
  );
}