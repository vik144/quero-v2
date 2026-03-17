export type CatalogSection =
  | "laptops"
  | "components"
  | "accessories"
  | "prebuilt-pcs"
  | "deals"
  | "new-arrivals";

export type FeaturedTone = "primary" | "secondary" | "accent";

export type NavigationItem = {
  label: string;
  href: string;
  featured?: boolean;
  children?: NavigationItem[];
};

export type SiteConfig = {
  companyName: string;
  shortName: string;
  tagline: string;
  description: string;
  supportEmail: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  primaryLocation: string;
  hours: string;
  socials: Array<{ label: string; href: string }>;
  policyLinks: Array<{ label: string; href: string }>;
};

export type CatalogCategory = {
  slug: CatalogSection;
  title: string;
  eyebrow: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  image?: string;
  lastModified?: string;
  sourceUrl: string;
  brandSlug?: string;
  brandName?: string;
  sections: CatalogSection[];
};

export type Collection = {
  slug: string;
  title: string;
  image?: string;
  lastModified?: string;
  sourceUrl: string;
  section: CatalogSection | "brands" | "campaigns" | "general";
  isBrand: boolean;
  featuredTone?: FeaturedTone;
};

export type Brand = {
  slug: string;
  name: string;
  hero: string;
  specialties: string[];
};

export type CampaignPage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  focus: string[];
};

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  note: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  sourceUrl: string;
  image?: string;
  lastModified?: string;
  excerpt: string;
};

export type LeadFormSubmission = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source: string;
  interest?: string;
};
