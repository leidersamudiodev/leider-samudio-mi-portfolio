import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Philosophy } from "@/components/philosophy"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SEOContent } from "@/components/seo-content"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SEOContent />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Technologies />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
