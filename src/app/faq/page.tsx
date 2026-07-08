import type { Metadata } from "next";
import { FAQ } from "@/views/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home Building & Renovation FAQ — Vancouver",
  description:
    "Answers to common questions about new home builds, remodeling, kitchen renovations, timelines, and service areas across Vancouver, Burnaby, and Richmond.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <FAQ />
    </>
  );
}
