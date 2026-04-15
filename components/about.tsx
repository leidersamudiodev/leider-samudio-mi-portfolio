"use client"

import { MapPin, GraduationCap, Code2, Palette, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Educacion",
    description: "Corporacion Universitaria Antonio Jose de Sucre (UAJS)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    description: "Sincelejo, Colombia",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Code2,
    title: "Enfoque",
    description: "Desarrollo Front-End",
    color: "from-primary to-cyan-400",
  },
  {
    icon: Palette,
    title: "Pasion",
    description: "Diseno UI/UX",
    color: "from-purple-500 to-pink-500",
  },
]

const passions = [
  { icon: Heart, text: "Diseno minimalista" },
  { icon: Zap, text: "Performance" },
  { icon: Code2, text: "Codigo limpio" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            ref={ref}
            className="flex items-center gap-4 mb-16 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Sobre Mi
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Leider Jose Samudio Arrieta
                </span>
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  Soy <strong className="text-foreground">Leider Jose Samudio Arrieta</strong>, un estudiante 
                  de Ingenieria de Sistemas de 24 anos con una profunda pasion por el desarrollo web y el 
                  diseno de interfaces. Mi objetivo es crear experiencias digitales que no solo sean 
                  visualmente atractivas, sino tambien intuitivas y funcionales.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  Como <strong className="text-foreground">Desarrollador Front-End</strong>, me especializo 
                  en tecnologias modernas como React, JavaScript, TypeScript, Next.js y Tailwind CSS. 
                  Siempre busco aprender y aplicar las mejores practicas de la industria para crear 
                  productos digitales excepcionales.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  Actualmente curso mi carrera en la <strong className="text-foreground">Corporacion 
                  Universitaria Antonio Jose de Sucre (UAJS)</strong> en Sincelejo, Colombia, donde 
                  complemento mi formacion academica con proyectos personales que me permiten explorar 
                  nuevas tecnologias y perfeccionar mis habilidades.
                </motion.p>
              </div>

              {/* Passion tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  >
                    <passion.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{passion.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                  
                  <div className="relative">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
