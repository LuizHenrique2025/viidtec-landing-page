"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-ink-800 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          kicker="Perguntas frequentes"
          title="Dúvidas comuns antes de começar."
        />

        <div className="divide-y divide-ink-800 border-t border-ink-800">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base text-mist-50 sm:text-lg">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-mist-400 transition-transform duration-200",
                      isOpen && "rotate-45 text-signal-300"
                    )}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="min-h-0 max-w-xl text-[15px] leading-relaxed text-mist-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
