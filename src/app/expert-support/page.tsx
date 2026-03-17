import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";

export default function ExpertSupportPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Expert support"
        title="A direct path for users who know they need guidance."
        description="This route replaces vague contact experiences with a support-specific intake page for spec review, compatibility checks, workload planning, and shortlist validation."
      />
      <section className="grid gap-6 lg:grid-cols-3">
        {[
          "Gaming build optimization",
          "Creator workstation planning",
          "GPU and platform compatibility review",
        ].map((item) => (
          <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/72">
            {item}
          </div>
        ))}
      </section>
      <LeadForm
        source="Expert Support"
        heading="Connect with a Quero Tech specialist."
        description="This form is shared with the rest of the site, but the page context makes it clear that the user is asking for guided technical support."
        interestPlaceholder="Workload, bottleneck, shortlisted hardware..."
      />
    </div>
  );
}
