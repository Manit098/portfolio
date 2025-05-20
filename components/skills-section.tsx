"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTransition from "@/components/section-transition"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("web-dev")

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-10">
      <SectionTransition />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-mono mb-10"
        >
          Skills
        </motion.h2>

        <Tabs defaultValue="web-dev" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-10 bg-gray-900">
            <TabsTrigger
              value="web-dev"
              className={`font-mono transition-all duration-300 ${activeTab === "web-dev" ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" : ""}`}
            >
              Web Dev
            </TabsTrigger>
            <TabsTrigger
              value="data-science"
              className={`font-mono transition-all duration-300 ${activeTab === "data-science" ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" : ""}`}
            >
              Data Science
            </TabsTrigger>
            <TabsTrigger
              value="low-level"
              className={`font-mono transition-all duration-300 ${activeTab === "low-level" ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" : ""}`}
            >
              Low Level
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web-dev" className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-mono mb-4">Frontend</h3>
                    <ul className="space-y-2 font-mono">
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Redux Toolkit</li>
                      <li>Zustand</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-mono mb-4">Backend</h3>
                    <ul className="space-y-2 font-mono">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>TypeScript</li>
                      <li>Redis</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-mono mb-4">Tools</h3>
                    <ul className="space-y-2 font-mono">
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Docker</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="data-science">
            <div className="h-40 flex items-center justify-center">
              <AnimatePresence>
                <motion.div
                  key="data-science-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="font-mono text-xl"
                >
                  Currently Learning
                </motion.div>
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="low-level">
            <div className="h-40 flex items-center justify-center">
              <AnimatePresence>
                <motion.div
                  key="low-level-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="font-mono text-xl"
                >
                  Currently Learning
                </motion.div>
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
