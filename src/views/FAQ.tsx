"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";
import { Button, PageHero } from "@/components/ui";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Frequently asked questions"
        subtitle="Common questions about timelines, service areas, and working with our team."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl divide-y divide-stone-dark border border-stone-dark bg-white">
          {faqs.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy-deep">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="border-t border-stone-dark px-6 pb-5 text-slate leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-slate">Still have questions?</p>
          <Button to="/contact" className="mt-6">
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
