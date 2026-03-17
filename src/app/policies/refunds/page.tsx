import { PageHero } from "@/components/page-hero";
import { policyContent } from "@/data/content/siteContent";

export default function RefundPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Policy" title={policyContent.refunds.title} description={policyContent.refunds.body} />
    </div>
  );
}
