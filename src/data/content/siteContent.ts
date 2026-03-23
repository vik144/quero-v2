import type { Award, CampaignPage, CatalogCategory, ContentPage, FAQItem, NavigationItem, SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  companyName: "Quero Tech",
  shortName: "Quero",
  tagline: "Build performance-first systems for gaming, creators, AI, and work.",
  description: "Quero Tech is a storefront for gaming PCs, creator rigs, laptops, and components. Explore the full public catalog, configure a dream machine, and route every purchase intent into expert-led support.",
  supportEmail: "querotechllp@gmail.com",
  phoneDisplay: "+91 8019434798",
  phoneHref: "tel:+918019434798",
  whatsappHref: "https://wa.me/918019434798",
  primaryLocation: "Quero Tech Experience Center, Hyderabad, India",
  hours: "Mon-Sat, 10:00 AM - 8:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com/querotechllp" },
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

export const homeValueProps = ["Browse laptops, components, prebuilt PCs, and accessories in one place.", "Get help choosing the right parts for gaming, work, or study.", "Ask for custom build advice, bulk pricing, or product recommendations.", "Shop a wide range of trusted computer brands and categories."];

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
    summary: "The site keeps the depth of the source catalog while reframing it as a premium advisory experience for customers who need help choosing the right machine, parts, and upgrade path.",
    sections: [
      {
        title: "What Quero Tech is optimizing for",
        body: ["Quero Tech combines a broad public hardware catalog with hands-on guidance for custom desktops, creator workstations, gaming setups, and specialized AI systems.", "The product layer is intentionally browseable without forcing checkout. Users can compare parts, study compatibility cues, and convert into expert-led enquiries when the decision actually matters."],
      },
      {
        title: "Where the experience is different",
        body: ["Instead of mirroring a typical storefront, the new design emphasizes use-case discovery, clearer catalog hierarchy, and fewer dead-end pages.", "The result is a site that works as a sales surface, a research tool, and an operations-ready content base for future commerce integration."],
      },
    ],
  },
  stores: {
    slug: "stores",
    title: "Visit, call, or hand off the build brief to the Quero team.",
    eyebrow: "Stores and access",
    summary: "A placeholder structure for physical locations and support channels, ready to be swapped with final Quero Tech business details.",
    sections: [
      {
        title: "Experience center",
        body: ["Primary showroom and consultation hub in Hyderabad. This slot should be replaced with the final Quero Tech address, map link, and walkthrough details.", "Use this page to list consultation windows, pickup rules, demo systems, and local service expectations."],
      },
      {
        title: "Remote support",
        body: ["For customers outside the city, the site should route discovery into BYDM, product enquiries, or expert consultation rather than checkout-first flows."],
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
        body: ["General questions route to the support desk. Purchase-ready users should be pushed toward the expert support and bulk enquiry flows where the team can qualify the request faster."],
      },
    ],
  },
};

export const faqs: FAQItem[] = [
  // Payments
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, UPI, and cash payments. EMI options are also available on select purchases so you can spread the cost over easy monthly installments.",
  },
  {
    question: "Is there an EMI option available?",
    answer: "Yes, we offer EMI on select credit and debit cards. EMI tenure and eligibility depend on your bank and card issuer. Our team can help you understand the available plans when you place your order.",
  },
  // Delivery
  {
    question: "Do you deliver across Hyderabad?",
    answer: "Yes, we deliver all over Hyderabad. Once your order is confirmed, our team will coordinate a convenient delivery time. For large or heavy items like full PC builds, we ensure safe doorstep delivery.",
  },
  {
    question: "How long does delivery take?",
    answer: "Most in-stock products are delivered within 1–3 business days across Hyderabad. Custom-built systems may take 3–7 business days depending on component availability and build complexity.",
  },
  // Consultation
  {
    question: "Do you offer free expert consultation?",
    answer: "Absolutely. Whether you are building your first gaming PC, upgrading your workstation, or setting up a lab, our experts provide free advice tailored to your workload, budget, and future upgrade plans. Reach out via the Expert Support page or visit our store.",
  },
  // Service & Support
  {
    question: "What kind of after-sales support do you provide?",
    answer: "We stand behind every product we sell. Our support includes assistance with hardware issues, troubleshooting, warranty claims with manufacturers, and guidance on upgrades. Just get in touch and our team will help you out.",
  },
  {
    question: "Do you offer warranty on products?",
    answer: "All products come with the manufacturer's official warranty. We help you with the entire warranty process — from filing a claim to getting a replacement — so you never have to deal with it alone.",
  },
  // Custom Builds
  {
    question: "Can you build a custom PC for me?",
    answer: "Yes, custom PC builds are one of our specialties. Use our Build Your Dream Machine page to tell us what you need, or speak with an expert and we will put together a system tailored to your exact requirements — gaming, content creation, AI workloads, or anything in between.",
  },
  // Bulk / Enterprise
  {
    question: "Do you handle bulk or enterprise orders?",
    answer: "Yes. Whether you are outfitting an office, a gaming café, a research lab, or a content studio, we handle bulk orders with dedicated pricing and priority support. Fill out our Bulk Enquiry form with your requirements and our team will get back to you promptly.",
  },

  // Returns
  {
    question: "What is your return and exchange policy?",
    answer: "We offer returns and exchanges as per our store policy and manufacturer guidelines. If you receive a defective or incorrect product, reach out to us immediately and we will arrange a replacement or refund.",
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
    description: "A campaign hub for AMD-focused products, performance launches, and build guidance across gaming and creator workloads.",
    ctaLabel: "Explore AMD hardware",
    ctaHref: "/brands/amd",
    focus: ["Ryzen processors", "Radeon graphics", "Motherboard ecosystems"],
  },
  nvidia: {
    slug: "nvidia",
    title: "NVIDIA-driven builds for gaming, studio, and AI work.",
    subtitle: "RTX campaigns, creator systems, and accelerated workflows.",
    description: "Use this hub for RTX storytelling, creator-grade performance messaging, and AI/compute-led system recommendations.",
    ctaLabel: "Browse component catalog",
    ctaHref: "/shop/components",
    focus: ["RTX graphics", "Studio systems", "AI acceleration"],
  },
  "gigabyte-brand": {
    slug: "gigabyte-brand",
    title: "Gigabyte hardware across boards, monitors, graphics, and cases.",
    subtitle: "A branded destination for launch promos and platform bundles.",
    description: "This page absorbs vendor-heavy campaign content into a cleaner branded landing page with curated collections and stronger hierarchy.",
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
