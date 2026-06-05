import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/site";
import { fadeUp, viewport } from "../lib/motion";

const offeringsIntro =
  "Serving Vancouver, Burnaby, Richmond, and surrounding areas — our in-house team brings local expertise, quality craftsmanship, and clear communication to every build and remodel.";

function useSlidesPerView() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(max-width: 640px)").matches) setCount(1);
      else if (window.matchMedia("(max-width: 1024px)").matches) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const slidesPerView = useSlidesPerView();
  const reduceMotion = useReducedMotion();
  const maxIndex = Math.max(0, services.length - slidesPerView);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const shift = (index * 100) / slidesPerView;

  return (
    <section className="border-y border-stone-dark bg-white px-6 py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewport}
        variants={fadeUp}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="font-sans text-2xl font-bold uppercase leading-[1.15] tracking-tight text-accent sm:text-3xl lg:text-4xl">
            Our Expertise
            <span className="block text-navy-deep">&amp; Offerings</span>
          </h2>
          <p className="text-base leading-relaxed text-slate lg:text-[17px]">
            {offeringsIntro}
          </p>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${shift}%` }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {services.map((service) => (
                <article
                  key={service.title}
                  className="w-full shrink-0 border border-stone-dark bg-white px-2.5 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="flex h-full flex-col border border-stone-dark/80">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-accent sm:text-base">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-navy"
                      : "w-2.5 bg-stone-dark hover:bg-slate/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous services"
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                className="flex h-11 w-11 items-center justify-center border border-stone-dark text-navy-deep transition-colors hover:border-navy hover:bg-stone disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next services"
                disabled={index >= maxIndex}
                onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                className="flex h-11 w-11 items-center justify-center border border-stone-dark text-navy-deep transition-colors hover:border-navy hover:bg-stone disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center sm:text-left">
            <Link
              to="/services"
              className="text-sm font-semibold uppercase tracking-wider text-navy-deep hover:text-accent"
            >
              View all services →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
