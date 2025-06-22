"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, ChevronDown, ChevronUp, ExternalLink, MoreHorizontal, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Yellow Trade",
    year: "2025",
    shortDescription: "A sophisticated decentralized trading platform designed for perpetual futures contracts. Built with cutting-edge technology to eliminate slippage completely while offering traders customizable leverage options.",
    fullDescription:
      "A sophisticated decentralized trading platform designed for perpetual futures contracts. Built with cutting-edge technology to eliminate slippage completely while offering traders customizable leverage options. The platform operates off-chain for lightning-fast execution while maintaining on-chain security and transparency, providing traders with zero counterparty risk and institutional-grade trading experience.",
  },
  {
    title: "HackNexus",
    year: "2025",
    shortDescription: "The comprehensive Web3 event discovery and management platform that revolutionizes how developers connect with opportunities. Participants can easily discover local hackathons, conferences, and tech meetups tailored to their interests and skill levels.",
    fullDescription:
      "The comprehensive Web3 event discovery and management platform that revolutionizes how developers connect with opportunities. Participants can easily discover local hackathons, conferences, and tech meetups tailored to their interests and skill levels. Event organizers benefit from seamless hosting and management tools, while attendees earn verifiable on-chain Proof-of-Attendance tokens that serve as permanent badges of participation in the Web3 builder ecosystem.",
    githubLink: "https://github.com/StabilityNexus/HackNexus",
  },
  {
    title: "Clowder",
    year: "2025",
    shortDescription: "An innovative collaboration platform that transforms how teams track and reward contributions through Contribution Accounting Tokens (CATs). Project owners can create transparent systems to monitor individual contributions, ensuring every team member's effort is properly recognized and rewarded.",
    fullDescription:
      "An innovative collaboration platform that transforms how teams track and reward contributions through Contribution Accounting Tokens (CATs). Project owners can create transparent systems to monitor individual contributions, ensuring every team member's effort is properly recognized and rewarded. The platform brings unprecedented transparency and accountability to collaborative work by converting every contribution into measurable, on-chain recognition that builds lasting professional reputation.",
    githubLink: "https://github.com/StabilityNexus/Clowder", 
    demoLink: "https://clowder.stability.nexus/",
  },
  {
    title: "Hodlcoin",
    year: "2024",
    shortDescription: "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself.",
    fullDescription:
      "A comprehensive decentralized platform specifically designed to reward long-term cryptocurrency holders. The unique incentive mechanism creates a win-win-win scenario that benefits individual users, vault creators, and the ecosystem itself. Users are encouraged to lock their tokens for extended periods and earn substantial rewards over time, making it the ideal choice for committed investors who believe in the long-term value proposition of their holdings.",
    githubLink: "https://github.com/StabilityNexus/hodlCoin-Solidity-WebUI",
    demoLink: "https://evm.hodlcoin.co.in/", 
  },
];

export function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section id="projects" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto opacity-80">
          A curated selection of my Web3 adventures. Each project solves real problems while pushing blockchain boundaries!
        </p>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-gray-700 text-[#f5d7b2] px-3 sm:px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold pixel-shadow shadow-md mb-2 rounded">
                  {project.title}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">{project.year}</div>
              </div>

              <p className="text-sm sm:text-base md:text-lg font-medium max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-gray-700 text-center mb-4">
                {expandedProjects.has(index) ? project.fullDescription : project.shortDescription}
              </p>

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                >
                  {expandedProjects.has(index) ? (
                    <>
                      <ChevronUp size={16} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      More
                    </>
                  )}
                </button>
                
                {expandedProjects.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* And Many More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <motion.div
              className="relative inline-flex items-center gap-3 px-6 py-4 border-2 border-dashed border-gray-400 rounded-lg bg-gradient-to-r from-gray-50/50 to-gray-100/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02, borderColor: "#6b7280" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} className="text-gray-600" />
              </motion.div>
              
              <div className="flex items-center gap-2">
                <MoreHorizontal size={24} className="text-gray-500" />
                <span className="text-lg sm:text-xl font-medium text-gray-600 italic">
                  And many more projects..
                </span>
                <MoreHorizontal size={24} className="text-gray-500" />
              </div>

            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
