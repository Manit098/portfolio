"use client"

import { motion } from "framer-motion"

export default function SectionTransition() {
  return (
    <div className="relative h-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-1 md:space-x-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 bg-white rounded-full"
              initial={{
                x: i % 2 === 0 ? -100 : 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: [0, 1, 0],
                transition: {
                  duration: 1.5,
                  delay: i * 0.05,
                  opacity: {
                    times: [0, 0.5, 1],
                    duration: 1.5,
                  },
                },
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
