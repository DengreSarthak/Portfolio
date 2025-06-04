"use client"

import { useState, useEffect } from "react"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
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
        <main className="max-w-3xl mx-auto px-4 py-8 text-center">
          <Hero />
          <Divider />
          <Achievements />
          <Divider />
          <Projects />
          <Divider />
          <Experience />
          <Divider />
          <Contact />
        </main>
      </div>
    </>
  );
}
