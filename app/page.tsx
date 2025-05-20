"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import SecondLoader from "@/components/second-loader"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProjectsSection from "@/components/projects-section"
import StarBackground from "@/components/star-background"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [secondLoading, setSecondLoading] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const checkProgress = setInterval(() => {
      const progressElement = document.querySelector("[data-progress]")
      const progress = progressElement ? Number.parseInt(progressElement.textContent || "0", 10) : 0

      if (progress >= 100) {
        clearInterval(checkProgress)
        setLoading(false)
        setSecondLoading(true)

        setTimeout(() => {
          setSecondLoading(false)
          setShowContent(true)
        }, 2000) // 2 seconds for second loader
      }
    }, 100) // check every 100ms

    return () => clearInterval(checkProgress)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  if (secondLoading) {
    return <SecondLoader />
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <StarBackground />
      {showContent && (
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <TestimonialsSection />
          <ProjectsSection />
          <footer className="py-6 text-center text-gray-400 font-mono">Created with ❤️ by Manit Mishra</footer>
        </>
      )}
    </main>
  )
}
