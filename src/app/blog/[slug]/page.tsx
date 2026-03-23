import Image from "next/image";
import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { getBlogPostBySlug } from "@/lib/catalog";
import { formatDate } from "@/lib/utils";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={`Blog / ${formatDate(post.lastModified)}`}
        title={post.title}
        description={post.excerpt}
      />
      {post.image ? (
        <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-white/5">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
        </div>
      ) : null}
      <section className="rounded-2xl border border-white/5 bg-[#151515] p-8">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-white/70">
          {post.blocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </section>
      <LeadForm
        source={`Blog: ${post.slug}`}
        heading="Interested in what you read?"
        description="Turn your research into action — get product advice, system planning, or sourcing support."
        interestPlaceholder="What do you want to build or compare after reading?"
        compact
      />
    </div>
  );
}
