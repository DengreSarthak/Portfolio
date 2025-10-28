"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { Github, ExternalLink, Sparkles } from "lucide-react"

const projects = [
  {
    title: "HackHub",
    category: "Frontend",
    year: "2025",
    shortDescription: "The comprehensive Web3 event discovery and management platform that revolutionizes how developers connect with opportunities. Participants can easily discover local hackathons, conferences, and tech meetups tailored to their interests and skill levels.",
    githubLink: "https://github.com/StabilityNexus/HackHub-WebUI",
    demoLink: "https://hackhub.stability.nexus/",
  },
  {
    title: "HackHub",
    category: "Solidity",
    year: "2025",
    shortDescription: "The comprehensive Web3 event discovery and management platform that revolutionizes how developers connect with opportunities. Participants can easily discover local hackathons, conferences, and tech meetups tailored to their interests and skill levels.",
    githubLink: "https://github.com/StabilityNexus/HackHub-Solidity",
  },
  {
    title: "OrbOracle",
    category: "Solidity",
    year: "2025",
    shortDescription: "The comprehensive Web3 event discovery and management platform that revolutionizes how developers connect with opportunities. Participants can easily discover local hackathons, conferences, and tech meetups tailored to their interests and skill levels.",
    githubLink: "https://github.com/StabilityNexus/OrbOracle-Solidity",
  },
  {
    title: "HodlCoin",
    category: "Frontend",
    year: "2024",
    shortDescription: "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself.",
    githubLink: "https://github.com/StabilityNexus/hodlCoin-Solidity-WebUI",
    demoLink: "https://evm.hodlcoin.co.in/", 
  },
  {
    title: "OrbOracle",
    category: "Rust",
    year: "2025",
    shortDescription: "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself.",
    githubLink: "https://github.com/StabilityNexus/OrbOracle-Solana",
    demoLink: "https://tnt.stability.nexus/", 
  },
  {
    title: "Gluon",
    category: "Rust",
    year: "2025",
    shortDescription: "An innovative collaboration platform that transforms how teams track and reward contributions through Contribution Accounting Tokens (CATs). Project owners can create transparent systems to monitor individual contributions, ensuring every team member's effort is properly recognized and rewarded.",
    githubLink: "https://github.com/StabilityNexus/Gluon-Solana", 
    demoLink: "https://clowder.stability.nexus/",
  },
  {
    title: "IncoRichi",
    category: "Undefined",
    year: "2025",
    shortDescription: "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself.",
    githubLink: "https://github.com/DengreSarthak/IncoRichi",
    demoLink: "https://inco-richi.vercel.app/", 
  },
  {
    title: "OraclePoster",
    category: "Undefined",
    year: "2025",
    shortDescription: "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself.",
    githubLink: "https://github.com/DjedAlliance/Oracle-Backend",
  },
];

const categories = ["Solidity", "Rust", "Frontend", "Undefined"] as const;

const activeDotLayers = [
  { x: 50, y: 48, size: 4, opacity: 0.4 },
  { x: 52, y: 52, size: 3.6, opacity: 0.38 },
  { x: 47, y: 51, size: 3.4, opacity: 0.36 },
  { x: 54, y: 46, size: 3.1, opacity: 0.34 },
  { x: 46, y: 47, size: 3, opacity: 0.32 },
  { x: 58, y: 54, size: 2.8, opacity: 0.3 },
  { x: 42, y: 54, size: 2.8, opacity: 0.3 },
  { x: 56, y: 42, size: 2.6, opacity: 0.28 },
  { x: 44, y: 44, size: 2.6, opacity: 0.28 },
  { x: 60, y: 49, size: 2.5, opacity: 0.26 },
  { x: 39, y: 48, size: 2.5, opacity: 0.26 },
  { x: 63, y: 57, size: 2.4, opacity: 0.24 },
  { x: 36, y: 56, size: 2.4, opacity: 0.24 },
  { x: 66, y: 44, size: 2.2, opacity: 0.22 },
  { x: 33, y: 45, size: 2.2, opacity: 0.22 },
  { x: 70, y: 52, size: 2.1, opacity: 0.2 },
  { x: 29, y: 50, size: 2.1, opacity: 0.2 },
  { x: 73, y: 59, size: 1.9, opacity: 0.18 },
  { x: 25, y: 58, size: 1.9, opacity: 0.18 },
  { x: 78, y: 46, size: 1.8, opacity: 0.16 },
  { x: 22, y: 47, size: 1.8, opacity: 0.16 },
  { x: 82, y: 53, size: 1.7, opacity: 0.14 },
  { x: 18, y: 52, size: 1.7, opacity: 0.14 },
  { x: 86, y: 40, size: 1.6, opacity: 0.12 },
  { x: 14, y: 42, size: 1.6, opacity: 0.12 },
  { x: 90, y: 60, size: 1.5, opacity: 0.1 },
  { x: 10, y: 60, size: 1.5, opacity: 0.1 },
];

