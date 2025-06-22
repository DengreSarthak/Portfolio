"use client";

import { motion } from "framer-motion";

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

        <div className="space-y-4 sm:space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-3 sm:p-4 border-2 sm:border-4 border-dashed border-gray-500 rounded-lg hover:border-gray-800 transition-colors duration-300 bg-[#f5d7b2]/50 backdrop-blur-sm"
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-gray-700 text-[#f5d7b2] px-3 sm:px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold pixel-shadow shadow-md mb-2 rounded">
                  {achievement.title}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">{achievement.year}</div>
              </div>
              
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
