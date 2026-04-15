"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle, Send, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:leider.samudio@email.com",
    label: "leider.samudio@email.com",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/leidersamudiodev",
    label: "@leidersamudiodev",
    gradient: "from-gray-500 to-gray-700",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/leidersamudio",
    label: "/in/leidersamudio",
    gradient: "from-blue-500 to-blue-700",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
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
                Contacto
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {"¿Tienes un proyecto en "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                mente?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Estoy siempre abierto a nuevas oportunidades, colaboraciones o
              simplemente a una buena conversación sobre tecnología y diseño.
            </p>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                size="lg"
                className="group relative bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-lg font-medium overflow-hidden"
                asChild
              >
                <a
                  href="https://wa.me/573150503464?text=Hola%20Leider,%20me%20gustaría%20hablar%20contigo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Escríbeme por WhatsApp
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact links */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} p-0.5 mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <link.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.div>
                  
                  <span className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-sm text-muted-foreground">{link.label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional call to action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-muted-foreground text-sm">
              Respondo generalmente en menos de 24 horas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
