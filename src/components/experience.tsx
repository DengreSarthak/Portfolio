"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "StabilityNexus",
    year: "2024 - Present",
    description:
      "Stability Nexus is an open-source organization focused on building impactful dApps that solve real-world problems and empower users. I’ve contributed to two major projects and continue to support others within the ecosystem. I worked closely with the co-founder of Stability Nexus, mentoring contributors and helping submit 11 projects to the ETC Grant DAO—securing over \$77,000 in funding.",
    technologies: ["Contributor", "Mentorship"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Experience</h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
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
                  {exp.title}
                </div>
                <div className="mb-2 text-xl font-bold">{exp.year}</div>
              </div>
              <div className="text-center mb-4">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="max-w-xl mx-auto">
                {" "}
                {/* Added wrapper div */}
                <p className="text-xl fold-medium text-left">
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
