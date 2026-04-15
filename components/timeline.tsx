"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Rocket, Target, Briefcase } from "lucide-react"

const timelineEvents = [
  {
    year: "2020",
    title: "Inicio del Viaje",
    description: "Descubrí mi pasión por la programación y el desarrollo web. Comencé a aprender HTML, CSS y JavaScript de manera autodidacta.",
    icon: Rocket,
    highlight: "Primeros pasos en el código",
  },
  {
    year: "2021",
    title: "Ingreso a la Universidad",
    description: "Inicié mis estudios en Ingeniería de Sistemas en la Corporación Universitaria Antonio José de Sucre (UAJS).",
    icon: GraduationCap,
    highlight: "UAJS - Ingeniería de Sistemas",
  },
  {
    year: "2022",
    title: "Especialización Front-End",
    description: "Me enfoqué en el desarrollo front-end, dominando React, Tailwind CSS y las mejores prácticas de UI/UX.",
    icon: Code,
    highlight: "React & Modern CSS",
  },
  {
    year: "2023",
    title: "Primeros Proyectos Profesionales",
    description: "Comencé a trabajar en proyectos reales, aplicando conocimientos en Next.js, TypeScript y diseño de interfaces.",
    icon: Briefcase,
    highlight: "Experiencia práctica",
  },
  {
    year: "2024",
    title: "Consolidación Profesional",
    description: "Expandí mi stack tecnológico y trabajé en proyectos más complejos, enfocándome en crear experiencias de usuario excepcionales.",
    icon: Target,
    highlight: "Nivel profesional",
  },
]

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content card */}
      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              {event.highlight}
            </span>
            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {event.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center line with icon */}
      <div className="relative flex flex-col items-center">
        {/* Year badge */}
        <motion.div
          className="absolute -top-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
        >
          {event.year}
        </motion.div>
        
        {/* Icon circle */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <event.icon className="w-6 h-6 text-primary" />
        </motion.div>
        
        {/* Connecting line */}
        {index < timelineEvents.length - 1 && (
          <motion.div
            className="w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="trayectoria" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            ref={ref}
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Mi Trayectoria
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Evolución como{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Desarrollador
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un recorrido por los momentos clave que han definido mi carrera en el desarrollo web.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
