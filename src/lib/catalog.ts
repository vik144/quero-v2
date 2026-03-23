import sourceIndex from "@/data/generated/source-index.json";
import { blogPosts as localBlogPosts } from "@/data/content/blogPosts";
import { campaignPages } from "@/data/content/siteContent";
import type { Brand, CatalogSection, Collection, Product } from "@/types/site";

type SourceIndex = typeof sourceIndex;

const products = sourceIndex.products as Product[];
const collections = sourceIndex.collections as Collection[];
const brands = sourceIndex.brands as Brand[];

const sectionAliases: Record<string, CatalogSection> = {
  laptops: "laptops",
  components: "components",
  accessories: "accessories",
  "prebuilt-pcs": "prebuilt-pcs",
  deals: "deals",
  "new-arrivals": "new-arrivals",
};

export function getCatalogStats() {
  return sourceIndex.stats;
}

export function getAllProducts() {
  return products;
}

export function getAllCollections() {
  return collections;
}

export function getFeaturedProducts(section?: CatalogSection, count = 12) {
  const base = section ? products.filter((product) => product.sections.includes(section)) : products;
  if (section) return base.slice(0, count);

  // When no section filter, pick a variety across all sections
  const sectionOrder: CatalogSection[] = ["components", "laptops", "accessories", "prebuilt-pcs"];
  const grouped = new Map<CatalogSection, Product[]>();
  for (const s of sectionOrder) {
    grouped.set(s, base.filter((p) => p.sections.includes(s)));
  }

  const result: Product[] = [];
  const seen = new Set<string>();
  let round = 0;

  while (result.length < count) {
    let added = false;
    for (const s of sectionOrder) {
      if (result.length >= count) break;
      const items = grouped.get(s)!;
      if (round < items.length) {
        const p = items[round];
        if (!seen.has(p.slug)) {
          seen.add(p.slug);
          result.push(p);
          added = true;
        }
      }
    }
    if (!added) break;
    round++;
  }

  return result;
}

export function getCollectionsForSection(section: CatalogSection) {
  return collections.filter((collection) => collection.section === section);
}

export function getShopSection(section: string): CatalogSection | null {
  return sectionAliases[section] ?? null;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductsForBrand(slug: string, count = 60) {
  return products.filter((product) => product.brandSlug === slug).slice(0, count);
}

export function getBrands() {
  return brands.sort((a, b) => a.name.localeCompare(b.name));
}

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function getCampaigns() {
  return Object.values(campaignPages);
}

export function getCampaignBySlug(slug: string) {
  return campaignPages[slug];
}

export function getBlogPosts() {
  return localBlogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return localBlogPosts.find((post) => post.slug === slug);
}

export function getNewestProducts(count = 12) {
  return [...products]
    .sort((a, b) => {
      const aTime = a.lastModified ? new Date(a.lastModified).getTime() : 0;
      const bTime = b.lastModified ? new Date(b.lastModified).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, count);
}

export function getNewestCollections(count = 12) {
  return [...collections]
    .sort((a, b) => {
      const aTime = a.lastModified ? new Date(a.lastModified).getTime() : 0;
      const bTime = b.lastModified ? new Date(b.lastModified).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, count);
}

export function getHomeFeaturedCollections() {
  return collections
    .filter((collection) => ["laptops", "components", "accessories", "prebuilt-pcs"].includes(collection.section))
    .slice(0, 8);
}

export function getBrandCollections() {
  return collections.filter((collection) => collection.isBrand);
}

export function getSourceIndexMeta(): Pick<SourceIndex, "importedAt" | "sourceBase" | "stats"> {
  return {
    importedAt: sourceIndex.importedAt,
    sourceBase: sourceIndex.sourceBase,
    stats: sourceIndex.stats,
  };
}
