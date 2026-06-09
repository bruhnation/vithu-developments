"use client";

import { motion } from "framer-motion";
import { galleryImages } from "@/data/site";
import { PageHero } from "@/components/ui";

export function Gallery() {
  return (
    <>
      <PageHero
        title="Project gallery"
        subtitle="A preview of our work in home building and remodeling across the Lower Mainland."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, i) => (
            <motion.figure
              key={`${src}-${i}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="group overflow-hidden bg-white shadow-sm"
            >
              <img
                src={src}
                alt=""
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate">
          Gallery uses existing site photography. Replace with your own project
          photos when ready for launch.
        </p>
      </section>
    </>
  );
}
