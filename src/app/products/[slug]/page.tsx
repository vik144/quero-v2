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
              <div key={image} className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                <Image src={image} alt={detail?.title ?? product.title} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Product detail</div>
          <h1 className="mt-4 font-[family:var(--font-display)] text-4xl leading-tight text-white">
            {detail?.title ?? product.title}
          </h1>
          <p className="mt-5 text-sm leading-7 text-white/62">
            {detail?.description ||
              "The product detail route uses imported sitemap metadata and source page enrichment to keep the full public catalog browseable without implementing checkout."}
          </p>
          <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/35">Brand</div>
              <div className="mt-1 text-white">{detail?.vendor ?? product.brandSlug ?? "Quero advisory"}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/35">Pricing mode</div>
              <div className="mt-1 text-white">
                {detail?.price && detail?.currency ? `${detail.currency} ${detail.price}` : "Request pricing"}
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/expert-support"
              className="rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#bef264_100%)] px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Talk to an expert
            </Link>
            <Link href="/bulk-enquiry" className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/80">
              Bulk pricing
            </Link>
          </div>
          <div className="mt-8 space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-white/35">Key specs</div>
            {(detail?.specs?.length ? detail.specs : [
              "Full structured data from the source page was not available for this product.",
              "Use the lead form below to request the exact specification sheet or compatibility review.",
            ]).map((spec) => (
              <div key={spec} className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white/65">
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        source={`Product: ${product.slug}`}
        heading="Convert product interest into a qualified system conversation."
        description="This is the replacement for Add to Cart in v1. Capture the need, the constraints, and the contact path."
        interestPlaceholder="Need pricing, compatibility advice, upgrade review..."
        compact
      />

      <section className="space-y-5">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Related products</div>
          <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Keep the user inside the same decision corridor.</h2>
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
