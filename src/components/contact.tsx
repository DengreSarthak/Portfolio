"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const contactItems = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      content: "dengresarthak2002@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=dengresarthak2002@gmail.com"
    },
    {
      id: "location",
      icon: MapPin,
      title: "Based in",
      content: "LNMIIT, Jaipur, India"
    }
  ]

  return (
    <section id="contact" className="py-4 sm:py-6 md:py-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        
        <div className="border-2 border-dashed border-gray-700 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto bg-gradient-to-br from-[#f5d7b2]/30 to-[#e8d5b7]/50 rounded-lg backdrop-blur-sm">
          
          <motion.h3 
            className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 pixel-shadow text-center"
            whileHover={{ scale: 1.05 }}
          >
            Connect With Me
          </motion.h3>

          <div className="space-y-4 sm:space-y-6">
            {/* Contact Items */}
            {contactItems.map((item) => {
              const Icon = item.icon
              
              return (
                <motion.div
                  key={item.id}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    hoveredItem === item.id 
                      ? 'border-blue-400 bg-blue-50/30 shadow-lg' 
                      : 'border-gray-400 hover:border-gray-600'
                  } ${item.link ? 'cursor-pointer' : ''}`}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onClick={() => {
                    if (item.link) window.open(item.link, '_blank')
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={item.link ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: hoveredItem === item.id ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={20} className="text-gray-700" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm break-words">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
