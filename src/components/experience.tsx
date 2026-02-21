"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { portfolio } from "@/app/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 font-[family-name:var(--font-display)] text-white">
          Where I&apos;ve been
        </h2>

        <div className="space-y-0">
          {portfolio.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 border-t border-white/10 first:border-t-0 first:pt-0"
            >
              <div className="lg:col-span-3">
                <p className="text-sm text-neutral-400 font-medium">
                  {exp.period}
                </p>
                <p className="text-sm text-neutral-400 mt-1">{exp.location}</p>
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-neutral-300 mt-1">{exp.company}</p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/25 mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}