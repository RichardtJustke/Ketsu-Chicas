import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import Hero from './components/Hero'
import SectionFeatures1 from './components/SectionFeatures1'
import SectionFeatures2 from './components/SectionFeatures2'
import SectionFeatures3 from './components/SectionFeatures3'
import SectionFeatures4 from './components/SectionFeatures4'
import SectionProperties from './components/SectionProperties'
import SectionIntroduce from './components/SectionIntroduce'
import SectionTestimonials from './components/SectionTestimonials'
import SectionFAQ from './components/SectionFAQ'
import SectionCTA from './components/SectionCTA'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-alabaster">
      <Navbar />
      <main>
        <Hero />
        <SectionFeatures1 />
        <SectionFeatures2 />
        <SectionFeatures3 />
        <SectionFeatures4 />
        <SectionProperties />
        <SectionIntroduce />
        <SectionTestimonials />
        <SectionFAQ />
        <SectionCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
