import type { Metadata } from "next";
import { FAQ } from "@/views/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about timelines, service areas, and working with Vithu Developments.",
};

export default function FAQPage() {
  return <FAQ />;
}
