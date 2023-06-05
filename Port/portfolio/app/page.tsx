import Abouts from '@/components/Abouts'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import ProjectCard from '@/components/ProjectCard'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
      <Abouts />
      <Projects />
      <ProjectCard />
      <Contact />
      <Footer />
    </main>
  )
}
