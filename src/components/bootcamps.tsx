"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const bootcamps = [
  {
    title: "EigenLayer Bootcamp",
    year: "Cohort 2025",
    description:
      "Selected from 200+ applicants to explore the EigenLayer restaking universe, designing resilient AVS patterns and championing shared security primitives.",
  },
  {
    title: "Uniswap Hook Incubator",
    year: "Cohort 2025",
    description:
      "Joined the Uniswap Hook Incubator to prototype custom liquidity flows, programmable vault logic, and next-gen trading experiences for on-chain markets.",
  },
];

export function Bootcamps() {
  return (
    <section id="bootcamps" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <div className="section-title text-center">
          <h2>Bootcamps</h2>
        </div>

        <p className="mx-auto mb-6 max-w-2xl text-center text-sm sm:text-base md:text-lg text-[#4a3a2b] opacity-80">
          Invitations to sharpen craft with the ecosystems I geek out about the most.
        </p>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {bootcamps.map((bootcamp, index) => (
            <motion.article
              key={bootcamp.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-md border border-[#d7b97c]/55 bg-[#fdf3d2] px-5 py-6 shadow-[0_10px_28px_-24px_rgba(47,39,32,0.65)] transition-transform duration-200 hover:-translate-y-1.5"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#b9934a] via-[#94763a] to-transparent opacity-80"
              />
              <div className="relative flex flex-col gap-4 text-[#2a2420] sm:gap-5">
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b9934a]">
                    Cohort
                  </div>
                  <h3 className="text-lg font-semibold sm:text-xl">{bootcamp.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-[#3b2f25] sm:text-base">
                  {bootcamp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
