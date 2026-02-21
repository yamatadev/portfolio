"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { portfolio } from "@/app/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionLabel>Contact</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)] text-white"
        >
          Let&apos;s build something{" "}
          <span className="italic text-white/40">together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-300 text-lg max-w-xl mx-auto mb-10"
        >
          Currently open to full-time remote positions and interesting freelance
          projects.
          <br />
          Let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-200 transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            {portfolio.email}
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 font-medium rounded-full hover:bg-white/5 transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}