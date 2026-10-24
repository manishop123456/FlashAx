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
        <header className="faq-head">
          <h2 id="faqs-title" className="faq-head__title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="faq-head__sub">Clear Answers. No Runaround.</p>
          <p className="faq-head__desc">
            Practical information about how we work, how projects are scoped, and what to expect when you partner with Flashax.
          </p>
        </header>

        <div className="faq">
          <div className="faq__aside">
            <p>Still have questions about your specific requirements?</p>
            <ButtonLink href="/contact" variant="primary" icon="up-right">
              GET A PROPOSAL
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