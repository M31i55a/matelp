import Navbar from "./components/Navbar"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import FeaturesSection from "./components/sections/FeaturesSection"
import TryItSection from "./components/sections/TryItSection"
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
        <FeaturesSection />
        <TryItSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
