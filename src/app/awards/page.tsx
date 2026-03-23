import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { awards } from "@/data/content/siteContent";

export default function AwardsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Awards"
        title="Recognised by the industry's best."
        description="Partner recognition, channel awards, and appreciation certificates that back Quero Tech's credibility."
      />
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {awards.map((award) => (
          <div key={award.title} className="rounded-2xl border border-white/5 bg-[#151515] p-6">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b00]">{award.year}</div>
            <div className="mt-3 text-2xl font-extrabold text-white">{award.title}</div>
            <div className="mt-2 text-sm text-white/60">{award.issuer}</div>
            <div className="mt-4 text-sm leading-7 text-white/50">{award.note}</div>
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
