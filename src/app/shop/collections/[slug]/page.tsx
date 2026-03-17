import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { getCollectionBySlug, getFeaturedProducts, getProductBySlug } from "@/lib/catalog";
import { getRemoteCollectionDetail } from "@/lib/source-site";

type CollectionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const remoteDetail = await getRemoteCollectionDetail(slug);
  const scopedProducts =
    remoteDetail?.productSlugs
      .map((productSlug) => getProductBySlug(productSlug))
      .filter((product) => Boolean(product))
      .slice(0, 16) ?? [];

  const fallbackProducts = getFeaturedProducts(
    collection.section === "general" || collection.section === "brands" || collection.section === "campaigns"
      ? undefined
      : collection.section,
    12,
  );

  const visibleProducts = scopedProducts.length ? scopedProducts : fallbackProducts;

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={`Collection / ${collection.section}`}
        title={remoteDetail?.title ?? collection.title}
        description={
          remoteDetail?.description ||
          "This collection route preserves source catalog depth while giving the new brand system better hierarchy, context, and a conversion path."
        }
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product!.slug} product={product!} />
        ))}
      </section>
      <LeadForm
        source={`Collection: ${collection.slug}`}
        heading="Want help narrowing this collection down?"
        description="Use this route-level form to convert collection browsing into actionable conversations about compatibility, budget, or availability."
        interestPlaceholder="Which products from this collection matter to you?"
        compact
      />
    </div>
  );
}
