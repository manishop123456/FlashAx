"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

/** Accessible disclosure list: buttons with aria-expanded/controls, single-open. */
export function Accordion({ items, label }: { items: readonly AccordionItem[]; label: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="accordion" role="group" aria-label={label}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div className="accordion__item" key={item.question}>
            <h3 className="accordion__heading">
              <button
                id={btnId}
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <span className="accordion__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="accordion__panel"
              data-open={isOpen}
            >
              <div>
                <div className="accordion__body">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}