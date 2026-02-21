"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { portfolio } from "@/app/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>About</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/profile.jpg"
                  alt="Renan Paes"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                📍 Curitiba, Brazil
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8 font-[family-name:var(--font-display)]">
              Developer with a{" "}
              <span className="italic text-neutral-400">founder&apos;s mindset</span>
            </h2>
            <div className="space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="text-lg text-neutral-900 dark:text-neutral-100">
                {portfolio.about.intro}
              </p>
              <p>{portfolio.about.story}</p>
              <p>{portfolio.about.closing}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}