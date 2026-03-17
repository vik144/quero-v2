import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getCampaigns } from "@/lib/catalog";

export default function CampaignsPage() {
  const campaigns = getCampaigns();

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Campaigns"
        title="Launch pages and partner campaigns get their own content layer."
        description="This keeps promotional content visible without distorting the core catalog hierarchy."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <Link
            key={campaign.slug}
            href={`/campaigns/${campaign.slug}`}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-300/35"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/65">Campaign</div>
            <div className="mt-3 text-2xl font-[family:var(--font-display)] text-white">{campaign.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/60">{campaign.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
