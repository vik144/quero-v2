import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/data/content/siteContent";

export default function FAQPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="FAQ"
        title="Common questions live in one clean, scannable support route."
        description="The source FAQ content is preserved and adapted for the new brand, while the page design makes it easier to scan on desktop and mobile."
      />
      <section className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">{faq.answer}</p>
          </details>
        ))}
      </section>
      <LeadForm
        source="FAQ"
        heading="Still blocked after the FAQ?"
        description="Route the unresolved question into support instead of leaving the user at the end of a static page."
        interestPlaceholder="What still needs clarification?"
        compact
      />
    </div>
  );
}
