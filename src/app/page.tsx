import Link from "next/link";
import { Flame } from "lucide-react";

import { CollectionCard } from "@/components/collection-card";
import { HomeHero } from "@/components/home-hero";
import { LeadForm } from "@/components/lead-form";
import { ProductCard } from "@/components/product-card";
import {
  awards,
  catalogCategories,
  faqs,
  siteConfig,
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
      <HomeHero />

      {/* Category Grid */}
      <section>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b00]">Shop by Category</div>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Find exactly what you need.</h2>
          </div>
          <Link href="/shop" className="text-sm text-orange-400 hover:text-orange-300">
            View All
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {catalogCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="group rounded-2xl border border-white/5 bg-[#151515] p-5 text-center transition hover:border-orange-500/30 hover:bg-[#1a1a1a]"
            >
              <div className="text-lg font-bold text-white">{cat.title}</div>
              <div className="mt-1 text-xs text-white/40">{cat.eyebrow}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Collections</div>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Browse curated collections.</h2>
          </div>
          <Link href="/shop" className="text-sm text-orange-400 hover:text-orange-300">
            Open full shop
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      {/* Hot Deals / Featured Products */}
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Flagship products</div>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Hot Deals</h2>
            </div>
            <Flame className="text-[#ff6b00]" size={24} />
            <span className="text-xs bg-[#ff6b00]/20 text-[#ff6b00] px-2.5 py-1 rounded-full font-bold">
              {stats.products}+ products
            </span>
          </div>
          <Link href="/expert-support" className="text-sm text-green-500 hover:text-green-400">
            Need help choosing?
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative overflow-hidden rounded-2xl min-h-[160px] flex items-center sm:min-h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/20 via-[#151515] to-[#25d366]/10 rounded-2xl" />
        <div className="absolute inset-0 border border-white/5 rounded-2xl" />
        <div className="relative z-10 px-5 py-6 w-full flex flex-col items-center gap-4 text-center sm:px-10 sm:py-0 md:flex-row md:text-left md:justify-between md:gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Build Your <span className="text-[#25d366]">PC Bundle</span> & Save!
            </h2>
            <p className="mt-2 text-sm text-gray-400 sm:text-base">Customise your PC & get exclusive discounts.</p>
          </div>
          <Link
            href="/build-your-dream-machine"
            className="shrink-0 rounded-xl bg-gradient-to-r from-[#ff6b00] to-orange-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff6b00]/20 transition hover:scale-105 sm:px-10 sm:text-base"
          >
            Start Building
          </Link>
        </div>
      </section>

      {/* Brands + Awards */}
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-5 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Brands</div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Shop by brand.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="rounded-full border border-white/5 bg-[#0a0a0a] px-4 py-2 text-sm text-white/70 transition hover:border-orange-500/30 hover:text-white"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-5 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Trust proof</div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Awards & partnerships.</h2>
          <div className="mt-5 grid gap-4">
            {awards.slice(0, 3).map((award) => (
              <div key={award.title} className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-[#ff6b00]/70">{award.year}</div>
                <div className="mt-2 text-lg font-semibold text-white">{award.title}</div>
                <div className="mt-1 text-sm text-white/50">{award.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Blog */}
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-5 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">FAQ preview</div>
          <div className="mt-4 space-y-4">
            {faqs.slice(0, 3).map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-4">
                <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white/60">{faq.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="mt-5 inline-flex text-sm text-orange-400 hover:text-orange-300">
            Read the full FAQ
          </Link>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#151515] p-5 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Blog</div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Latest articles & guides.</h2>
          <div className="mt-6 grid gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 transition hover:border-orange-500/30"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-white/35">{formatDate(post.lastModified)}</div>
                <div className="mt-2 text-lg font-semibold text-white">{post.title}</div>
                <div className="mt-2 text-sm leading-7 text-white/55">{post.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        source="Home CTA"
        heading="Get in touch with the team."
        description={`Whether it's a custom build, product question, or bulk requirement — ${siteConfig.companyName} is here to help.`}
        interestPlaceholder="Gaming rig, creator build, GPU shortlist, bulk requirement..."
      />
    </div>
  );
}
