import Image from "next/image";
import Link from "next/link";

import { sectionLabel, titleizeSlug } from "@/lib/utils";
import type { Product } from "@/types/site";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#151515] transition hover:border-orange-500/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#111]" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-orange-400/60">
          {product.sections.slice(0, 2).map((section) => (
            <span key={section}>{sectionLabel(section)}</span>
          ))}
        </div>
        <div className="line-clamp-2 text-sm font-semibold text-white">{product.title}</div>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="text-white/50">
            {product.brandName ?? (product.brandSlug ? titleizeSlug(product.brandSlug) : "")}
          </span>
          <span className="font-bold text-white">Request Pricing</span>
        </div>
        <div className="mt-1 w-full rounded-xl bg-[#ff6b00] py-2 text-center text-sm font-semibold text-white transition group-hover:bg-[#ff6b00]/90">
          Enquire Now
        </div>
      </div>
    </Link>
  );
}
