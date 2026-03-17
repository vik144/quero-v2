import { PageHero } from "@/components/page-hero";
import { policyContent } from "@/data/content/siteContent";

export default function WarrantyPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Policy" title={policyContent.warranty.title} description={policyContent.warranty.body} />
    </div>
  );
}
