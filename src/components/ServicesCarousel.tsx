"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/site";
import { Reveal } from "@/components/scroll";

const offeringsIntro =
  "From new builds to lived-in renovations, our team coordinates the planning, trades, and finishing details that keep a project moving with less guesswork.";

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
  const maxIndex = Math.max(0, services.length - slidesPerView);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const shift = (index * 100) / slidesPerView;

  return (
    <section className="overflow-hidden bg-stone px-6 py-20 lg:py-28">
      <div
        className="mx-auto max-w-6xl"
      >
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Our Expertise
            </p>
            <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-[1.02] tracking-[-0.045em] text-navy-deep sm:text-4xl lg:text-5xl">
              Work that covers the full home.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate lg:text-[17px]">
            {offeringsIntro}
          </p>
        </Reveal>

        <div className="relative mt-12 lg:mt-14">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${shift}%)` }}
            >
              {services.map((service) => (
                <article
                  key={service.title}
                  className="w-full shrink-0 px-2.5 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="group flex h-full flex-col overflow-hidden border border-stone-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-navy-deep backdrop-blur">
                        Vithu Developments
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-sans text-lg font-black uppercase leading-tight tracking-tight text-navy-deep">
                        {service.title}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2 border-t border-stone-dark pt-5">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-navy-deep/80"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="flex min-h-11 min-w-11 items-center justify-center"
                >
                  <span
                    className={`block rounded-full transition-all ${
                      i === index
                        ? "h-2.5 w-8 bg-navy"
                        : "h-2.5 w-2.5 bg-stone-dark hover:bg-slate/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous services"
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                className="flex h-11 w-11 items-center justify-center border border-stone-dark bg-white text-navy-deep transition-colors hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next services"
                disabled={index >= maxIndex}
                onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                className="flex h-11 w-11 items-center justify-center border border-stone-dark bg-white text-navy-deep transition-colors hover:border-navy hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center sm:text-left">
            <Link
              href="/services"
              className="text-sm font-bold uppercase tracking-wider text-navy-deep hover:text-accent"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
