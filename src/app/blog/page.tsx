import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getBlogPosts } from "@/lib/catalog";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Blog"
        title="Guides, reviews, and hardware insights."
        description="Stay up to date with buying guides, hardware reviews, and category explainers to help you make the right choice."
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="overflow-hidden rounded-2xl border border-white/5 bg-[#151515] transition hover:border-orange-500/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {post.image ? (
                <Image src={post.image} alt={post.title} fill sizes="33vw" className="object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#1a1a1a] to-[#111]" />
              )}
            </div>
            <div className="space-y-3 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">{formatDate(post.lastModified)}</div>
              <div className="text-xl font-semibold text-white">{post.title}</div>
              <div className="text-sm leading-7 text-white/55">{post.excerpt}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
