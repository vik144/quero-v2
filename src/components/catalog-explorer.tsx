"use client";

import { useDeferredValue, useState } from "react";
import { Search } from "lucide-react";

import { CollectionCard } from "@/components/collection-card";
import { ProductCard } from "@/components/product-card";
import type { Collection, Product } from "@/types/site";

type CatalogExplorerProps = {
  collections: Collection[];
  products: Product[];
  title: string;
  description: string;
};

export function CatalogExplorer({
  collections,
  products,
  title,
  description,
}: CatalogExplorerProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const queryLower = deferredQuery.trim().toLowerCase();

  const filteredCollections = collections.filter((collection) =>
    `${collection.title} ${collection.slug}`.toLowerCase().includes(queryLower),
  );
  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.slug} ${product.brandSlug ?? ""}`.toLowerCase().includes(queryLower),
  );

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400/60">Explorer</div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{description}</p>
        </div>
        <div className="relative w-full lg:max-w-sm">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search collections, products, or brands"
            className="w-full rounded-xl border border-white/10 bg-[#151515] px-10 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#ff6b00]/50"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Collections</h3>
          <div className="text-sm text-white/45">{filteredCollections.length} visible</div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCollections.slice(0, 12).map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Products</h3>
          <div className="text-sm text-white/45">{filteredProducts.length} visible</div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.slice(0, 16).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
