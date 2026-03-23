"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/content/siteContent";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[320px] items-center overflow-hidden rounded-2xl bg-[#151515] sm:h-[550px] lg:h-[600px]">
      <Image
        src="/hero-img.jpg"
        alt="Gaming Setup"
        fill
        sizes="100vw"
        className="hidden object-cover sm:block"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent hidden sm:block" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-500">
              Dream Setup
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-400 sm:text-xl">
            Gaming PCs, Laptops & Accessories at Best Prices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-[#ff6b00] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6b00]/90 sm:px-8 sm:py-3 sm:text-base"
            >
              Shop Now
            </Link>
            <Link
              href="/build-your-dream-machine"
              className="rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:px-8 sm:py-3 sm:text-base"
            >
              Build Your PC
            </Link>
            <a
              href={siteConfig.whatsappHref}
              className="flex items-center gap-2 rounded-lg bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#25d366]/90 sm:px-8 sm:py-3 sm:text-base"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
