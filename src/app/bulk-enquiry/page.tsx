import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";

export default function BulkEnquiryPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Bulk enquiry"
        title="Institutional and multi-unit demand needs its own intake flow."
        description="Use this route for teams, labs, studios, classrooms, and offices that need multiple systems or large hardware orders with custom pricing and timeline discussion."
      />
      <section className="grid gap-4 lg:grid-cols-3">
        {[
          "Volume pricing requests",
          "Deployment and imaging notes",
          "Recurring procurement and vendor coordination",
        ].map((item) => (
          <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/72">
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
