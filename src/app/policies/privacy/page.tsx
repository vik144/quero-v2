import { PageHero } from "@/components/page-hero";
import { policyContent } from "@/data/content/siteContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Policy" title={policyContent.privacy.title} description={policyContent.privacy.body} />
    </div>
  );
}
