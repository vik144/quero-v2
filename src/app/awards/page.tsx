import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { awards } from "@/data/content/siteContent";

export default function AwardsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Awards"
        title="Trust indicators stay visible, but they no longer overwhelm the storefront."
        description="This page consolidates partner recognition, channel awards, and appreciation certificates into a focused credibility layer."
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {awards.map((award) => (
          <div key={award.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/65">{award.year}</div>
            <div className="mt-3 text-2xl font-[family:var(--font-display)] text-white">{award.title}</div>
            <div className="mt-2 text-sm text-white/60">{award.issuer}</div>
            <div className="mt-4 text-sm leading-7 text-white/52">{award.note}</div>
          </div>
        ))}
      </section>
      <LeadForm
        source="Awards"
        heading="Turn credibility into a sales conversation."
        description="Awards pages should reinforce trust and still offer a clear next step for high-intent buyers."
        interestPlaceholder="What would you like Quero Tech to quote or plan?"
        compact
      />
    </div>
  );
}
