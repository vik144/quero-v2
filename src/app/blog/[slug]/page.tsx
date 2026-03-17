import Image from "next/image";
import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { getBlogPostBySlug } from "@/lib/catalog";
import { getRemoteBlogDetail } from "@/lib/source-site";
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

  const detail = await getRemoteBlogDetail(slug);

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow={`Blog / ${formatDate(post.lastModified)}`}
        title={detail?.title ?? post.title}
        description={detail?.description ?? post.excerpt}
      />
      {detail?.image || post.image ? (
        <div className="relative aspect-[16/7] overflow-hidden rounded-[2rem] border border-white/10">
          <Image src={detail?.image ?? post.image!} alt={detail?.title ?? post.title} fill className="object-cover" sizes="100vw" />
        </div>
      ) : null}
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-white/70">
          {(detail?.blocks.length ? detail.blocks : [post.excerpt]).map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </section>
      <LeadForm
        source={`Blog: ${post.slug}`}
        heading="Turn research readers into qualified enquiries."
        description="Editorial pages should end with a concrete path into product advice, system planning, or sourcing support."
        interestPlaceholder="What do you want to build or compare after reading?"
        compact
      />
    </div>
  );
}
