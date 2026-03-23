import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import type { ContentPage } from "@/types/site";

type ContentPageViewProps = {
  page: ContentPage;
  leadSource: string;
};

export function ContentPageView({ page, leadSource }: ContentPageViewProps) {
  return (
    <div className="space-y-10">
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.summary} />
      <div className="grid gap-6 lg:grid-cols-2">
        {page.sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-white/5 bg-[#151515] p-6">
            <h2 className="text-2xl font-extrabold text-white">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/60">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <LeadForm
        source={leadSource}
        heading="Turn page interest into a qualified conversation."
        description="This shared lead form is used across support, contact, and informational pages so high-intent users always have a conversion path."
        interestPlaceholder="What do you need help with?"
        compact
      />
    </div>
  );
}
