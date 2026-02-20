import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import SectionHero from './components/SectionHero'
import SectionHistory from './components/SectionHistory'
import SectionCommitment from './components/SectionCommitment'
import SectionValues from './components/SectionValues'
import SectionExperience from './components/SectionExperience'
import SectionCTA from './components/SectionCTA'
import SectionTestimonials from './components/SectionTestimonials'
import SectionFAQ from './components/SectionFAQ'
import SectionContact from './components/SectionContact'

const About = () => {
  return (
    <div className="w-full min-h-screen bg-alabaster">
      <Navbar />
      <main>
        <SectionHero />
        <SectionHistory />
        <SectionCommitment />
        <SectionValues />
        <SectionExperience />
        <SectionCTA />
        <SectionTestimonials />
        <SectionFAQ />
        <SectionContact />
      </main>
      <Footer />
    </div>
  )
}

export default About