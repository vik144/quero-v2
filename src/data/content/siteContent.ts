import type {
  Award,
  CampaignPage,
  CatalogCategory,
  ContentPage,
  FAQItem,
  NavigationItem,
  SiteConfig,
} from "@/types/site";

export const siteConfig: SiteConfig = {
  companyName: "Quero Tech",
  shortName: "Quero",
  tagline: "Build performance-first systems for gaming, creators, AI, and work.",
  description:
    "Quero Tech is a dark, modern catalog and advisory storefront for gaming PCs, creator rigs, laptops, and components. Explore the full public catalog, configure a dream machine, and route every purchase intent into expert-led support.",
  supportEmail: "hello@querotech.example",
  phoneDisplay: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappHref: "https://wa.me/919000000000",
  primaryLocation: "Quero Tech Experience Center, Hyderabad, India",
  hours: "Mon-Sat, 10:00 AM - 8:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  policyLinks: [
    { label: "Privacy", href: "/policies/privacy" },
    { label: "Shipping", href: "/policies/shipping" },
    { label: "Refunds", href: "/policies/refunds" },
    { label: "Returns", href: "/policies/returns" },
    { label: "Warranty", href: "/policies/warranty" },
  ],
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", featured: true },
  { label: "Laptops", href: "/shop/laptops" },
  { label: "Components", href: "/shop/components" },
  { label: "Accessories", href: "/shop/accessories" },
  { label: "Prebuilt PCs", href: "/shop/prebuilt-pcs" },
  { label: "BYDM", href: "/build-your-dream-machine", featured: true },
  { label: "Brands", href: "/brands" },
  {
    label: "Support",
    href: "/expert-support",
    children: [
      { label: "Expert Support", href: "/expert-support" },
      { label: "Bulk Enquiry", href: "/bulk-enquiry" },
      { label: "FAQ", href: "/faq" },
      { label: "Stores", href: "/stores" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "laptops",
    title: "Laptops",
    eyebrow: "Portable performance",
    description: "Gaming, creator, and workstation laptops organized by use-case and brand.",
  },
  {
    slug: "components",
    title: "Components",
    eyebrow: "Core hardware",
    description: "Processors, graphics cards, cooling, memory, storage, and the parts that define a build.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    eyebrow: "Peripheral layer",
    description: "Monitors, input gear, audio, capture tools, adapters, and desk setup essentials.",
  },
  {
    slug: "prebuilt-pcs",
    title: "Prebuilt PCs",
    eyebrow: "Ready to deploy",
    description: "Gaming, creator, and research systems with lead-focused CTAs instead of checkout.",
  },
  {
    slug: "deals",
    title: "Deals",
    eyebrow: "Promotions",
    description: "Campaign-driven offers, flagship launches, and featured brands with current demand.",
  },
  {
    slug: "new-arrivals",
    title: "New Arrivals",
    eyebrow: "Fresh stock",
    description: "Recently added products and newly surfaced public inventory.",
  },
];

export const homeValueProps = [
  "Browse laptops, components, prebuilt PCs, and accessories in one place.",
  "Get help choosing the right parts for gaming, work, or study.",
  "Ask for custom build advice, bulk pricing, or product recommendations.",
  "Shop a wide range of trusted computer brands and categories.",
];

export const useCases = [
  {
    title: "Gaming PCs",
    description: "Desktops, laptops, graphics cards, monitors, and gear for gaming setups.",
  },
  {
    title: "Work and Study",
    description: "Reliable laptops, desktops, monitors, and accessories for daily use.",
  },
  {
    title: "Custom Builds",
    description: "Choose parts for a new PC or ask the team to help build one for you.",
  },
  {
    title: "Accessories",
    description: "Keyboards, mice, audio, webcams, adapters, and other desk essentials.",
  },
];

export const contentPages: Record<string, ContentPage> = {
  about: {
    slug: "about",
    title: "Quero Tech builds systems around outcomes, not generic SKUs.",
    eyebrow: "About Quero Tech",
    summary:
      "The site keeps the depth of the source catalog while reframing it as a premium advisory experience for customers who need help choosing the right machine, parts, and upgrade path.",
    sections: [
      {
        title: "What Quero Tech is optimizing for",
        body: [
          "Quero Tech combines a broad public hardware catalog with hands-on guidance for custom desktops, creator workstations, gaming setups, and specialized AI systems.",
          "The product layer is intentionally browseable without forcing checkout. Users can compare parts, study compatibility cues, and convert into expert-led enquiries when the decision actually matters.",
        ],
      },
      {
        title: "Where the experience is different",
        body: [
          "Instead of mirroring a typical storefront, the new design emphasizes use-case discovery, clearer catalog hierarchy, and fewer dead-end pages.",
          "The result is a site that works as a sales surface, a research tool, and an operations-ready content base for future commerce integration.",
        ],
      },
    ],
  },
  stores: {
    slug: "stores",
    title: "Visit, call, or hand off the build brief to the Quero team.",
    eyebrow: "Stores and access",
    summary:
      "A placeholder structure for physical locations and support channels, ready to be swapped with final Quero Tech business details.",
    sections: [
      {
        title: "Experience center",
        body: [
          "Primary showroom and consultation hub in Hyderabad. This slot should be replaced with the final Quero Tech address, map link, and walkthrough details.",
          "Use this page to list consultation windows, pickup rules, demo systems, and local service expectations.",
        ],
      },
      {
        title: "Remote support",
        body: [
          "For customers outside the city, the site should route discovery into BYDM, product enquiries, or expert consultation rather than checkout-first flows.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Talk to Quero Tech about a build, upgrade, or sourcing need.",
    eyebrow: "Contact",
    summary: "All high-intent paths converge here: custom builds, part advice, urgent sourcing, and post-purchase support.",
    sections: [
      {
        title: "Response model",
        body: [
          "General questions route to the support desk. Purchase-ready users should be pushed toward the expert support and bulk enquiry flows where the team can qualify the request faster.",
        ],
      },
    ],
  },
};

export const faqs: FAQItem[] = [
  {
    question: "Can Quero Tech help me choose a complete system instead of a single part?",
    answer:
      "Yes. The site is structured to route uncertain buyers into guided flows like BYDM and expert support, where the team can recommend a full configuration based on workload, budget, and upgrade path.",
  },
  {
    question: "Is this launch transactional ecommerce?",
    answer:
      "No. This release supports full public catalog browsing and lead capture, but it deliberately avoids live checkout. Product pages focus on decision-making and conversion into enquiries.",
  },
  {
    question: "Do you support gaming, creator, and AI workflows separately?",
    answer:
      "Yes. The information architecture and homepage use-case sections explicitly separate gaming, content creation, AI/research, and studio needs so users can start from the right context.",
  },
  {
    question: "How should pricing be handled before full commerce goes live?",
    answer:
      "The recommended approach is to keep source product metadata browseable while using CTA copy like Enquire, Talk to an Expert, Build with Quero, and Bulk Pricing wherever a purchase button would normally appear.",
  },
  {
    question: "Can enterprise or lab buyers request larger quantities?",
    answer:
      "Yes. Bulk and institutional demand should flow through a dedicated bulk enquiry form with company, quantity, timeline, and deployment notes captured up front.",
  },
];

export const awards: Award[] = [
  {
    title: "AMD Authorized System Integrator",
    issuer: "Hardware ecosystem partner program",
    year: "2025",
    note: "Represents the caliber of partner trust content carried over from the source site.",
  },
  {
    title: "Best Strategic Partner",
    issuer: "Flagship vendor recognition",
    year: "2024",
    note: "Used to frame credibility and channel strength within the new brand system.",
  },
  {
    title: "Best Retail Share Gain",
    issuer: "Brand growth program",
    year: "2024",
    note: "Supports the trust-proof section on the homepage and the dedicated awards page.",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Regional performance recognition",
    year: "2023",
    note: "Keeps the awards layer visible without making it feel like a cluttered badge wall.",
  },
];

export const campaignPages: Record<string, CampaignPage> = {
  amd: {
    slug: "amd",
    title: "AMD platform systems and upgrade paths.",
    subtitle: "Processors, Radeon graphics, and AM-based builds.",
    description:
      "A campaign hub for AMD-focused products, performance launches, and build guidance across gaming and creator workloads.",
    ctaLabel: "Explore AMD hardware",
    ctaHref: "/brands/amd",
    focus: ["Ryzen processors", "Radeon graphics", "Motherboard ecosystems"],
  },
  nvidia: {
    slug: "nvidia",
    title: "NVIDIA-driven builds for gaming, studio, and AI work.",
    subtitle: "RTX campaigns, creator systems, and accelerated workflows.",
    description:
      "Use this hub for RTX storytelling, creator-grade performance messaging, and AI/compute-led system recommendations.",
    ctaLabel: "Browse component catalog",
    ctaHref: "/shop/components",
    focus: ["RTX graphics", "Studio systems", "AI acceleration"],
  },
  "gigabyte-brand": {
    slug: "gigabyte-brand",
    title: "Gigabyte hardware across boards, monitors, graphics, and cases.",
    subtitle: "A branded destination for launch promos and platform bundles.",
    description:
      "This page absorbs vendor-heavy campaign content into a cleaner branded landing page with curated collections and stronger hierarchy.",
    ctaLabel: "Open Gigabyte hub",
    ctaHref: "/brands/gigabyte",
    focus: ["Aorus platforms", "Motherboards", "Monitors"],
  },
};

export const bydmSections = [
  { title: "Processor", note: "Define the workload before defining the chip." },
  { title: "Motherboard", note: "Match platform, memory generation, and expansion path." },
  { title: "Monitor", note: "Choose the screen around the work, not as an afterthought." },
  { title: "Memory", note: "Balance capacity, generation, and future headroom." },
  { title: "Storage", note: "Fast boot, fast ingest, and space for active projects." },
  { title: "Graphics", note: "Gaming frames, render times, or model throughput." },
  { title: "Cooling", note: "Control thermal behavior under sustained load." },
  { title: "Power Supply", note: "Build around stability and upgrade overhead." },
  { title: "Case", note: "Airflow, acoustics, desk presence, and serviceability." },
  { title: "Peripherals", note: "Round out the station with monitors, audio, and control tools." },
];

export const policyContent = {
  privacy: {
    title: "Privacy Policy",
    body: "Quero Tech stores enquiry details only for sales and support follow-up, with production policy copy to be finalized before launch.",
  },
  shipping: {
    title: "Shipping Policy",
    body: "Shipping timelines, service levels, and coverage zones should be supplied by the Quero Tech team and then wired into this route.",
  },
  refunds: {
    title: "Refund Policy",
    body: "This route holds the final refund terms once legal and operations review is complete.",
  },
  returns: {
    title: "Returns Policy",
    body: "Use this page for return windows, packaging conditions, and authorization steps once finalized.",
  },
  warranty: {
    title: "Warranty Policy",
    body: "Quero Tech should publish manufacturer-backed warranty handling plus any in-house support commitments here.",
  },
};
