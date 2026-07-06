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
import { aboutImage, brand, heroMedia, homeIntro } from "@/data/site";
import { Button } from "@/components/ui";
import { useParallax } from "@/components/scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const trustBadges = [
  { icon: Hammer, label: "Custom homes" },
  { icon: ClipboardCheck, label: "Renovations & remodels" },
  { icon: Award, label: "Licensed & certified" },
];

function getViewportHeight() {
  return window.visualViewport?.height ?? window.innerHeight;
}

function useHeroVideoAutoplay(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.controls = false;

    const markPlaying = () => setVideoVisible(true);

    const tryPlay = async () => {
      try {
        await video.play();
        markPlaying();
      } catch {
        // Safari may block until a gesture; poster stays visible underneath.
      }
    };

    const unlockOnTouch = () => {
      void tryPlay();
      document.removeEventListener("touchstart", unlockOnTouch);
    };

    void tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", markPlaying);
    document.addEventListener("touchstart", unlockOnTouch, { passive: true });

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", markPlaying);
      document.removeEventListener("touchstart", unlockOnTouch);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [videoRef]);

  return videoVisible;
}

export function HeroScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutImageRef = useParallax<HTMLImageElement>(7);
  const [revealed, setRevealed] = useState(false);
  const videoVisible = useHeroVideoAutoplay(videoRef);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const heroContent = heroContentRef.current;
      if (!hero || !heroContent) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (reducedMotion || !isDesktop) return;

      gsap.to(heroContent, {
        opacity: 0.35,
        scale: 0.92,
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${getViewportHeight()}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    window.visualViewport?.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      window.visualViewport?.removeEventListener("resize", refresh);
    };
  }, []);

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
        className="relative top-0 z-10 min-h-dvh bg-navy-deep text-white lg:sticky lg:h-dvh lg:min-h-dvh lg:overflow-hidden"
      >
        <img
          src={heroMedia.poster}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoVisible ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />
        <video
          ref={videoRef}
          className={`hero-bg-video absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoVisible ? "opacity-100" : "opacity-0"
          }`}
          poster={heroMedia.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          aria-hidden
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/45 to-navy-deep/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,var(--color-accent-glow),transparent_32%)]" />

        <div
          ref={heroContentRef}
          className="relative mx-auto flex w-full max-w-7xl flex-col justify-start px-6 pb-12 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:justify-center sm:pb-16 sm:pt-[calc(5.5rem+env(safe-area-inset-top,0px))] lg:h-full lg:px-10 lg:pb-24 lg:pt-28"
        >
          <div className="flex max-w-3xl flex-col gap-8 sm:gap-14 lg:max-w-2xl lg:gap-16 xl:max-w-3xl">
            <div className="origin-left space-y-4 sm:space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent sm:text-sm">
                Vancouver · Burnaby · Richmond
              </p>
              <h1 className="font-sans text-[2rem] font-black uppercase leading-[1.06] tracking-[-0.04em] text-white max-[380px]:text-[1.75rem] sm:text-5xl md:text-[3.25rem] lg:text-6xl lg:leading-[1.02]">
                Homes built with care, clarity, and craft.
              </h1>
            </div>

            <div className="space-y-6 border-t border-white/15 pt-8 sm:space-y-9 lg:space-y-10 lg:pt-12">
              <p className="max-w-xl text-base leading-[1.75] text-white/85 sm:text-lg">
                {brand.tagline} From early planning to final walkthrough, we
                keep the process clear and the work well managed.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button
                  to="/contact"
                  className="!px-8 !py-3.5 !text-xs !font-bold !uppercase !tracking-widest bg-navy hover:!bg-navy-deep"
                >
                  Request a Quote
                </Button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-white/35 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-white/65 hover:bg-white/[0.18]"
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
          <div className={`relative overflow-hidden ${revealClass}`}>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                ref={aboutImageRef}
                src={aboutImage}
                alt="Modern custom home interior"
                className="absolute inset-x-0 -top-[12.5%] h-[125%] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 right-4 max-w-[220px] border border-stone-dark bg-white p-5 shadow-xl sm:-bottom-5 sm:-right-5">
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              About Vithu Developments
            </p>
            <h2 className="mt-4 font-sans text-3xl font-black uppercase leading-[1.02] tracking-[-0.045em] text-navy-deep sm:text-4xl lg:text-5xl">
              Building homes that feel considered from day one.
            </h2>
            <span
              aria-hidden
              className="mt-5 block h-[3px] w-12 rounded-full bg-accent"
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
