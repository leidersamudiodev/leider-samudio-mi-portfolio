"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Target, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Panel de administración completo para tienda en línea con sistema de análisis en tiempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Chart.js", "Node.js"],
    objective: "Crear una herramienta intuitiva para gestionar inventario, ventas y análisis de datos de manera eficiente.",
    results: [
      "Reducción del 40% en tiempo de gestión",
      "Dashboard con métricas en tiempo real",
      "Interfaz responsive y accesible",
    ],
    github: "#",
    demo: "#",
    category: "Web App",
  },
  {
    title: "Portfolio Creativo",
    description:
      "Sitio web tipo portafolio con animaciones fluidas y experiencia de usuario inmersiva.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    objective: "Diseñar una experiencia visual única que refleje creatividad y profesionalismo.",
    results: [
      "Animaciones suaves y performantes",
      "Score de Lighthouse 95+",
      "Diseño totalmente responsive",
    ],
    github: "#",
    demo: "#",
    category: "Landing Page",
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación moderna para organización personal con funcionalidades avanzadas de productividad.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    objective: "Desarrollar una herramienta que mejore la productividad personal con una UX excepcional.",
    results: [
      "Sistema drag & drop intuitivo",
      "Sincronización en la nube",
      "Modo oscuro y personalización",
    ],
    github: "#",
    demo: "#",
    category: "Productivity",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500"
        whileHover={{ y: -10 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        
        <div className="relative grid lg:grid-cols-2 gap-0">
          {/* Project image */}
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
            
            {/* Category badge */}
            <motion.div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {project.category}
            </motion.div>
          </div>

          {/* Project content */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Objective */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Objetivo</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                {project.objective}
              </p>
            </div>

            {/* Results */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Resultados</span>
              </div>
              <ul className="space-y-1 pl-6">
                {project.results.map((result, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Código
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group/btn"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proyectos" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Proyectos
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Trabajos{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Destacados
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades en desarrollo front-end, 
              diseño de interfaces y atención al detalle.
            </p>
          </motion.div>

          {/* Projects list */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
