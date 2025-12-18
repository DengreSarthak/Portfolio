"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Google Summer of Code",
    year: "May 2025 - Nov 2025",
    description:
      "Currently contributing to Raindrop under AOSSIE as part of Google Summer of Code. The project revolves around vault mechanics, yield calculations, and staking logic for ERC-20 tokens. Working on implementing sophisticated DeFi protocols that enable users to maximize their token yields through advanced staking mechanisms.",
  },
  {
    title: "StabilityNexus",
    year: "Nov 2024 - Present",
    description:
      "Stability Nexus is an open-source organization focused on building impactful dApps that solve real-world problems and empower users. I've contributed to four major projects and continue to support others within the ecosystem. I worked closely with the co-founder of Stability Nexus, mentoring contributors and helping submit 11 projects to the ETC Grant DAO—securing over $77,000 in funding.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Experience</h2>
        </div>

        <p className="mx-auto mb-6 max-w-2xl text-center text-sm sm:text-base md:text-lg text-[#4a3a2b] opacity-80">
          Chapters of hands-on building, from active missions to long-term stewardship.
        </p>

        <div className="relative border-l border-[#d7b97c]/60 pl-7 sm:pl-9">
          {experiences.map((exp, index) => {
            return (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-[13px] top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#b9934a]/80 bg-[#fdf3d2] text-[#2a2420]"
                >
                  <Briefcase size={14} strokeWidth={1.6} />
                </span>
                <div className="ml-1 rounded-md border border-[#d7b97c]/60 bg-[#fdf3d2] px-5 py-6 shadow-[0_10px_30px_-28px_rgba(47,39,32,0.65)]">
                  <div className="flex flex-wrap items-center justify-between gap-4 text-[#2a2420]">
                    <div>
                      <h3 className="mt-2 text-lg font-semibold sm:text-xl">{exp.title}</h3>
                    </div>
                    <span className="inline-flex items-center rounded-sm border border-[#b9934a]/60 bg-[#f8e8bc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#2a2420]">
                      {exp.year}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#3b2f25] sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
