"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Google Summer of Code",
    year: "2025 - Present",
    description:
      "Currently contributing to Raindrop under AOSSIE as part of Google Summer of Code. The project revolves around vault mechanics, yield calculations, and staking logic for ERC-20 tokens. Working on implementing sophisticated DeFi protocols that enable users to maximize their token yields through advanced staking mechanisms.",

  },
  {
    title: "StabilityNexus",
    year: "2024 - Present",
    description:
      "Stability Nexus is an open-source organization focused on building impactful dApps that solve real-world problems and empower users. I've contributed to four major projects and continue to support others within the ecosystem. I worked closely with the co-founder of Stability Nexus, mentoring contributors and helping submit 11 projects to the ETC Grant DAO—securing over \$77,000 in funding.",

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

        <div className="space-y-3 sm:space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-3 sm:p-4 border-2 sm:border-4 border-dashed border-gray-500 rounded-lg hover:border-gray-800 transition-colors duration-300 bg-[#f5d7b2]/50 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="inline-block bg-gray-700 text-[#f5d7b2] px-3 sm:px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold pixel-shadow shadow-md mb-2 rounded">
                  {exp.title}
                </div>
                <div className="mb-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold">{exp.year}</div>
              </div>
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg font-medium text-left leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
