"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 3000 // exactly 3 seconds
    const interval = 30 // update every 30ms
    const steps = duration / interval
    const increment = 100 / steps
    let count = 0

    const intervalId = setInterval(() => {
      count++
      const progress = Math.min(Math.floor(count * increment), 100)
      setProgress(progress)

      if (progress >= 100) {
        clearInterval(intervalId)
      }
    }, interval)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white text-4xl md:text-6xl font-bold mb-8 font-mono"
      >
        Loading
      </motion.div>

      <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div className="h-full bg-white" style={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
      </div>

      <div className="mt-4 font-mono text-white" data-progress>
        {Math.floor(progress)}%
      </div>
    </div>
  )
}
