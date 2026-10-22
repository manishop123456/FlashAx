import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";

export function FAQs() {
  const items = faqs.map((f) => ({
    question: f.question,
    answer: <p>{f.answer}</p>,
  }));

  return (
    <section id="faqs" className="section" aria-labelledby="faqs-title">
      <div className="wrap">
        <div className="faq">
          <div className="faq__aside">
            <SectionHeading
              id="faqs-title"
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              lines={["CLEAR ANSWERS.", "NO RUNAROUND."]}
              lead="Practical information about how we work, how projects are scoped, and what to expect when you partner with Flashax."
            />
            <p>Still have questions about your specific requirements?</p>
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              GET IN TOUCH
            </ButtonLink>
          </div>

          <div>
            <Accordion items={items} label="Frequently asked questions about Flashax" />
          </div>
        </div>
      </div>
    </section>
  );
}