"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  id: number
  name: string
  text: string
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Jaspreet Singh",
      text: "Manit is an exceptional developer. His skills in React and Next.js are impressive for someone his age.",
    },
    {
      id: 2,
      name: "Anant",
      text: "Working with Manit was a pleasure. He delivered the project ahead of schedule and exceeded our expectations.",
    },
    {
      id: 3,
      name: "Pratinav",
      text: "I was amazed by Manit's problem-solving abilities. He tackled complex issues with ease and creativity.",
    },
  ])

  

  return (
    <section className="bg-black py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-mono mb-10"
        >
          What People Say About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{
                y: 50,
                opacity: 0,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-lg font-mono mb-4 flex-grow">"{testimonial.text}"</div>
                  <div className="text-right text-gray-400 font-mono">- {testimonial.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
