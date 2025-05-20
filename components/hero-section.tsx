"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const textRef = useRef<HTMLSpanElement>(null)

 useEffect(() => {
  if (!textRef.current) return

  const text = "Full Stack Web Developer"
  let index = 0

  const typeWriter = () => {
    if (index < text.length && textRef.current) {
      textRef.current.textContent = text.slice(0, index + 1)
      index++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(() => {
    typeWriter()
  }, 1000)
}, [])


  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black border-b border-white"></div>

      {/* Left border */}
      <div className="absolute top-8 bottom-8 left-0 w-8 bg-black border-r border-white"></div>

      {/* Right border */}
      <div className="absolute top-8 bottom-8 right-0 w-8 bg-black border-l border-white"></div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-black border-t border-white"></div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-mono text-2xl md:text-4xl mb-2"
        >
          Hi, I&apos;m Manit
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-xl md:text-3xl"
        >
          <span ref={textRef} className="inline-block"></span>
          <span className="animate-blink">|</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )
}
