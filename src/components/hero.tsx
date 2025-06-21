"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block mb-4 sm:mb-6 shadow-md">
          <h1
            className="bg-gray-700 px-2 sm:px-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f5d7b2] pixel-shadow font-bold 
            [text-shadow:_1px_1px_0_#DAA520,_2px_2px_0_#CD853F,_3px_3px_0_rgba(0,0,0,0.3)]
            sm:[text-shadow:_2px_2px_0_#DAA520,_4px_4px_0_#CD853F,_6px_6px_0_rgba(0,0,0,0.3)]
            transform hover:translate-y-[-2px] transition-transform duration-200"
          >
            Hi there
          </h1>
        </div>

        <div className="space-y-4 sm:space-y-6 font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
          <p className="leading-relaxed">
            Hi, I'm Sarthak Dengre — a 3rd-year student at LNMIIT, India, with a
            deep passion for all things decentralized to smart contracts, from
            RWA to Ai-Agents and dApps.
          </p>

          <p className="leading-relaxed">
            In addition to my love of blockchain and Web3, I am also interested
            in education, history, economics, politics and obviously memes.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
