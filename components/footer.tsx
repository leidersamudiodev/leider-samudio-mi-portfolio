"use client"

import { Github, Linkedin, Mail, Heart, MapPin, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/leidersamudiodev",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/leidersamudio",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:leider.samudio@email.com",
    label: "Email",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 border-t border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Leider Jose Samudio Arrieta
                </span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Front-End Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sincelejo, Colombia</span>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Navegacion
              </h4>
              <nav className="flex flex-col gap-2">
                {['Inicio', 'Sobre Mi', 'Tecnologias', 'Proyectos', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                Redes Sociales
              </h4>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl text-muted-foreground hover:text-primary bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300"
                    aria-label={link.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              className="text-sm text-muted-foreground text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &copy; {currentYear}{" "}
              <span className="font-medium text-foreground">Leider Jose Samudio Arrieta</span>
              {" "}&mdash;{" "}
              <span className="text-primary">Front-End Developer</span>
              {" "}| Sincelejo, Colombia
            </motion.p>

            {/* Made with love */}
            <motion.p
              className="text-xs text-muted-foreground flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Disenado y desarrollado con{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              </motion.span>
              {" "}por Leider Jose Samudio Arrieta
            </motion.p>
          </div>

          {/* Back to top */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Volver arriba
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
