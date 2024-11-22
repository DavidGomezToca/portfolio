import Header from "./Header"
import HomeSection from "./sections/HomeSection"
import AboutMeSection from "./sections/AboutMeSection"
import SkillsSection from "./sections/SkillsSection"
import CurriculumSection from "./sections/CurriculumSection"
import DegreesSection from "./sections/DegreesSection"
import PortfolioSection from "./sections/PortfolioSection"

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
    </div>
  )
}