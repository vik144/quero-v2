"use client";

import Image from "next/image";
import { motion } from "motion/react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
  image?: string;
};

export function PageHero({ eyebrow, title, description, stats, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#151515]">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        </>
      )}
      <div className="relative p-5 sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#ff6b00]">{eyebrow}</div>
          <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{description}</p>
          {stats?.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/5 bg-[#1a1a1a] p-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
