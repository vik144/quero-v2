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
        title="Editorial content remains part of the funnel."
        description="The imported blog inventory gives Quero Tech an SEO and education layer for hardware research, buying guides, and category explainer content."
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/35"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {post.image ? (
                <Image src={post.image} alt={post.title} fill sizes="33vw" className="object-cover" />
              ) : (
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,#22d3ee33,transparent_26%),linear-gradient(135deg,#0f172a,#111827)]" />
              )}
            </div>
            <div className="space-y-3 p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-white/35">{formatDate(post.lastModified)}</div>
              <div className="text-xl font-semibold text-white">{post.title}</div>
              <div className="text-sm leading-7 text-white/58">{post.excerpt}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
