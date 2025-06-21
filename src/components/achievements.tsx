"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Encode's University Hackathon",
    year: "2025",
    description:
      "Won 1st place in Encode's University Hackathon: Future of Blockchain under Citrea. Our project revolutionizes crowdfunding by introducing smart rules and issuing Proof-of-Funding-Tokens (PFT's) to contributors.",
  },
  {
    title: "LNMHacks Hackathon",
    year: "2025",
    description:
      "Secured 1st place in the Aptos track with a decentralized finance platform that helps users discover nearby hackathons and conferences.",
  },
  {
    title: "ETC Grant DAO",
    year: "2025",
    description:
      "Proposed an innovative concept-HackNexus to Stability Nexus for ETC Grant DAO, winning a $10,500 grant to develop a solution that enhances the Ethereum Classic ecosystem.",
  },
  {
    title: "EthGlobal Taipei",
    year: "2025",
    description:
      "Secured awards in the World Track at EthGlobal Taipei with a system for partial ownership using Real World Assets (RWA) tokenization.",
  },
  {
    title: "EthGlobal Agentic Ethereum",
    year: "2025",
    description:
      "Won awards in the Coinbase Track for developing an automated trading system powered by AI agents that trade on behalf of users.",
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
