import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

import { siteConfig } from "@/data/content/siteContent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand + Contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/quero-logo.png" alt="Quero Tech" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
            <span className="text-lg font-extrabold tracking-tighter text-white">
              QUERO <span className="text-gray-400">TECH</span>
            </span>
          </div>
          <p className="text-sm leading-7 text-white/50">{siteConfig.description}</p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#ff6b00] shrink-0" /> {siteConfig.primaryLocation}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#ff6b00] shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-white transition">{siteConfig.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#ff6b00] shrink-0" />
              <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white transition">{siteConfig.supportEmail}</a>
            </li>
          </ul>
        </div>

        {/* About links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">About</h4>
          <div className="grid gap-2.5 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <Link href="/faq" className="hover:text-white transition">FAQs</Link>
            <Link href="/stores" className="hover:text-white transition">Stores</Link>
            <Link href="/awards" className="hover:text-white transition">Awards</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Shop + Policies */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Shop & Policies</h4>
          <div className="grid gap-2.5 text-sm text-gray-400">
            <Link href="/shop" className="hover:text-white transition">All Products</Link>
            <Link href="/shop/laptops" className="hover:text-white transition">Laptops</Link>
            <Link href="/shop/components" className="hover:text-white transition">Components</Link>
            <Link href="/shop/prebuilt-pcs" className="hover:text-white transition">Prebuilt PCs</Link>
            <Link href="/brands" className="hover:text-white transition">Brands</Link>
            {siteConfig.policyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social + Payments */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
          <div className="flex gap-3 mb-6">
            {[
              { Icon: Facebook, href: siteConfig.socials[0]?.href ?? "#" },
              { Icon: Instagram, href: siteConfig.socials[0]?.href ?? "#" },
              { Icon: Youtube, href: siteConfig.socials[1]?.href ?? "#" },
              { Icon: Linkedin, href: siteConfig.socials[2]?.href ?? "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <h4 className="mb-3 text-sm font-semibold text-white">Payments</h4>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5">Visa</span>
            <span className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5">Mastercard</span>
            <span className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5">UPI</span>
            <span className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5">Net Banking</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Quero Tech. All rights reserved.
      </div>
    </footer>
  );
}
