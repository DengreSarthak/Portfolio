"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "HackNexus",
    year: "2025",
    description:
      "HackNexus helps participants easily find local hackathons, conferences, and meetups tailored to their interests, while organizers can seamlessly host and manage events. With on-chain Proof-of-Attendance tokens, every experience becomes a verifiable badge of participation in the Web3 builder ecosystem.",
    technologies: [
      "Mapbox",
      "Solidity",
      "Next.js",
      "IPFS",
    ],
  },
  {
    title: "Clowder",
    year: "2025",
    description:
      "Clowder lets project owners create Contribution Accounting Tokens (CATs) to track and reward individual contributions. It brings transparency and accountability to collaboration by turning every effort into measurable, on-chain recognition.",
    technologies: [
      "Solidity",
      "Next.js",
    ],
  },
  {
    title: "Hodlcoin",
    year: "2024",
    description:
      "HodlCoin is a decentralized platform designed to reward long-term holders. Its unique incentive mechanism benefits users, vault creators, and the vault itself by encouraging users to lock their tokens and earn rewards over time—making it an ideal choice for those committed to holding and growing value.",
    technologies: [
      "Solidity",
      "React",
      "Web3.js",
    ],
  },
];

export function Projects() {
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
          This represents just a small selection of the projects I have worked
          on in the Web3 space. I have many more pieces of personal, university
          and blockchain work.
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

              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-600/20 border border-gray-600/40 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-600/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg font-medium max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-gray-700 text-center">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
