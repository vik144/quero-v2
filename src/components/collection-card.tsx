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
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/35 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,#22d3ee33,transparent_35%),linear-gradient(135deg,#0f172a,#111827)]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.85)_100%)]" />
      </div>
      <div className="space-y-2 p-5">
        <div className="text-xs uppercase tracking-[0.3em] text-white/35">
          {titleizeSlug(collection.section)}
        </div>
        <div className="text-lg font-semibold text-white">{collection.title}</div>
        <div className="text-sm text-white/55">Open the collection hub, browse products, and route demand into the right lead flow.</div>
      </div>
    </Link>
  );
}
