import Navbar from "./components/Navbar"
import Reveal from "./components/Reveal"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import FeaturesSection from "./components/sections/FeaturesSection"
import DemoSection from "./components/sections/DemoSection"
import CommunitySection from "./components/sections/CommunitySection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Reveal><FeaturesSection /></Reveal>
        <DemoSection />
        <Reveal><CommunitySection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </>
  )
}
