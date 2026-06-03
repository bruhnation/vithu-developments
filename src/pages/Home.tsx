import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Calendar, MapPin, MessageCircle } from "lucide-react";
import {
  brand,
  heroImages,
  homeIntro,
  serviceAreas,
  services,
  whyChoose,
} from "../data/site";
import { Button, SectionHeading } from "../components/ui";

const trustBadges = [
  { icon: Calendar, label: "Available by appointment" },
  { icon: MessageCircle, label: "Free consultations" },
  { icon: Award, label: "Licensed & certified" },
];

export function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % heroImages.length),
      5500,
    );
    return () => clearInterval(id);
  }, []);

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
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-lg border border-white/60 bg-white/90 p-8 shadow-[0_8px_40px_rgba(15,28,46,0.12)] backdrop-blur-md sm:max-w-xl sm:p-10 lg:p-12"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Vancouver · Burnaby · Richmond
              </p>
              <h1 className="mt-4 font-sans text-3xl font-bold uppercase leading-[1.08] tracking-tight text-accent sm:text-4xl lg:text-[2.65rem]">
                Vancouver, Burnaby &amp; Richmond&apos;s
                <span className="mt-1 block text-navy-deep">
                  Best Home Builder
                </span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-navy-deep/90 sm:text-lg">
                {brand.tagline}
              </p>
              <p className="mt-2 text-sm text-slate">{brand.location}</p>

              <div className="mt-8 flex flex-wrap gap-3">
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
              </div>

              <ul className="mt-8 flex flex-col gap-3 border-t border-stone-dark pt-8 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-sm font-medium text-navy-deep"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="About your project"
              title="Build the home you couldn't find"
              description={homeIntro}
            />
            <Button to="/about" variant="ghost" className="mt-8 gap-2">
              Learn about us <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={heroImages[0]}
              alt="Home design and floor plan"
              className="aspect-[4/3] w-full object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden border border-accent bg-white px-6 py-4 shadow-lg md:block">
              <p className="font-serif text-3xl text-navy-deep">15+</p>
              <p className="text-xs uppercase tracking-widest text-slate">
                Years serving the Lower Mainland
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-stone-dark bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around your vision"
            description="From custom homes to kitchen remodels — one team, clear communication."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border border-stone-dark bg-stone transition-shadow hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-navy-deep">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">
                    {service.description}
                  </p>
                  <Button to="/services" variant="ghost" className="mt-6 !px-0 !py-0 border-0">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why Vithu"
            title="Benefits of a professional contractor"
            description="A general contractor keeps your build organized — from land survey through cabinetry and final walkthrough."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-stone-dark bg-white p-8"
              >
                <h3 className="font-semibold text-navy-deep">{item.title}</h3>
                <p className="mt-3 text-slate leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-dark px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Service areas
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 border border-navy/10 bg-white px-5 py-2.5 text-sm font-medium text-navy"
              >
                <MapPin className="h-4 w-4 text-accent" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Ready to start your dream home?
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Call today for a free consultation. Our builders are ready to discuss
              your timeline, budget, and next steps.
            </p>
          </div>
          <Button to="/contact" className="shrink-0 bg-accent hover:!bg-accent-hover">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
