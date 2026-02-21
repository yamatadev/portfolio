"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.10),transparent)]" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-neutral-300">
              Open to remote opportunities worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-[family-name:var(--font-display)] text-white"
          >
            Renan Paes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl text-neutral-300 mt-6 max-w-2xl leading-relaxed"
          >
            Full-Stack Developer who built and scaled a business to{" "}
            <span className="text-white font-medium">$20K+/month</span>.
            <br />I don&apos;t just write code — I build products that drive
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://github.com/yamatadev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-sm font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/renan-paes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-sm font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}