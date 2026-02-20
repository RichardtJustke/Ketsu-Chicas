import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import SectionHero from './components/SectionHero'
import CasesGrid from './components/CasesGrid'
import SectionCTA from './components/SectionCTA'

const Cases = () => {
  return (
    <div className="w-full min-h-screen bg-alabaster overflow-x-hidden">
      <Navbar />
      <main>
        <SectionHero />
        <CasesGrid />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Cases
