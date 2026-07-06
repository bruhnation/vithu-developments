import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Layout } from "@/components/Layout";
import { brand, logoUrl } from "@/data/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Vancouver Home Builder`,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
  icons: {
    icon: logoUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
