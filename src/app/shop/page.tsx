import { CatalogExplorer } from "@/components/catalog-explorer";
import { PageHero } from "@/components/page-hero";
import { getAllCollections, getCatalogStats, getNewestProducts } from "@/lib/catalog";

export default function ShopPage() {
  const stats = getCatalogStats();
  const collections = getAllCollections().filter((collection) =>
    ["laptops", "components", "accessories", "prebuilt-pcs", "deals", "new-arrivals"].includes(
      collection.section,
    ),
  );

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Shop"
        title="A catalog hub that makes broad inventory feel navigable."
        description="Browse the mapped public catalog through sections, collection hubs, and product cards optimized for discovery instead of checkout friction."
        stats={[
          { label: "Products", value: `${stats.products}+` },
          { label: "Collections", value: `${collections.length}` },
          { label: "Brand hubs", value: `${stats.brands}` },
        ]}
      />
      <CatalogExplorer
        collections={collections}
        products={getNewestProducts(120)}
        title="Explore the catalog"
        description="Search across representative products and the full collection layer. Deep routes cover the complete public inventory."
      />
    </div>
  );
}
