import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { aboutCopy, heroImages } from "../data/site";
import { Button, PageHero } from "../components/ui";

const credentials = [
  "Flexible ground-up or renovation projects",
  "Professional project management",
  "Coordinated trades and scheduling",
  "Move-in ready finish standards",
];

export function About() {
  return (
    <>
      <PageHero
        title="About Vithu Developments"
        subtitle="A Vancouver home builder focused on quality, communication, and results you can move into with confidence."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={heroImages[1]}
            alt=""
            className="aspect-[4/3] w-full object-cover shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {aboutCopy.split("\n\n").map((para) => (
              <p key={para.slice(0, 40)} className="mb-4 text-slate leading-relaxed">
                {para}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-deep">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/contact" className="mt-10">
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
