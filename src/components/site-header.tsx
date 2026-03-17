import Link from "next/link";

import { navigation, siteConfig } from "@/data/content/siteContent";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(7,11,14,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold tracking-[0.3em] text-cyan-200">QT</div>
            <div>
              <div className="font-[family:var(--font-display)] text-lg font-semibold tracking-wide text-white">{siteConfig.companyName}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Abhisheks PC store</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/72 xl:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`transition hover:text-white ${item.featured ? "text-cyan-200" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.phoneHref} className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-white">
            {siteConfig.phoneDisplay}
          </a>
          <Link href="/build-your-dream-machine" className="rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#bef264_100%)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90">
            Build with Quero
          </Link>
        </div>

        <details className="xl:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-white/12 px-4 py-2 text-sm text-white/80">Menu</summary>
          <div className="absolute right-4 top-18 w-72 rounded-3xl border border-white/10 bg-slate-950/96 p-4 shadow-2xl shadow-cyan-500/10">
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
