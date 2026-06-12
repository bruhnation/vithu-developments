"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Award,
  ClipboardCheck,
  Hammer,
} from "lucide-react";
import { brand, heroImages, heroMedia, homeIntro } from "@/data/site";
import { Button } from "@/components/ui";
import { useParallax } from "@/components/scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const trustBadges = [
  { icon: Hammer, label: "Custom homes" },
  { icon: ClipboardCheck, label: "Renovations & remodels" },
  { icon: Award, label: "Licensed & certified" },
];

export function HeroScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutImageRef = useParallax<HTMLImageElement>(7);
  const [revealed, setRevealed] = useState(false);

  // GSAP lives ONLY on the hero: as you scroll the first viewport, the hero
  // content fades back and shrinks. The white section overtaking it is pure
  // CSS `sticky` (see markup below) — no pin, so nothing fights the scroll.
  useGSAP(
    () => {
      const hero = heroRef.current;
      const heroContent = heroContentRef.current;
      if (!hero || !heroContent) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) return;

      gsap.to(heroContent, {
        opacity: 0.35,
        scale: 0.92,
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  // Below the hero: plain, dependable IntersectionObserver reveal. No GSAP, so
  // it never interferes with the card hovers or icon micro-interactions.
  useEffect(() => {
    const about = aboutRef.current;
    if (!about) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  const revealClass = `transition-all duration-700 ease-out ${
    revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={heroRef}
        className="sticky top-0 z-10 h-svh overflow-hidden bg-navy-deep text-white"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={heroMedia.poster}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
        <img
          src={heroMedia.poster}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/45 to-navy-deep/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(201,162,39,0.22),transparent_32%)]" />

        <div
          ref={heroContentRef}
          className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-[5.5rem] sm:pb-20 lg:px-10 lg:pb-24 lg:pt-28"
        >
          <div className="flex max-w-3xl flex-col gap-12 sm:gap-14 lg:max-w-2xl lg:gap-16 xl:max-w-3xl">
            <div className="origin-left space-y-5 sm:space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent sm:text-sm">
                Vancouver - Burnaby - Richmond
              </p>
              <h1 className="font-sans text-[2.35rem] font-black uppercase leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-[3.25rem] lg:text-6xl lg:leading-[1.02]">
                Homes built with care, clarity, and craft.
              </h1>
            </div>

            <div className="space-y-8 border-t border-white/15 pt-10 sm:space-y-9 lg:space-y-10 lg:pt-12">
              <p className="max-w-xl text-base leading-[1.75] text-white/85 sm:text-lg">
                {brand.tagline} From early planning to final walkthrough, we
                keep the process clear and the work well managed.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-transparent bg-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_0_rgba(201,162,39,0)] transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-[0_14px_36px_rgba(201,162,39,0.45)]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-white/35 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.04] hover:border-white/65 hover:bg-white/[0.18]"
                >
                  Explore Services
                </Link>
              </div>

              <ul className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="relative z-30 overflow-hidden bg-white px-6 py-16 shadow-[0_-28px_80px_rgba(15,28,46,0.25)] lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className={`relative ${revealClass}`}>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                ref={aboutImageRef}
                src={heroImages[0]}
                alt="Modern custom home interior"
                className="absolute inset-x-0 -top-[12.5%] h-[125%] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 max-w-[220px] border border-stone-dark bg-white p-5 shadow-xl">
              <p className="font-sans text-3xl font-black text-accent">15+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy-deep">
                Years serving Lower Mainland homeowners
              </p>
            </div>
          </div>

          <div
            className={`group max-w-xl ${revealClass}`}
            style={{ transitionDelay: revealed ? "120ms" : "0ms" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent transition-all duration-300 ease-out group-hover:tracking-[0.34em]">
              About Vithu Developments
            </p>
            <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-[1.02] tracking-[-0.045em] text-navy-deep transition-colors duration-300 ease-out group-hover:text-navy sm:text-4xl lg:text-5xl">
              Building homes that feel considered from day one.
            </h2>
            <span
              aria-hidden
              className="mt-5 block h-[3px] w-12 origin-left rounded-full bg-accent transition-all duration-500 ease-out group-hover:w-24"
            />
            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate sm:text-lg">
              {homeIntro}
            </p>
            <Button
              to="/about"
              className="mt-8 gap-2 bg-navy hover:!bg-navy-deep"
            >
              Learn about us <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
