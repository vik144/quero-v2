import Image from "next/image";
import Link from "next/link";

import { formatDate, sectionLabel, titleizeSlug } from "@/lib/utils";
import type { Product } from "@/types/site";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] transition hover:border-lime-300/35 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,#bef26433,transparent_30%),linear-gradient(135deg,#020617,#111827)]" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-white/35">
          {product.sections.slice(0, 2).map((section) => (
            <span key={section}>{sectionLabel(section)}</span>
          ))}
        </div>
        <div className="line-clamp-3 text-base font-semibold text-white">{product.title}</div>
        <div className="mt-auto flex items-center justify-between text-sm text-white/50">
          <span>{product.brandName ?? (product.brandSlug ? titleizeSlug(product.brandSlug) : "Request pricing")}</span>
          <span>{formatDate(product.lastModified)}</span>
        </div>
      </div>
    </Link>
  );
}
