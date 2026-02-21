"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { portfolio } from "@/app/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 font-[family-name:var(--font-display)] text-white">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolio.skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-200 hover:bg-white hover:text-neutral-900 hover:border-white cursor-default transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}