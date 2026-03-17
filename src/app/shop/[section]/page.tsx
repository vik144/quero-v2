import { notFound } from "next/navigation";

import { CatalogExplorer } from "@/components/catalog-explorer";
import { PageHero } from "@/components/page-hero";
import { catalogCategories } from "@/data/content/siteContent";
import { getCollectionsForSection, getFeaturedProducts, getShopSection } from "@/lib/catalog";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export default async function ShopSectionPage({ params }: SectionPageProps) {
  const { section: sectionSlug } = await params;
  const section = getShopSection(sectionSlug);

  if (!section) {
    notFound();
  }

  const category = catalogCategories.find((item) => item.slug === section);

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={category.eyebrow}
        title={category.title}
        description={category.description}
      />
      <CatalogExplorer
        collections={getCollectionsForSection(section)}
        products={getFeaturedProducts(section, 160)}
        title={`${category.title} catalog`}
        description="Sticky filters and deeper faceted UX can expand from this shared explorer. The route already scopes catalog data to the current section."
      />
    </div>
  );
}
