import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/data/content/siteContent";

export default function FAQPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Find answers to common questions about products, ordering, custom builds, and support."
      />
      <section className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-white/5 bg-[#151515] p-6">
            <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">{faq.answer}</p>
          </details>
        ))}
      </section>
      <LeadForm
        source="FAQ"
        heading="Still have questions?"
        description="If you didn't find what you need, reach out and we'll get back to you."
        interestPlaceholder="What still needs clarification?"
        compact
      />
    </div>
  );
}
