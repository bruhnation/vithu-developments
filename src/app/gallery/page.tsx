import type { Metadata } from "next";
import { Gallery } from "@/views/Gallery";

export const metadata: Metadata = {
  title: "Project Gallery — Vancouver Home Builds & Renovations",
  description:
    "A preview of our custom home building, remodeling, and kitchen renovation work across Vancouver, Burnaby, Richmond, and the Lower Mainland.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <Gallery />;
}
