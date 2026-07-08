import type { Metadata } from "next";
import { Contact } from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact a Vancouver Home Builder — Free Consultation",
  description:
    "Get a free consultation with Vithu Developments LTD — tell us about your home building, remodeling, or kitchen renovation project in Vancouver, Burnaby, or Richmond.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
