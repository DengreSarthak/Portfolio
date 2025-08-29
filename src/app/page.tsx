"use client"

import { useState, useEffect } from "react"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Bootcamps } from "@/components/bootcamps"
import { Projects } from "@/components/projects"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { LoadingScreen } from "@/components/loading-screen"
import { Divider } from "@/components/divider"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <div
        className={`min-h-screen bg-[#F6D4B1] text-gray-700 font-mono ${
          isLoading ? "hidden" : ""
        }`}
      >
        <Navbar />
        <main className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 text-center">
          <Hero />
          <Divider />
          <Experience />
          <Divider />
          <Achievements />
          <Divider />
          <Projects />
          <Divider />
          <Bootcamps />
          <Divider />
          <Contact />
        </main>
      </div>
    </>
  );
}