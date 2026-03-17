import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { getBrandBySlug, getProductsForBrand } from "@/lib/catalog";

type BrandDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BrandDetailPage({ params }: BrandDetailPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const products = getProductsForBrand(slug, 24);

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Brand hub"
        title={brand.name}
        description={brand.hero}
        stats={brand.specialties.slice(0, 3).map((specialty) => ({ label: "Active section", value: specialty || "Catalog" }))}
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
      <LeadForm
        source={`Brand: ${brand.slug}`}
        heading={`Need help planning around ${brand.name}?`}
        description="Brand hubs are a good place to capture vendor-led demand without requiring the customer to choose a single product first."
        interestPlaceholder="Preferred product line, budget, deployment scope..."
        compact
      />
    </div>
  );
}
