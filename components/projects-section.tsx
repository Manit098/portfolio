"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  const router = useRouter()
  const [popup, setPopup] = useState<string | null>(null)

  const projects = [
    { id: 1, title: "Web Dev", delay: 0.2 },
    { id: 2, title: "Data Science", delay: 0.4 },
    { id: 3, title: "Low Level", delay: 0.6 },
  ]

  const handleCardClick = (title: string) => {
    if (title === "Web Dev") {
      router.push("/webdev/projects")
    } else {
      setPopup(title)
      setTimeout(() => {
        setPopup(null)
      }, 2000)
    }
  }

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-mono mb-10"
        >
          Choose
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: project.delay, duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(project.title)}
            >
              <Card className="bg-gray-900 border-gray-800 h-60 cursor-pointer hover:bg-gray-800 transition-colors">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <h3 className="text-2xl font-mono">{project.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <AnimatePresence>
            {popup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="text-xl font-mono">Currently Learning</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
