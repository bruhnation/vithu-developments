import type { Metadata } from "next";
import { Home } from "@/views/Home";

export const metadata: Metadata = {
  title: {
    absolute:
      "Vancouver Home Builder, Remodeling & Kitchen Renovation | Vithu Developments LTD",
  },
  description:
    "Vithu Developments LTD is a Vancouver home builder and renovation contractor — custom homes, remodeling, and kitchen renovations across Vancouver, Burnaby & Richmond. Free consultation.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Home />;
}
