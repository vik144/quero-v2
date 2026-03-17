import { PageHero } from "@/components/page-hero";
import { policyContent } from "@/data/content/siteContent";

export default function ReturnsPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Policy" title={policyContent.returns.title} description={policyContent.returns.body} />
    </div>
  );
}
