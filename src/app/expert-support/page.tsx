import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";

export default function ExpertSupportPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Expert support"
        title="Get guided help from the Quero Tech team."
        description="Whether it's a spec review, compatibility check, workload planning, or shortlist validation — our experts are here to help."
      />
      <section className="grid gap-6 lg:grid-cols-3">
        {[
          "Gaming build optimization",
          "Creator workstation planning",
          "GPU and platform compatibility review",
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-white/5 bg-[#151515] p-6 text-white/70">
            {item}
          </div>
        ))}
      </section>
      <LeadForm
        source="Expert Support"
        heading="Connect with a Quero Tech specialist."
        description="Tell us about your workload, budget, and timeline — we'll recommend the right setup."
        interestPlaceholder="Workload, bottleneck, shortlisted hardware..."
      />
    </div>
  );
}
