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
    <section id="contact" className="py-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

        <div className="border border-dashed border-gray-700 p-4 max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4 pixel-shadow">Connect With Me</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-bold">Email</h4>
              <p>dengresarthak2002@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold">Based in</h4>
              <p>LNMIIT, Jaipur, India</p>
            </div>
            <div>
              <h4 className="font-bold">Social</h4>
              <p>
                <a
                  href="https://github.com/DengreSarthak"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /{" "}
                <a
                  href="https://linkedin.com/in/sarthak-dengre"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                /{" "}
                <a
                  href="https://twitter.com/sarthak_dengre"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
