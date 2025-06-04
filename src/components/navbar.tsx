"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Github, Twitter } from "lucide-react";
import { CodeForcesIcon } from "./icons/codeforces";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 z-40 bg-transparent">
      <div className="max-w-5xl px-8">
        <nav className="flex items-center gap-4 justify-start">
          {/* Menu Button */}
          <button
            className="bg-gray-700/90 text-[#f5d7b2] p-2 hover:bg-gray-600 transition-all duration-300 
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
            hover:-translate-y-0.5 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://linkedin.com/in/sarthak-dengre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/90 text-[#f5d7b2] p-2 hover:bg-gray-600 transition-all duration-300 
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
              hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/DengreSarthak"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/90 text-[#f5d7b2] p-2 hover:bg-gray-600 transition-all duration-300 
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
              hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/sarthak_dengre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/90 text-[#f5d7b2] p-2 hover:bg-gray-600 transition-all duration-300 
               hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
              hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://codeforces.com/profile/Sarthak_Dengre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/90 text-[#f5d7b2] p-2 hover:bg-gray-600 transition-all duration-300 
               hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
              hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="CodeForces"
            >
              <CodeForcesIcon size={24} />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-[60px] left-0 px-4 w-1/6 h-screen bg-[#f5d7b2]/95 border-r border-dashed border-gray-700 shadow-lg backdrop-blur-sm">
          <div className="py-4 flex flex-col space-y-4">
            {["Home", "Achievements", "Projects", "Experience", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:bg-gray-700 hover:text-[#f5d7b2] py-2 px-4 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
