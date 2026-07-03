"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { sectionBackdrop, serviceAreas } from "@/data/site";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export function ServiceAreasSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-14 md:py-16 lg:py-20">
      <img
        src={sectionBackdrop}
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
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="text-center">
          <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
            Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Proudly serving homeowners across the Lower Mainland — and surrounding
            communities when your project needs a trusted local builder.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-0">
          {serviceAreas.map((area, i) => (
            <motion.article
              key={area.city}
              variants={reduceMotion ? undefined : fadeUp}
              className={`md:px-8 lg:px-12 ${
                i > 0 ? "md:border-l md:border-white/20" : ""
              }`}
            >
              <MapPin
                className="mb-4 h-11 w-11 text-accent sm:h-12 sm:w-12"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="font-sans text-xl font-black uppercase tracking-wide text-accent sm:text-2xl md:text-[1.65rem]">
                {area.city}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-[1.65] text-white/75 md:text-[15px]">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
