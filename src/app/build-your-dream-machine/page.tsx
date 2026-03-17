import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { bydmSections } from "@/data/content/siteContent";
import { getFeaturedProducts } from "@/lib/catalog";

export default function BuildYourDreamMachinePage() {
  const spotlightProducts = getFeaturedProducts("components", 12);

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="BYDM"
        title="Guide users through a build instead of dropping them into raw inventory."
        description="The BYDM page becomes a structured configurator journey with system planning checkpoints, curated product samples, and a persistent lead form for expert assistance."
      />
      <section className="grid gap-4 lg:grid-cols-2">
        {bydmSections.map((step, index) => (
          <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/65">Step {index + 1}</div>
            <div className="mt-3 text-2xl font-[family:var(--font-display)] text-white">{step.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/60">{step.note}</div>
          </div>
        ))}
      </section>
      <LeadForm
        source="BYDM"
        heading="Start the guided build brief."
        description="Capture workload, preferred components, budget, and timing. This is the primary conversion route for custom systems."
        interestPlaceholder="Gaming, editing, research, AI training..."
      />
      <section className="space-y-5">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Component inspiration</div>
          <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Sample hardware surfaced from the imported public catalog.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {spotlightProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