const activeButtonBackground = [
  ...activeDotLayers.map(
    ({ x, y, size, opacity }) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,${opacity}) 0px, rgba(255,255,255,0) ${size}px)`,
  ),
  "radial-gradient(ellipse at 50% 50%, rgba(255,245,224,0.28) 0%, rgba(54,46,39,0.9) 55%, rgba(30,26,22,0.98) 100%)",
].join(", ");

export function Showcase() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Solidity");

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Showcase</h2>
        </div>

        <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto opacity-80">
          A curated selection of my Web3 adventures. Each project solves real problems while pushing blockchain boundaries!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative flex min-w-[140px] items-center justify-center rounded-sm border px-6 py-3 text-base font-semibold transition-all duration-200 sm:min-w-[150px] ${
                  isActive
                    ? "border-[#2f2720] text-[#fbeac5] shadow-[4px_4px_0_rgba(47,39,32,0.7)]"
                    : "border-[#b9934a] bg-[#f8e8bc] text-[#1f1a15] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(185,147,74,0.7)]"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: "#2a2420",
                        backgroundImage: activeButtonBackground,
                      }
                    : undefined
                }
              >
                {category}
                {isActive && (
                  <Sparkles
                    size={18}
                    className="absolute -right-3 -top-2 rotate-12 text-[#f8e8bc]"
                    strokeWidth={1.5}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="space-y-8 sm:space-y-10">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const capsuleTagline =
              project.category === "Undefined"
                ? "Signature multi-stack drop crafted for curious explorers."
                : `Signature ${project.category.toLowerCase()} drop built for curious explorers.`;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`group relative flex flex-col gap-6 sm:gap-8 md:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-[42%]">
                    <div className="flex h-full flex-col justify-between gap-5 rounded-md border border-[#b9934a] bg-gradient-to-br from-[#2c251f] via-[#241d18] to-[#1d1712] p-6 transition-transform duration-200 group-hover:-translate-y-1">
                      <div>
                        <h3 className="mt-4 flex items-center gap-2 text-2xl font-bold text-[#fbeac5] sm:text-[26px]">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm text-[#fbeac5]/70 sm:text-base">
                          {capsuleTagline}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 border-t border-[#3f3327] pt-4">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#b9934a]/70">
                          Launch Pad
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#b9934a] bg-[#211b17] px-4 py-2 text-sm font-semibold text-[#fbeac5] transition-colors duration-200 hover:bg-[#2f2720]"
                              title="View source code"
                            >
                              Code Vault
                            </a>
                          )}
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-transparent bg-[#f8e8bc] px-4 py-2 text-sm font-semibold text-[#1f1a15] transition-colors duration-200 hover:bg-[#f3d88d]"
                              title="Open live demo"
                            >
                              Launch Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-1">
                    <div className="flex h-full flex-col gap-5 rounded-md border border-[#d7b97c]/60 bg-[#f8e8bc] px-5 py-6 text-left text-[#2a2420]">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a37c38]">
                          Mission Brief
                        </span>
                        <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-[#2e2620]">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
