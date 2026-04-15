"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Sparkles, Code2, Palette, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = [
  "Front-End Developer",
  "UI/UX Enthusiast",
  "Web Designer",
  "React Specialist",
]

const floatingTechs = [
  { name: "React", x: "10%", y: "20%", delay: 0 },
  { name: "TypeScript", x: "85%", y: "15%", delay: 0.2 },
  { name: "Tailwind", x: "5%", y: "70%", delay: 0.4 },
  { name: "Next.js", x: "90%", y: "65%", delay: 0.6 },
  { name: "Figma", x: "15%", y: "45%", delay: 0.8 },
  { name: "Git", x: "80%", y: "40%", delay: 1 },
]

const stats = [
  { icon: Code2, value: "+10", label: "Proyectos" },
  { icon: Sparkles, value: "Front-End", label: "Especialista" },
  { icon: Palette, value: "UI/UX", label: "Enfocado" },
]

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < text.length) {
            setCurrentText(text.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(text.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

interface Particle {
  id: number
  x: number
  y: number
  animateY: number
  duration: number
  delay: number
}

function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const width = window.innerWidth
    const height = window.innerHeight
    
    const generatedParticles: Particle[] = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      animateY: Math.random() * -500,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    
    setParticles(generatedParticles)
  }, [])

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y + particle.animateY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle background */}
      <ParticlesBackground />
      
      {/* Background gradient effects with glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating tech badges */}
      {floatingTechs.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute hidden lg:flex px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 text-sm font-medium text-foreground shadow-lg shadow-primary/10"
          style={{ left: tech.x, top: tech.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: tech.delay + 0.5, duration: 0.5 },
            scale: { delay: tech.delay + 0.5, duration: 0.5 },
            y: { delay: tech.delay + 1, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {tech.name}
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Zap className="h-4 w-4" />
                Disponible para oportunidades laborales
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-foreground">Leider Jose</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-cyan-400 bg-clip-text text-transparent">
                  Samudio Arrieta
                </span>
              </motion.h1>

              {/* Typing animation */}
              <motion.div
                className="text-xl md:text-2xl font-medium mb-6 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypewriterText texts={roles} />
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Creo experiencias digitales modernas, intuitivas y visualmente memorables.
                Transformo ideas en productos digitales funcionales con diseño elegante y código limpio.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="group relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium transition-all duration-300 overflow-hidden"
                  onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10 flex items-center">
                    Ver Proyectos
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-base font-medium transition-all duration-300"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Contactarme
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors"
                  >
                    <stat.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right content - Avatar/Illustration */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/40 to-cyan-500/30 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              
              {/* Avatar container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/10 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-1 rounded-full bg-card/90 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                  {/* Developer illustration */}
                  <div className="text-center p-8">
                    <motion.div
                      className="text-6xl md:text-7xl mb-4"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Code2 className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto" />
                    </motion.div>
                    <p className="text-sm font-medium text-muted-foreground">{"< Developer />"}</p>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-card/80 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl">⚛️</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-xl bg-card/80 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl">🎨</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </motion.div>
    </section>
  )
}
