import type { Metadata } from "next";
import { Contact } from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get your free consultation — tell us about your project and we'll follow up to discuss scope, timeline, and next steps.",
};

export default function ContactPage() {
  return <Contact />;
}
