"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand } from "@/data/site";
import { Button, PageHero } from "@/components/ui";

/** Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY to enable seamless
 *  background email delivery. Without it, the form falls back to opening the
 *  visitor's email client so leads are never silently lost. */
const CONTACT_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim();

    // No form backend configured: fall back to the visitor's email client.
    if (!CONTACT_ACCESS_KEY) {
      const body = [
        `Name: ${name}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Service: ${data.get("service") ?? ""}`,
        "",
        `${data.get("message") ?? ""}`,
      ].join("\n");
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
        `Quote request from ${name || "website"}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    data.append("access_key", CONTACT_ACCESS_KEY);
    data.append("subject", `New quote request from ${name || "website"}`);
    data.append("from_name", "Vithu Developments website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        title="Get Your Free Consultation"
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
            {status === "success" ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-navy-deep">Thank you!</p>
                <p className="mt-3 text-slate">
                  We received your message and will follow up shortly to discuss
                  your project, timeline, and next steps.
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
                {/* Honeypot: hidden from users, catches spam bots. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  aria-hidden="true"
                />
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
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? "Sending…" : "Request a Quote"}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong sending your message. Please call us at{" "}
                    <a href={brand.phoneHref} className="font-semibold underline">
                      {brand.phone}
                    </a>{" "}
                    or email{" "}
                    <a
                      href={`mailto:${brand.email}`}
                      className="font-semibold underline"
                    >
                      {brand.email}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
