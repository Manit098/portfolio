"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Globe, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import StarBackground from "@/components/star-background"

type Project = {
  id: number
  title: string
  description: string
  image: string
  website: string
  github: string
  techStack: string[]
  category: "frontend" | "backend" | "fullstack"
}

export default function WebDevProjects() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const element = textRef.current;
  if (!element) return;

  const text = "Frontend, Backend, Full Stack";
  let index = 0;

  // Clear any previous content before typing
  element.textContent = "";

  const typeWriter = () => {
    if (index < text.length && element) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  };

  const startTyping = setTimeout(() => {
    typeWriter();
  }, 1000);

  
  return () => {
    clearTimeout(startTyping);
  };
}, []);


  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and TailwindCSS",
      image: "/portfolio.png?height=200&width=300",
      website: "https://manit.is-a.dev",
      github: "https://github.com/manit098/portfolio",
      techStack: ["Next.js", "React", "TailwindCSS"],
      category: "frontend",
    },
    {
      id: 2,
      title: "E-commerce UI",
      description: "Modern e-commerce user interface with animations",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["React", "Framer Motion", "Styled Components"],
      category: "frontend",
    },
    {
      id: 3,
      title: "Dashboard Template",
      description: "Responsive admin dashboard template",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["React", "Material UI", "Chart.js"],
      category: "frontend",
    },
    {
      id: 4,
      title: "REST API",
      description: "RESTful API for a blog application",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["Node.js", "Express", "MongoDB"],
      category: "backend",
    },
    {
      id: 5,
      title: "Authentication Service",
      description: "Secure authentication service with JWT",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["Node.js", "Express", "JWT", "Redis"],
      category: "backend",
    },
    {
      id: 6,
      title: "GraphQL API",
      description: "GraphQL API for a social media application",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["Node.js", "Apollo Server", "PostgreSQL"],
      category: "backend",
    },
    {
      id: 7,
      title: "Social Media App",
      description: "Full stack social media application",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
    },
    {
      id: 8,
      title: "Task Management System",
      description: "Full stack task management application",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["Next.js", "Express", "PostgreSQL", "Prisma"],
      category: "fullstack",
    },
    {
      id: 9,
      title: "Real-time Chat App",
      description: "Full stack real-time chat application",
      image: "/placeholder.svg?height=200&width=300",
      website: "https://example.com",
      github: "https://github.com",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
    },
  ]

  const frontendProjects = projects.filter((project) => project.category === "frontend")
  const backendProjects = projects.filter((project) => project.category === "backend")
  const fullstackProjects = projects.filter((project) => project.category === "fullstack")

  return (
    <main className="min-h-screen bg-black text-white relative">
      <StarBackground />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-mono mb-6"
        >
          My Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-xl md:text-2xl text-gray-300"
        >
          <div ref={textRef} className="inline-block"></div>
          <span className="animate-blink">|</span>
        </motion.div>

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

      {/* Projects Sections */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-mono mb-16"
          >
            Frontend
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-mono mb-16"
          >
            Backend
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {backendProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-mono mb-16"
          >
            Full Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullstackProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="bg-gray-900 border-gray-800 h-full hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
        <CardContent className="p-0">
          <div className="h-40 bg-gray-800 relative overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-mono mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-3">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-mono text-gray-400 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
