import Link from "next/link";

import { CollectionCard } from "@/components/collection-card";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import {
  awards,
  faqs,
  homeValueProps,
  siteConfig,
  useCases,
} from "@/data/content/siteContent";
import {
  getBlogPosts,
  getBrands,
  getCatalogStats,
  getFeaturedProducts,
  getHomeFeaturedCollections,
} from "@/lib/catalog";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const stats = getCatalogStats();
  const featuredCollections = getHomeFeaturedCollections();
  const featuredProducts = getFeaturedProducts(undefined, 8);
  const brands = getBrands().slice(0, 12);
  const posts = getBlogPosts().slice(0, 3);

  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Quero Tech"
        title="Computers, components, and accessories for gaming, work, and everyday setups."
        description="Quero Tech is a simple computer shop experience. Browse laptops, PC parts, prebuilt systems, and accessories, then contact the team if you need help choosing the right setup."
        stats={[
          { label: "Products", value: `${stats.products}+` },
          { label: "Collections", value: `${stats.collections}` },
          { label: "Brands", value: `${stats.brands}+` },
        ]}
      />

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Why choose Quero Tech</div>
          <h2 className="mt-3 font-[family:var(--font-display)] text-3xl text-white">
            A straightforward shop for parts and systems.
          </h2>
          <div className="mt-4 space-y-4">
            {homeValueProps.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-white/70">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#bef264_100%)] px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Browse catalog
            </Link>
            <Link href="/build-your-dream-machine" className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/80">
              Start BYDM
            </Link>
          </div>
        </div>
        <div className="mesh-panel rounded-[2rem] border border-white/10 p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-lime-200/80">Shop by need</div>
          <h2 className="mt-3 font-[family:var(--font-display)] text-3xl text-white">
            Find the right gear without digging through everything.
          </h2>
          <div className="mt-4 grid gap-4">
            {useCases.map((item) => (
              <Link
                key={item.title}
                href="/shop"
                className="rounded-3xl border border-white/10 bg-black/20 p-4 transition hover:border-lime-300/35 hover:bg-black/30"
              >
                <div className="text-lg font-semibold text-white">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-white/65">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Collections</div>
            <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Start from the catalog structure, not from a random SKU.</h2>
          </div>
          <Link href="/shop" className="text-sm text-cyan-200">
            Open full shop
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Flagship products</div>
            <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Product pages focus on specs, compatibility, and enquiry flow.</h2>
          </div>
          <Link href="/expert-support" className="text-sm text-lime-200">
            Need help choosing?
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Brands</div>
          <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Vendor hubs stay visible without owning the navigation.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white/72 transition hover:border-cyan-300/35 hover:text-white"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Trust proof</div>
          <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Awards and partner signals remain part of the story.</h2>
          <div className="mt-5 grid gap-4">
            {awards.slice(0, 3).map((award) => (
              <div key={award.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-sm uppercase tracking-[0.25em] text-cyan-200/65">{award.year}</div>
                <div className="mt-2 text-lg font-semibold text-white">{award.title}</div>
                <div className="mt-1 text-sm text-white/55">{award.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">FAQ preview</div>
          <div className="mt-4 space-y-4">
            {faqs.slice(0, 3).map((faq) => (
              <details key={faq.question} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white/60">{faq.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="mt-5 inline-flex text-sm text-cyan-200">
            Read the full FAQ
          </Link>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Blog</div>
          <h2 className="mt-2 font-[family:var(--font-display)] text-3xl text-white">Editorial inventory is preserved as a searchable content layer.</h2>
          <div className="mt-6 grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-lime-300/30"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-white/35">{formatDate(post.lastModified)}</div>
                <div className="mt-2 text-lg font-semibold text-white">{post.title}</div>
                <div className="mt-2 text-sm leading-7 text-white/58">{post.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        source="Home CTA"
        heading="Turn the new UX into real leads."
        description={`Use this as the global conversion pattern for ${siteConfig.companyName}: custom builds, product questions, sourcing requests, and post-discovery support all share the same dependable capture flow.`}
        interestPlaceholder="Gaming rig, creator build, GPU shortlist, bulk requirement..."
      />
    </div>
  );
}
