import Header from "./Header"
import HomeSection from "./HomeSection"
import AboutMeSection from "./AboutMeSection"
import SkillsSection from "./SkillsSection"
import CurriculumSection from "./CurriculumSection"
import DegreesSection from "./DegreesSection"

export default function App() {
  return (
    <div className="app">
      <Header />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <CurriculumSection />
      <DegreesSection />
    </div>
  )
}