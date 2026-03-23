import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LeadForm } from "@/components/lead-form";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, getProductBySlug } from "@/lib/catalog";
import { getRemoteProductDetail } from "@/lib/source-site";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const detail = await getRemoteProductDetail(slug);
  const gallery = detail?.gallery?.length ? detail.gallery : product.image ? [product.image] : [];
  const relatedProducts = getFeaturedProducts(product.sections[0], 8).filter((item) => item.slug !== product.slug);

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.slice(0, 4).map((image) => (
              <div key={image} className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-[#151515]">
                <Image src={image} alt={detail?.title ?? product.title} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-8">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff6b00]">Product detail</div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white">
            {detail?.title ?? product.title}
          </h1>
          <p className="mt-5 text-sm leading-7 text-white/60">
            {detail?.description ||
              "Browse the full product details, compare specs, and get expert advice on compatibility and upgrades."}
          </p>
          <div className="mt-6 grid gap-4 rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">Brand</div>
              <div className="mt-1 text-white">{detail?.vendor ?? product.brandSlug ?? "Quero advisory"}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">Pricing</div>
              <div className="mt-1 text-white">
                {detail?.price && detail?.currency ? `${detail.currency} ${detail.price}` : "Request pricing"}
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/expert-support"
              className="rounded-xl bg-[#ff6b00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6b00]/90"
            >
              Talk to an expert
            </Link>
            <Link href="/bulk-enquiry" className="rounded-xl border border-white/10 px-6 py-3 text-sm text-white/80 transition hover:border-orange-500/30">
              Bulk pricing
            </Link>
          </div>
          <div className="mt-8 space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">Key specs</div>
            {(detail?.specs?.length ? detail.specs : [
              "Full structured data from the source page was not available for this product.",
              "Use the lead form below to request the exact specification sheet or compatibility review.",
            ]).map((spec) => (
              <div key={spec} className="rounded-xl border border-white/5 bg-[#0a0a0a] px-4 py-3 text-sm text-white/60">
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        source={`Product: ${product.slug}`}
        heading="Interested in this product?"
        description="Get pricing, compatibility advice, or an upgrade review from the Quero Tech team."
        interestPlaceholder="Need pricing, compatibility advice, upgrade review..."
        compact
      />

      <section className="space-y-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">Related products</div>
          <h2 className="mt-2 text-3xl font-extrabold text-white">You might also like.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
