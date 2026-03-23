import Image from "next/image";
import Link from "next/link";

import { titleizeSlug } from "@/lib/utils";
import type { Collection } from "@/types/site";

type CollectionCardProps = {
  collection: Collection;
};

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/shop/collections/${collection.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#151515] transition hover:border-orange-500/30 hover:scale-[1.02] duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#111]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {titleizeSlug(collection.section)}
          </div>
          <div className="mt-1 text-lg font-bold text-white">{collection.title}</div>
        </div>
      </div>
    </Link>
  );
}
