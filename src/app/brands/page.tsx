import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getBrands } from "@/lib/catalog";

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Brands"
        title="Vendor hubs live here, instead of crowding the top-level navigation."
        description="This index preserves source brand depth while keeping the overall IA cleaner. Each brand page can host products, related collections, and campaign tie-ins."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.05]"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-white/35">{brand.slug}</div>
            <div className="mt-3 text-2xl font-[family:var(--font-display)] text-white">{brand.name}</div>
            <div className="mt-3 text-sm leading-7 text-white/60">{brand.hero}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
