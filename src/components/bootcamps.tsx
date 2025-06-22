"use client";

import { motion } from "framer-motion";

const bootcamps = [
  {
    title: "EigenLayer Bootcamp",
    year: "2025",
    description:
      "Selected as one of 30 elite developers and creators from 200+ amazing applications for the prestigious EigenLayer bootcamp program.",
  },
  {
    title: "Uniswap Hook Incubator",
    year: "2025", 
    description:
      "Accepted into the exclusive Uniswap Hook Incubator program to develop innovative DeFi solutions and custom trading mechanisms.",
  },
];

export function Bootcamps() {
  return (
    <section id="bootcamps" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Bootcamps</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {bootcamps.map((bootcamp, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-gray-700 text-[#f5d7b2] px-3 sm:px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold pixel-shadow shadow-md mb-2 rounded">
                  {bootcamp.title}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">{bootcamp.year}</div>
              </div>
              
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center leading-relaxed">
                  {bootcamp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 