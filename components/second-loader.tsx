"use client"

import { motion } from "framer-motion"

export default function SecondLoader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          className="text-white text-xl md:text-3xl font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Entering the world of an innovator
        </motion.div>
      </motion.div>
    </div>
  )
}
