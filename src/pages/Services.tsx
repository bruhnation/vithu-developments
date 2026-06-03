import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "../data/site";
import { Button, PageHero } from "../components/ui";

export function Services() {
  return (
    <>
      <PageHero
        title="Our services"
        subtitle="Custom homes, remodeling, kitchens, and design-build — serving Vancouver, Burnaby, and Richmond."
      />
      <div className="divide-y divide-stone-dark">
        {services.map((service, i) => (
          <section
            key={service.title}
            className={`px-6 py-20 ${i % 2 === 1 ? "bg-white" : ""}`}
          >
            <div
              className={`mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={service.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover shadow-md"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl text-navy-deep md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-navy-deep"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" className="mt-8">
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
