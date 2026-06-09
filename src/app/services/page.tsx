import type { Metadata } from "next";
import { Services } from "@/views/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom homes, remodeling, kitchens, and design-build — serving Vancouver, Burnaby, and Richmond.",
};

export default function ServicesPage() {
  return <Services />;
}
