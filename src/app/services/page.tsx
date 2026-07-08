import type { Metadata } from "next";
import { Services } from "@/views/Services";

export const metadata: Metadata = {
  title: "Home Building, Remodeling & Kitchen Renovation in Vancouver",
  description:
    "Custom home building, home remodeling, kitchen renovation, and design-build services for Vancouver, Burnaby, and Richmond homeowners.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <Services />;
}
