import type { Metadata } from "next";
import { Gallery } from "@/views/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A preview of our work in home building and remodeling across the Lower Mainland.",
};

export default function GalleryPage() {
  return <Gallery />;
}
