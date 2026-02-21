import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import SectionHero from './components/SectionHero'
import SectionCards from './components/SectionCards'
import SectionCTA from './components/SectionCTA'

const Audiovisual = () => {
  return (
    <div className="min-h-screen w-full bg-alabaster overflow-x-hidden">
      <Navbar />
      <main className="pt-[100px]">
        <SectionHero />
        <SectionCards />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Audiovisual
