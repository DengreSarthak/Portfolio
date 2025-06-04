"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block mb-6 shadow-md">
          <h1
            className="bg-gray-700 px-2 text-4xl md:text-5xl text-[#f5d7b2] pixel-shadow font-bold 
            [text-shadow:_2px_2px_0_#DAA520,_4px_4px_0_#CD853F,_6px_6px_0_rgba(0,0,0,0.3)]
            transform hover:translate-y-[-2px] transition-transform duration-200"
          >
            Hi there
          </h1>
        </div>

        <div className="space-y-6 font-medium text-2xl max-w-2xl mx-auto">
          <p>
            Hi, I’m Sarthak Dengre — a 3rd-year student at LNMIIT, India, with a
            deep passion for all things decentralized to smart contracts, from
            RWA to Ai-Agents and dApps.
          </p>

          <p>
            In addition to my love of blockchain and Web3, I am also interested
            in education, history, economics, politics and obviously memes.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
