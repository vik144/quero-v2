"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/content/siteContent";

export function HomeHero() {
  return (
    <section className="relative flex h-[500px] items-center overflow-hidden rounded-2xl sm:h-[550px] lg:h-[600px]">
      <Image
        src="/hero-img.jpg"
        alt="Gaming Setup"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />

      <div className="relative z-10 w-full px-8 sm:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-orange-500">
              Dream Setup
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Gaming PCs, Laptops & Accessories at Best Prices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-[#ff6b00] px-8 py-3 font-semibold text-white transition hover:bg-[#ff6b00]/90"
            >
              Shop Now
            </Link>
            <Link
              href="/build-your-dream-machine"
              className="rounded-lg border border-white/10 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Build Your PC
            </Link>
            <a
              href={siteConfig.whatsappHref}
              className="flex items-center gap-2 rounded-lg bg-[#25d366] px-8 py-3 font-semibold text-white transition hover:bg-[#25d366]/90"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
