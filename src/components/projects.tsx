"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { portfolio } from "@/app/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16
  font-[family-name:var(--font-display)] text-white">
          What I&apos;ve built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group bg-neutral-900/40 border border-white/10
  rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-lg
  hover:shadow-black/30 transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient}
  relative`}>
                <div className="absolute inset-0 flex items-center
  justify-center">
                  <span className="text-white/20 text-7xl font-bold
  font-[family-name:var(--font-display)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold
  text-white">{project.title}</h3>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/10
  hover:bg-white/5 transition-colors"
                      title="Source code"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-neutral-200"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795
  8.205 11.385.6.105.825-.255.825-.57
  0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41
  -1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815
   2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925
   0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3
  1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66
  1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475
  5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0
  .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10
  hover:bg-white/5 transition-colors group/arrow"
                        title="Live demo"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="transition-transform duration-300
  group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
                        >
                          <path
                            d="M4 12L12 4M12 4H6M12 4v6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-neutral-200"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full
  bg-white/5 text-neutral-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}