"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Linkedin, Github, Twitter } from "lucide-react";
import { CodeForcesIcon } from "./icons/codeforces";

const socialLinks = [
  {
    href: "https://linkedin.com/in/sarthak-dengre",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/DengreSarthak",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/sarthak_dengre",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://codeforces.com/profile/Sarthak_Dengre",
    icon: CodeForcesIcon,
    label: "CodeForces",
  },
];

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Bootcamps", href: "#bootcamps" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on escape key and handle outside clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Floating Action Buttons - Only show when menu is closed */}
      {!isMenuOpen && (
        <div className="fixed top-2 sm:top-4 left-2 sm:left-4 z-50 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          {/* Menu Button */}
          <button
            className="bg-gray-700/90 text-[#f5d7b2] p-1.5 sm:p-2 rounded-md hover:bg-gray-600 
            transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]
            hover:-translate-y-0.5 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/90 text-[#f5d7b2] p-1.5 sm:p-2 rounded-md hover:bg-gray-600 
                transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]
                hover:-translate-y-0.5 backdrop-blur-sm group"
                aria-label={label}
              >
                <Icon size={14} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Side Navigation Panel */}
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-[#f5d7b2] shadow-2xl z-40 
        transform transition-transform duration-300 ease-in-out border-r border-gray-700/20
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        w-[280px] sm:w-80`}
      >
        {isMenuOpen && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700/20">
              <h2 className="text-lg sm:text-xl font-bold text-gray-700">Navigation</h2>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-700 hover:bg-gray-700/10 rounded-md transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 sm:px-6 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2.5 sm:py-3 px-3 sm:px-4 text-gray-700 hover:bg-gray-700 hover:text-[#f5d7b2] 
                    rounded-md transition-all duration-300 font-medium text-sm sm:text-base"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Social Links */}
            <div className="p-4 sm:p-6 border-t border-gray-700/20">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-600 mb-3 sm:mb-4">Connect with me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-700/90 text-[#f5d7b2] 
                    rounded-md hover:bg-gray-600 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon size={14} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Push Spacer - Only on desktop */}
      <div className={`hidden sm:block transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'ml-80' : 'ml-0'
      }`}>
        {/* This div will push the main content when menu is open on desktop */}
      </div>
    </>
  );
}
