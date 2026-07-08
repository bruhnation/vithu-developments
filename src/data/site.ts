export const brand = {
  name: "Vithu Developments LTD",
  shortName: "Vithu",
  tagline:
    "Vancouver home builder, remodeling contractor, and kitchen renovation specialist.",
  location: "Located in Vancouver, serving Vancouver and surrounding areas.",
  phone: "(604) 767-3036",
  phoneHref: "tel:+16047673036",
  email: "info@vithudevelopmentsltd.com",
  address: "Vancouver, BC V6L 2T6",
  mapsUrl:
    "https://www.google.com/maps?q=Vancouver,+BC+V6L+2T6",
};

/** Canonical production URL, no trailing slash. Used for metadataBase,
 *  sitemap, robots, canonical tags, and JSON-LD. */
export const siteUrl = "https://vithudevelopmentsltd.com";

/** Cities we serve — used for LocalBusiness areaServed and on-page copy. */
export const areaServedCities = ["Vancouver", "Burnaby", "Richmond"];

/** External profiles that reference this business (Google Business Profile,
 *  social, directories). Populate as they become available — these feed the
 *  JSON-LD `sameAs` array so Google connects the site to those listings. */
export const socialLinks: string[] = [
  // Google Business Profile (canonical CID link)
  "https://www.google.com/maps?cid=16952176656884657447",
];

/** Google Search Console verification token. Fill in once the property is
 *  verified in Search Console, then it renders as a <meta> tag. */
export const googleSiteVerification = "";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const serviceAreas = [
  {
    city: "Vancouver",
    description:
      "Custom home builds, renovations, and kitchen remodels across Vancouver neighbourhoods.",
  },
  {
    city: "Burnaby",
    description:
      "Ground-up construction and remodeling for homeowners throughout Burnaby.",
  },
  {
    city: "Richmond",
    description:
      "Design-build and renovation services for Richmond and surrounding communities.",
  },
];

export const heroMedia = {
  video: "https://assets.mixkit.co/videos/3422/3422-720.mp4",
  poster:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
};

/** Shared still image for about blocks on the home page and /about */
export const aboutImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85";

/** Background for below-the-fold sections (not used in hero) */
export const sectionBackdrop =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85";

export const logoUrl =
  "https://vithudevelopmentsltd.com/wp-content/themes/hmb3/images/logo.png";

export const services = [
  {
    title: "Custom Home Building",
    description:
      "Ground-up homes planned around the way you live, with clear budgets, reliable trades, and careful finishing from start to walkthrough.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Full build coordination",
      "Layout and finish planning",
      "Site-to-finish project management",
    ],
  },
  {
    title: "Home Remodeling",
    description:
      "Thoughtful renovations that improve how your home looks, works, and feels without losing sight of timeline, budget, or daily disruption.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Interior and exterior updates",
      "Additions and layout changes",
      "Coordinated trades and schedules",
    ],
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Clean, functional kitchens built around real use: storage, workflow, durable materials, and details that make the space feel finished.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Cabinetry and layout planning",
      "Countertops, lighting, and finishes",
      "Practical storage upgrades",
    ],
  },
  {
    title: "Design-Build",
    description:
      "One accountable team guiding the project from early ideas through construction, helping decisions stay organized and buildable.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Early scope and budget clarity",
      "Planning through construction",
      "Fewer handoffs and surprises",
    ],
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
];

export const faqs = [
  {
    q: "How long does a new home build take?",
    a: "Professional builders often complete work in three to four months, though weather, supply lead times, and design changes can extend timelines to six months. We recommend planning for the longer window.",
  },
  {
    q: "Do you work in Burnaby and Richmond?",
    a: "Yes. We serve Vancouver, Burnaby, Richmond, and surrounding communities across the Lower Mainland.",
  },
  {
    q: "Can you remodel an existing home?",
    a: "Absolutely. Our team handles renovations, additions, and kitchen remodels — not only ground-up custom homes.",
  },
  {
    q: "What should I expect at the first consultation?",
    a: "We review your goals, budget range, and timeline, then outline next steps for quotes and project planning. Consultations are free.",
  },
  {
    q: "Do you manage subcontractors?",
    a: "Yes. As your general contractor, we coordinate framers, drywallers, window installation, cabinetry, and other trades through completion.",
  },
  {
    q: "What if I am buying in a new development?",
    a: "Staying in close contact with your builder is essential. We help ensure finishes and details match what you agreed to before move-in day.",
  },
];

export const homeIntro = `Vithu Developments LTD helps homeowners plan and build spaces that feel considered from the first conversation to the final walkthrough.

Based in Vancouver, we work across custom homes, renovations, additions, and kitchen remodels with a focus on practical planning, dependable trades, and clean finishing. Whether the project starts with a blank lot or an older home that needs a smarter layout, our goal is to make the process clear and the final result feel ready to live in.`;

export const aboutCopy = `Vithu Developments LTD is a Vancouver-based home builder and remodeling contractor serving homeowners across Vancouver, Burnaby, Richmond, and nearby communities.

From early planning and pricing through trades, inspections, cabinetry, finishing, and final walkthrough, our team keeps the work organized and the communication straightforward.

Whether you are building new, renovating an existing home, or upgrading the rooms you use every day, we focus on work that is realistic, well managed, and built with care.`;
