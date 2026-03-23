import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getBrands } from "@/lib/catalog";

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Brands"
        title="Shop by brand — all your favourite names in one place."
        description="Browse products from trusted hardware brands. Each brand hub has curated products, collections, and campaign tie-ins."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="rounded-2xl border border-white/5 bg-[#151515] p-6 transition hover:border-orange-500/30 hover:bg-[#1a1a1a]"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-white/35">{brand.slug}</div>
            <div className="mt-3 text-2xl font-extrabold text-white">{brand.name}</div>
            <div className="mt-3 text-sm leading-7 text-white/60">{brand.hero}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
