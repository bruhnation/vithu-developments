import {
  areaServedCities,
  brand,
  faqs,
  logoUrl,
  services,
  siteUrl,
  socialLinks,
} from "@/data/site";

/**
 * LocalBusiness (GeneralContractor) structured data for the whole site.
 *
 * This is a service-area business with no public street address, so `address`
 * carries only locality/region/country — matching how the Google Business
 * Profile should be configured. `areaServed` lists the cities we serve.
 */
export function localBusinessSchema(): Record<string, unknown> {
  // JSON-LD requires absolute URLs; logoUrl is a site-relative path.
  const absoluteLogo = new URL(logoUrl, siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}/#business`,
    name: brand.name,
    url: siteUrl,
    logo: absoluteLogo,
    image: absoluteLogo,
    description: brand.tagline,
    telephone: brand.phone,
    email: brand.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: areaServedCities.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsAbout: services.map((s) => s.title),
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
  };
}

/** FAQPage structured data built from the shared faqs list. */
export function faqSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
