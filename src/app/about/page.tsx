import type { Metadata } from "next";
import { About } from "@/views/About";

export const metadata: Metadata = {
  title: "About Our Vancouver Home Building & Renovation Team",
  description:
    "Vithu Developments LTD is a Vancouver-based home builder and remodeling contractor serving Vancouver, Burnaby, and Richmond — focused on clear planning and move-in ready results.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About />;
}
