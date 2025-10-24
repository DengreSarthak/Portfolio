"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Booting...")

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onLoadingComplete()
          }, 500)
          return 100
        }

        // Change message at certain points
        if (prev > 75 && message !== "Nearly There...") {
          setMessage("Nearly There...")
        } else if (prev > 40 && message !== "Loading Assets...") {
          setMessage("Loading Assets...")
        }

        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [message, onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-gray-700 flex flex-col items-center justify-center z-50 font-mono">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-xl px-4">
        <h1 className="text-[#FBE9BB] text-2xl mb-4">{message}</h1>
        <div className="w-full h-8 border-2 border-dashed border-[#FBE9BB] p-1">
          <div className="h-full bg-[#FBE9BB]" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-[#FBE9BB] mt-4">
          {message === "Nearly There..." ? "Initializing Web3 Portfolio..." : "Loading Blockchain Data..."}
        </p>
      </motion.div>
    </div>
  )
}
