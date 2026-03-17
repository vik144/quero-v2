import { PageHero } from "@/components/page-hero";
import { policyContent } from "@/data/content/siteContent";

export default function ShippingPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Policy" title={policyContent.shipping.title} description={policyContent.shipping.body} />
    </div>
  );
}
