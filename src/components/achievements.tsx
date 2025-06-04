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
    technologies: ["Grant", "ETC", "Stability Nexus", "Proposal"],
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
    <section id="achievements" className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Achievements</h2>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border-4 border-dashed border-gray-500 rounded-lg hover:border-gray-800 transition-colors duration-300 bg-[#f5d7b2]/50 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="inline-block bg-gray-600 text-[#f5d7b2] px-4 py-2 text-2xl font-bold pixel-shadow shadow-md mb-1">
                  {achievement.title}
                </div>
                <div className="mb-2 text-xl font-bold">{achievement.year}</div>
              </div>
              <div className="max-w-xl mx-auto">
                {" "}
                {/* Added wrapper div */}
                <p className="text-xl font-medium text-left">
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
