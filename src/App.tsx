import AboutSection from './components/sections/AboutSection'
import DownloadSection from './components/sections/DownloadSection'
import FeaturesSection from './components/sections/FeaturesSection'
import Hero from './components/sections/Hero'
import JourneySection from './components/sections/JourneySection'
import Model136 from './components/sections/Model136'
import PartnersSection from './components/sections/PartnersSection'
import RolesSection from './components/sections/RolesSection'
import SiteFooter from './components/sections/SiteFooter'
import SiteHeader from './components/sections/SiteHeader'
import TopGovBar from './components/sections/TopGovBar'

function App() {
  return (
    <>
      <TopGovBar />
      <SiteHeader />
      <main>
        <Hero />
        <Model136 />
        <AboutSection />
        <JourneySection />
        <FeaturesSection />
        <RolesSection />
        <PartnersSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
