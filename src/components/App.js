import Header from "./Header"
import HomeSection from "./sections/HomeSection"
import AboutMeSection from "./sections/AboutMeSection"
import SkillsSection from "./sections/SkillsSection"
import CurriculumSection from "./sections/CurriculumSection"
import DegreesSection from "./sections/DegreesSection"
import PortfolioSection from "./sections/PortfolioSection"
import ContactSection from "./sections/ContactSection"
import Footer from "./Footer"

/**
 * @component App.
 * @returns {JSX.Element} - The App component.
 */
export default function App() {
  return (
    <div className="app">
      <Header />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <CurriculumSection />
      <DegreesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}