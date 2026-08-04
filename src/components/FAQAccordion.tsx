"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-cream-300">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-center justify-between gap-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-serif text-lg text-bark-700 group-hover:text-olive-700 transition-colors">
              {item.question}
            </span>
            <span className="shrink-0 w-6 h-6 rounded-full border border-cream-400 flex items-center justify-center text-bark-500 group-hover:border-olive-500 group-hover:text-olive-600 transition-colors">
              {open === i ? <Minus size={12} /> : <Plus size={12} />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-bark-500 leading-relaxed text-sm pr-10">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
