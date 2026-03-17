import type { CatalogSection } from "@/types/site";

const TITLE_EXCEPTIONS = new Map([
  ["bydm", "BYDM"],
  ["gpu", "GPU"],
  ["ssd", "SSD"],
  ["ups", "UPS"],
  ["amd", "AMD"],
  ["nvidia", "NVIDIA"],
  ["rtx", "RTX"],
  ["pc", "PC"],
  ["pcs", "PCs"],
  ["hp", "HP"],
  ["msi", "MSI"],
  ["asus", "ASUS"],
  ["acer", "Acer"],
  ["lg", "LG"],
  ["ai", "AI"],
]);

export function titleizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => TITLE_EXCEPTIONS.get(part.toLowerCase()) ?? part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatDate(input?: string) {
  if (!input) {
    return "Updated recently";
  }

  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return "Updated recently";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function sectionLabel(section: CatalogSection) {
  switch (section) {
    case "prebuilt-pcs":
      return "Prebuilt PCs";
    case "new-arrivals":
      return "New Arrivals";
    default:
      return titleizeSlug(section);
  }
}

export function normalizeShopifyImage(src?: string) {
  if (!src) {
    return undefined;
  }

  if (src.startsWith("//")) {
    return `https:${src}`;
  }

  return src;
}

export function pick<T>(items: T[], count: number) {
  return items.slice(0, count);
}
