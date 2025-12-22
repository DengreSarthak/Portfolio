"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const whitepapers = [
  {
    title: "OrbOracle",
    focus: "Distributed oracle federation",
    summary:
      "Orb Oracle are decentralized in the sense that any oracle token holder can submit values and thus can act as an oracle operator. And they aresustainable in the sense that oracle operators are rewarded for submitting values",
    whitepaper: "https://drive.google.com/file/d/12A6fDPXgAk5za9b3bESfMH7k08yMcaoy/view?usp=sharing",
    Implementation: "https://orb-oracle.stability.nexus/",
  },
  {
    title: "Gluon Z",
    focus: "Dual-token stability layer",
    summary:
      "Gluon Z is to split (as in nuclear fission) an existing volatile asset into its stable and unstable components. These components can be merged back (as in nuclear fusion) into the original asset or transmuted into each other (as in nuclear beta decays)",
    whitepaper: "https://eprint.iacr.org/2025/1372",
    Implementation: "https://evm.gluon.stability.nexus/",
  },
  {
    title: "Raindrop",
    focus: "Autonomous yield orchestration",
    summary:
      "RainDrop is a decentralized protocol for fair reward distribution to token stakers. RainDrop operates on discrete drop events where any ERC20 token is distributed proportionally to current stakers.",
    whitepaper: "https://drive.google.com/file/d/1QYiRlj3Q6ef57qblbbHmKaDgF5j9d8g9/view?usp=sharing",
    Implementation: "https://stabilitynexus.github.io/RainDrop-Frontend/",
  },
];

export function Whitepapers() {
  return (
    <section id="whitepapers" className="py-4 sm:py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Whitepapers</h2>
        </div>

        <p className="mx-auto mb-6 max-w-3xl text-center text-sm sm:text-base md:text-lg text-[#4a3a2b] opacity-80">
          Lightweight research notes paired with live implementations—just the signal, no noise.
        </p>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whitepapers.map((paper, index) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-lg border border-[#d7b97c]/60 bg-[#fff9ef] p-5 text-left text-[#2a2420] shadow-[0_10px_26px_-22px_rgba(47,39,32,0.7)] transition-transform duration-200 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#2a2420] sm:text-xl">{paper.title}</h3>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#a37c38]">
                      {paper.focus}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#d7b97c]/50 bg-white text-[#b37a2b]">
                    <FileText size={18} strokeWidth={1.5} />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#3b2f25] sm:text-base">
                  {paper.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 border-t border-dashed border-[#d7b97c]/60 pt-4">
                  <Link
                    href={paper.whitepaper}
                    className="inline-flex items-center justify-center rounded-full border border-[#d7b97c] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#2a2420] transition-colors hover:bg-[#f4e5c3]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Whitepaper
                  </Link>
                  <Link
                    href={paper.Implementation}
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#d7b97c]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#2a2420] transition-colors hover:bg-[#d7b97c]/30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Implementation
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
