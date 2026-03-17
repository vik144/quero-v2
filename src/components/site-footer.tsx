import Link from "next/link";

import { siteConfig } from "@/data/content/siteContent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="font-[family:var(--font-display)] text-2xl text-white">{siteConfig.companyName}</div>
          <p className="max-w-xl text-sm leading-7 text-white/65">{siteConfig.description}</p>
          <div className="space-y-1 text-sm text-white/55">
            <div>{siteConfig.primaryLocation}</div>
            <div>{siteConfig.hours}</div>
            <a href={siteConfig.phoneHref} className="block transition hover:text-white">
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.supportEmail}`} className="block transition hover:text-white">
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">Key routes</div>
          <div className="grid gap-2 text-sm text-white/70">
            <Link href="/shop">Shop</Link>
            <Link href="/build-your-dream-machine">Build Your Dream Machine</Link>
            <Link href="/expert-support">Expert Support</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">Policies and social</div>
          <div className="grid gap-2 text-sm text-white/70">
            {siteConfig.policyLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            {siteConfig.socials.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
