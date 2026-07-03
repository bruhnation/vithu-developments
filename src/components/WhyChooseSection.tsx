"use client";

import { Award, CalendarCheck, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { sectionBackdrop } from "@/data/site";
import { Reveal, useParallax } from "@/components/scroll";

const pillars: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description:
      "Experienced contractors coordinating the trades, inspections, and details that keep a build moving properly.",
  },
  {
    icon: MessageCircle,
    title: "Straightforward Communication",
    description:
      "Clear conversations around scope, budget, and timeline so you understand what is happening before work begins.",
  },
  {
    icon: CalendarCheck,
    title: "Organized Project Flow",
    description:
      "Focused scheduling, reliable follow-through, and a practical process from the first meeting to final walkthrough.",
  },
];

export function WhyChooseSection() {
  const bgRef = useParallax<HTMLImageElement>(8);

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <img
        ref={bgRef}
        src={sectionBackdrop}
        alt=""
        className="absolute inset-x-0 -top-[12.5%] h-[125%] w-full object-cover grayscale"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(201,162,39,0.22),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-[1.03] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            A clearer way to build and renovate.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Good construction is not only about the finished room. It is about
            planning well, keeping people aligned, and doing the small things
            properly along the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="group h-full border border-white/15 bg-white/[0.06] px-6 py-8 text-center shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 md:px-8 lg:px-10">
                <item.icon
                  className="mx-auto mb-6 h-11 w-11 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="font-sans text-base font-black uppercase leading-[1.2] tracking-wide text-white transition-colors duration-300 group-hover:text-accent sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-[1.65] text-white/75 transition-colors duration-300 group-hover:text-white/90 md:text-[15px]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
