"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, CalendarCheck, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { heroImages } from "@/data/site";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const pillars: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Award,
    title: "Licensed & Certified.",
    description:
      "Experienced contractors who manage framers, trades, and inspections with care — keeping your build on track.",
  },
  {
    icon: MessageCircle,
    title: "Free Consultations.",
    description:
      "Discuss your vision, budget, and timeline before you commit. Clear answers, no pressure.",
  },
  {
    icon: CalendarCheck,
    title: "Available By Appointment.",
    description:
      "Focused attention on your project. Schedule a time that works and talk directly with our team.",
  },
];

export function WhyChooseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
      <img
        src={heroImages[1]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-navy-deep/90" />

      <motion.div
        className="relative mx-auto max-w-7xl px-6 lg:px-10"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={staggerContainer(0.1, 0.04)}
      >
        <motion.h2
          variants={reduceMotion ? undefined : fadeUp}
          className="text-center font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Why Choose Us?
        </motion.h2>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-0">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              variants={reduceMotion ? undefined : fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className={`group flex flex-col items-center px-6 py-8 text-center md:px-8 lg:px-10 ${
                i > 0 ? "md:border-l md:border-white/20" : ""
              }`}
            >
              <item.icon
                className="mb-5 h-11 w-11 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="font-sans text-base font-black uppercase leading-[1.2] tracking-wide text-accent transition-colors duration-300 group-hover:text-[#e0bc3a] sm:text-lg md:text-xl">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-[1.65] text-white/75 transition-colors duration-300 group-hover:text-white/90 md:text-[15px]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
