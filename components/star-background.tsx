"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Star = {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 150 // Number of stars

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // % position
          y: Math.random() * 100, // % position
          size: Math.random() * 2 + 1, // Size between 1-3px
          opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1
          duration: Math.random() * 3 + 2, // Animation duration between 2-5s
        })
      }

      setStars(newStars)
    }

    generateStars()

    // Regenerate some stars periodically for twinkling effect
    const interval = setInterval(() => {
      setStars((prevStars) => {
        const newStars = [...prevStars]
        // Replace 10% of stars
        const replaceCount = Math.floor(newStars.length * 0.1)

        for (let i = 0; i < replaceCount; i++) {
          const randomIndex = Math.floor(Math.random() * newStars.length)
          newStars[randomIndex] = {
            ...newStars[randomIndex],
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
          }
        }

        return newStars
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
