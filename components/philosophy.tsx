"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Sparkles } from "lucide-react"

const philosophyQuotes = [
  {
    quote: "Creo experiencias digitales modernas, intuitivas y visualmente memorables.",
    context: "Mi filosofía de diseño",
  },
  {
    quote: "El código limpio no es solo funcional, es elegante.",
    context: "Sobre la calidad del código",
  },
  {
    quote: "Cada pixel cuenta cuando construyes algo que importa.",
    context: "Atención al detalle",
  },
]

const values = [
  {
    title: "Innovación",
    description: "Siempre explorando nuevas tecnologías y metodologías para crear mejores soluciones.",
  },
  {
    title: "Calidad",
    description: "Código limpio, bien documentado y siguiendo las mejores prácticas de la industria.",
  },
  {
    title: "Experiencia",
    description: "Diseño centrado en el usuario para crear interfaces intuitivas y atractivas.",
  },
  {
    title: "Colaboración",
    description: "Trabajo en equipo efectivo y comunicación clara para alcanzar objetivos comunes.",
  },
]

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 text-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Quote className="w-40 h-40" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main quote */}
          <motion.div
            ref={ref}
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              Mi Filosofía
            </motion.div>
            
            <motion.blockquote
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-primary">{'"'}</span>
              Creo experiencias digitales{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                modernas, intuitivas
              </span>{" "}
              y visualmente memorables.
              <span className="text-primary">{'"'}</span>
            </motion.blockquote>
            
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              — Leider Jose Samudio Arrieta
            </motion.p>
          </motion.div>

          {/* Values grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <div className="relative">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional quotes */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            {philosophyQuotes.slice(1).map((item, index) => (
              <motion.div
                key={index}
                className="px-6 py-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 max-w-sm"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-foreground font-medium mb-1">{`"${item.quote}"`}</p>
                <p className="text-xs text-primary">{item.context}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
