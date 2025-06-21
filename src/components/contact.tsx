"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-4 sm:py-6 md:py-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

        <div className="border border-dashed border-gray-700 p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pixel-shadow">Connect With Me</h3>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="break-words">dengresarthak2002@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Based in</h4>
              <p>LNMIIT, Jaipur, India</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Social</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2">
                <a
                  href="https://github.com/DengreSarthak"
                  className="underline hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sarthak-dengre"
                  className="underline hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/sarthak_dengre"
                  className="underline hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
