import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Layout } from "@/components/Layout";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { brand, googleSiteVerification, logoUrl, siteUrl } from "@/data/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Vancouver Home Builder & Renovation Contractor`,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: logoUrl,
  },
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_CA",
    url: siteUrl,
    title: `${brand.name} | Vancouver Home Builder & Renovation Contractor`,
    description: brand.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Vancouver Home Builder & Renovation Contractor`,
    description: brand.tagline,
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
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
        <JsonLd data={localBusinessSchema()} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
