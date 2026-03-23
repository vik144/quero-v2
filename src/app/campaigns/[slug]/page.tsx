import Link from "next/link";
import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { getCampaignBySlug, getFeaturedProducts } from "@/lib/catalog";

type CampaignDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CampaignDetailPage({ params }: CampaignDetailPageProps) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  const spotlightProducts = getFeaturedProducts(undefined, 8);

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Campaign page"
        title={campaign.title}
        description={campaign.description}
      />
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Focus areas</div>
          <div className="mt-5 space-y-3">
            {campaign.focus.map((focus) => (
              <div key={focus} className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-4 text-white/70">
                {focus}
              </div>
            ))}
          </div>
          <Link href={campaign.ctaHref} className="mt-6 inline-flex rounded-xl border border-orange-500/30 px-5 py-3 text-sm text-orange-400 transition hover:bg-orange-500/10">
            {campaign.ctaLabel}
          </Link>
        </div>
        <LeadForm
          source={`Campaign: ${campaign.slug}`}
          heading="Capture launch-driven demand."
          description="Campaign pages should convert curiosity into a guided shortlist or a direct configuration discussion."
          interestPlaceholder="Which launch or platform are you interested in?"
          compact
        />
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {spotlightProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </div>
  );
}
