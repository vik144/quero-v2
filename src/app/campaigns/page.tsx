import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getCampaigns } from "@/lib/catalog";

export default function CampaignsPage() {
  const campaigns = getCampaigns();

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Campaigns"
        title="Launch pages and partner campaigns."
        description="Explore current promotions, platform launches, and brand-specific campaigns with curated products."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <Link
            key={campaign.slug}
            href={`/campaigns/${campaign.slug}`}
            className="rounded-2xl border border-white/5 bg-[#151515] p-6 transition hover:border-orange-500/30 hover:bg-[#1a1a1a]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">Campaign</div>
            <div className="mt-3 text-2xl font-extrabold text-white">{campaign.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/60">{campaign.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
