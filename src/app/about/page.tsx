import type { Metadata } from "next";
import { About } from "@/views/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vithu Developments LTD — a Vancouver home builder focused on quality, communication, and move-in ready results.",
};

export default function AboutPage() {
  return <About />;
}
