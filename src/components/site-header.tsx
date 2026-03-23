"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Heart, Phone, Mail, MessageCircle, Menu, X, Zap } from "lucide-react";

import { navigation, siteConfig } from "@/data/content/siteContent";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-[#111] py-1.5 px-4 text-[10px] text-gray-400 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={10} /> {siteConfig.phoneDisplay}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={10} /> {siteConfig.supportEmail}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#25d366]">
              <Zap size={10} /> Track Order
            </span>
            <a href={siteConfig.whatsappHref} className="flex items-center gap-1 hover:text-white">
              <MessageCircle size={10} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/quero-logo-lg.png" alt="Quero Tech" width={36} height={36} className="h-9 w-9 rounded-lg object-contain" />
            <span className="text-xl font-extrabold tracking-tighter text-white">
              QUERO <span className="text-gray-400">TECH</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden flex-1 max-w-xl relative lg:block">
            <input type="text" placeholder="Search for products..." className="w-full bg-[#151515] border border-white/10 rounded-full py-2 px-10 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#ff6b00]/50" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-5 text-sm text-white/70 xl:flex">
            {navigation.slice(0, 8).map((item) => (
              <Link key={item.href} href={item.href} className={`transition hover:text-white ${item.featured ? "text-[#ff6b00]" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icon group + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 text-gray-300 md:flex">
              <User size={20} className="cursor-pointer hover:text-white transition" />
              <Heart size={20} className="cursor-pointer hover:text-white transition" />
              <div className="relative cursor-pointer">
                <ShoppingCart size={20} className="hover:text-white transition" />
                <span className="absolute -top-2 -right-2 bg-[#25d366] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </div>
            <Link href="/build-your-dream-machine" className="hidden rounded-lg bg-[#ff6b00] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff6b00]/90 lg:block">
              Build Your PC
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg border border-white/10 p-2 text-white/80 xl:hidden">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/5 bg-[#151515] px-4 py-4 xl:hidden">
            <div className="mb-4 relative lg:hidden">
              <input type="text" placeholder="Search for products..." className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-2 px-10 text-sm text-white placeholder:text-gray-500 outline-none" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <Link href="/build-your-dream-machine" className="flex-1 rounded-lg bg-[#ff6b00] px-4 py-2.5 text-center text-sm font-semibold text-white">
                Build Your PC
              </Link>
              <a href={siteConfig.whatsappHref} className="flex-1 rounded-lg bg-[#25d366] px-4 py-2.5 text-center text-sm font-semibold text-white">
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
