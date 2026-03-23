import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";

export default function BulkEnquiryPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Bulk enquiry"
        title="Multi-unit and institutional orders."
        description="For teams, labs, studios, classrooms, and offices that need multiple systems or large hardware orders with custom pricing."
      />
      <section className="grid gap-4 lg:grid-cols-3">
        {[
          "Volume pricing requests",
          "Deployment and imaging notes",
          "Recurring procurement and vendor coordination",
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-white/5 bg-[#151515] p-6 text-white/70">
            {item}
          </div>
        ))}
      </section>
      <LeadForm
        source="Bulk Enquiry"
        heading="Capture quantity, timeline, and deployment requirements."
        description="The form includes company and brief fields so Quero Tech can qualify procurement conversations quickly."
        interestPlaceholder="30 creator systems, 12 GPUs, campus lab rollout..."
      />
    </div>
  );
}
