import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import SectionHero from './components/SectionHero'
import SectionCards from './components/SectionCards'
import SectionCTA from './components/SectionCTA'

const Cerimonial = () => {
  return (
    <div className="w-full min-h-screen bg-alabaster overflow-x-hidden">
      <Navbar />
      <main className="bg-alabaster">
        <SectionHero />
        <SectionCards />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Cerimonial
