import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, Calendar, MessageCircle } from "lucide-react";
import {
  brand,
  heroImages,
  homeIntro,
} from "../data/site";
import { ServiceAreasSection } from "../components/ServiceAreasSection";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { Button } from "../components/ui";
import {
  convergeContainer,
  convergeLeft,
  convergeRight,
  easeOut,
  popIn,
  viewport,
} from "../lib/motion";

const trustBadges = [
  { icon: Calendar, label: "Available by appointment" },
  { icon: MessageCircle, label: "Free consultations" },
  { icon: Award, label: "Licensed & certified" },
];

const heroPanel = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeOut, staggerChildren: 0.09, delayChildren: 0.2 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function Home() {
  const [slide, setSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroImages.length),
      5500,
    );
    return () => clearInterval(id);
  }, []);

  const motionProps = reduceMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <>
      <section className="relative min-h-screen h-screen overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/15" />

        <div className="relative flex min-h-screen items-center pt-[88px] lg:pt-[96px]">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <motion.div
              variants={reduceMotion ? undefined : heroPanel}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
              className="max-w-lg border border-white/60 bg-white/90 p-8 shadow-[0_8px_40px_rgba(15,28,46,0.12)] backdrop-blur-md sm:max-w-xl sm:p-10 lg:p-12"
            >
              <motion.p variants={heroItem} className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Vancouver · Burnaby · Richmond
              </motion.p>
              <motion.h1
                variants={heroItem}
                className="mt-4 font-sans text-3xl font-bold uppercase leading-[1.08] tracking-tight text-accent sm:text-4xl lg:text-[2.65rem]"
              >
                Vancouver, Burnaby &amp; Richmond&apos;s
                <span className="mt-1 block text-navy-deep">Best Home Builder</span>
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="mt-5 text-base leading-relaxed text-navy-deep/90 sm:text-lg"
              >
                {brand.tagline}
              </motion.p>
              <motion.p variants={heroItem} className="mt-2 text-sm text-slate">
                {brand.location}
              </motion.p>

              <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
                <Button
                  to="/contact"
                  className="!px-8 !py-3.5 !text-xs !font-bold !uppercase !tracking-widest bg-navy hover:!bg-navy-deep"
                >
                  Request a Quote
                </Button>
                <Button
                  to="/services"
                  variant="ghost"
                  className="!border-navy/25 !text-navy-deep hover:!bg-stone"
                >
                  Explore Services
                </Button>
              </motion.div>

              <motion.ul
                variants={heroItem}
                className="mt-8 flex flex-col gap-3 border-t border-stone-dark pt-8 sm:flex-row sm:flex-wrap sm:gap-x-6"
              >
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-sm font-medium text-navy-deep"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {label}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      <WhyChooseSection />

      {/* About — columns slide in from opposite sides and meet */}
      <section className="px-6 py-24 overflow-hidden">
        <motion.div
          className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center"
          variants={reduceMotion ? undefined : convergeContainer}
          {...motionProps}
        >
          <motion.div variants={reduceMotion ? undefined : convergeLeft}>
            <div className="max-w-xl border-l-4 border-accent pl-6 sm:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                About your project
              </p>
              <h2 className="mt-3 font-sans text-2xl font-bold uppercase leading-[1.15] tracking-tight text-accent sm:text-3xl lg:text-4xl">
                Build the home
                <span className="block text-navy-deep">you couldn&apos;t find</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
                {homeIntro}
              </p>
              <Button
                to="/about"
                className="mt-8 gap-2 bg-navy hover:!bg-navy-deep"
              >
                Learn about us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : convergeRight}
            className="relative"
          >
            <img
              src={heroImages[0]}
              alt="Home design and floor plan"
              className="aspect-[4/3] w-full object-cover shadow-xl"
            />
            <motion.div
              variants={reduceMotion ? undefined : popIn}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={viewport}
              transition={{ delay: 0.45 }}
              className="absolute -bottom-6 -left-6 hidden border border-accent bg-white px-6 py-4 shadow-lg md:block"
            >
              <p className="font-sans text-3xl font-bold text-accent">15+</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-deep">
                Years serving the Lower Mainland
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <ServiceAreasSection />

      <section className="bg-navy px-6 py-20 overflow-hidden">
        <motion.div
          className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          variants={reduceMotion ? undefined : convergeContainer}
          {...motionProps}
        >
          <motion.div variants={reduceMotion ? undefined : convergeLeft}>
            <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">
              Ready to start your dream home?
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Call today for a free consultation. Our builders are ready to discuss
              your timeline, budget, and next steps.
            </p>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : convergeRight}>
            <Button to="/contact" className="shrink-0 bg-accent hover:!bg-accent-hover">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
