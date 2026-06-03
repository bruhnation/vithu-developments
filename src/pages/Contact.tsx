import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand } from "../data/site";
import { Button, PageHero } from "../components/ui";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Get your free consultation"
        subtitle="Tell us about your project — we'll follow up to discuss scope, timeline, and next steps."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy-deep">Contact information</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-navy text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                    Phone
                  </p>
                  <a
                    href={brand.phoneHref}
                    className="text-lg font-medium text-navy-deep hover:text-navy"
                  >
                    {brand.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-navy text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                    Email
                  </p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-lg font-medium text-navy-deep hover:text-navy"
                  >
                    {brand.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-navy text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                    Location
                  </p>
                  <p className="text-lg text-navy-deep">{brand.address}</p>
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 inline-block text-sm text-accent hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-stone-dark bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-navy-deep">Thank you!</p>
                <p className="mt-3 text-slate">
                  This demo form does not send email. For a live site, connect
                  Formspree, Netlify Forms, or your preferred handler.
                </p>
                <p className="mt-6">
                  Or call us now:{" "}
                  <a href={brand.phoneHref} className="font-semibold text-navy">
                    {brand.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                      First name
                    </span>
                    <input
                      required
                      name="firstName"
                      className="mt-2 w-full border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                      Last name
                    </span>
                    <input
                      required
                      name="lastName"
                      className="mt-2 w-full border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="mt-2 w-full border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                    Service
                  </span>
                  <select
                    name="service"
                    className="mt-2 w-full border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                  >
                    <option>Custom home build</option>
                    <option>Home remodeling</option>
                    <option>Kitchen remodeling</option>
                    <option>Design-build</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y border border-stone-dark bg-stone px-4 py-3 outline-none focus:border-navy"
                  />
                </label>
                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
