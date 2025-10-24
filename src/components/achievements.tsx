"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const achievements = [
  {
    title: "Encode's University Hackathon",
    year: "2025",
    description:
      "Crushed the competition with a smart crowdfunding platform featuring Proof-of-Funding Tokens. Citrea track winner!",
  },
  {
    title: "ETC Grant DAO",
    year: "2025",
    description:
      "Scored $10,500 for HackNexus — because great ideas deserve great funding! Boosting the Ethereum Classic ecosystem.",
  },
  {
    title: "EthGlobal Taipei",
    year: "2025",
    description:
      "World Track prize with RWA tokenization magic. Making real-world assets accessible to everyone, one token at a time!",
  },
  {
    title: "EthGlobal Agentic Ethereum",
    year: "2025",
    description:
      "Coinbase track prize pool! Created AI trading agents that work while you sleep. The future of autonomous DeFi is here.",
  },
  {
    title: "LNMHacks Hackathon",
    year: "2025",
    description:
      "Aptos track champion! Built the ultimate Web3 event discovery platform connecting builders worldwide.",
  },
];

const accentSwatches = [
  "linear-gradient(90deg, rgba(185,147,74,0.28) 0%, rgba(185,147,74,0) 80%)",
  "linear-gradient(90deg, rgba(47,39,32,0.24) 0%, rgba(47,39,32,0) 80%)",
];

export function Achievements() {
  return (
    <section id="achievements" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Achievements</h2>
        </div>

        <p className="mx-auto mb-6 max-w-2xl text-center text-sm sm:text-base md:text-lg text-[#4a3a2b] opacity-80">
          Quiet victories, loud impact. A few milestones that shaped this builder’s journey.
        </p>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-md border border-[#d7b97c]/60 bg-[#fdf3d2] px-5 py-6 shadow-[0_12px_30px_-25px_rgba(47,39,32,0.55)] transition-transform duration-200 hover:-translate-y-1.5"
            >
              <span
                aria-hidden
                className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-[#b9934a]/70"
              />
              <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                  <div className="flex items-center gap-3 text-[#2a2420]">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-[#2a2420] sm:text-xl text-center">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#3b2f25] sm:text-base">
                {achievement.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
