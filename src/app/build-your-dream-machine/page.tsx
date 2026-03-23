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
        title="Build Your Dream Machine — step by step."
        description="Walk through each component of your build. Pick your parts with guidance, or let the team configure the perfect system for your needs."
        image="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="grid gap-4 lg:grid-cols-2">
        {bydmSections.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-white/5 bg-[#151515] p-6">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b00]">Step {index + 1}</div>
            <div className="mt-3 text-2xl font-extrabold text-white">{step.title}</div>
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
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Component inspiration</div>
          <h2 className="mt-2 text-3xl font-extrabold text-white">Popular components to get you started.</h2>
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
