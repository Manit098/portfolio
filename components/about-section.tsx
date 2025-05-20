"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionTransition from "@/components/section-transition"

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-10 overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
      >
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-mono"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-mono"
          >
            I am 15{" "}
            <span className="inline-flex items-center ml-2">
              <span className="text-yellow-400">😲</span> <span className="text-gray-400">Shocking</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 font-mono text-sm md:text-base leading-relaxed"
          >

            Hey! I’m Manit, a 15-year-old tech enthusiast passionate about building and learning. I love turning ideas into reality through code. Always curious, always evolving. Driven by purpose, fueled by creativity. I believe in creating value, inspiring others, and pushing boundaries—because age is just a number when passion leads the way.
            .
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 pt-4"
          >
            <a
              href="https://github.com/manit098"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/manit-mishra-39363a309/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono mb-2">Experience</h3>
                <p className="text-2xl font-bold font-mono">3+ Years</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono mb-2">Currently</h3>
                <p className="text-2xl font-bold font-mono">Freelancer</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      <SectionTransition />
    </section>
  )
}
