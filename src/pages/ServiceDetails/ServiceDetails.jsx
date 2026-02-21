import { useParams } from 'react-router-dom'
import SectionHero from './components/SectionHero'
import SectionContent from './components/SectionContent'
import SectionRelated from './components/SectionRelated'
import Footer from '../../shared/components/Footer'
import { getServiceData, getAllServices } from './data/services'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const service = getServiceData(serviceId)
  
  // Se o serviço não existir, mostrar mensagem
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-manrope text-[48px] text-shark mb-4">
            Serviço não encontrado
          </h1>
          <p className="font-manrope text-[18px] text-dove-gray">
            O serviço solicitado não existe.
          </p>
        </div>
      </div>
    )
  }
  
  // Buscar dados dos serviços relacionados
  const allServices = getAllServices()
  const relatedServicesData = service.relatedServices.map(id => {
    const relatedService = allServices.find(s => s.id === id)
    if (relatedService) {
      return {
        id: relatedService.id,
        title: relatedService.title,
        description: relatedService.shortDescription,
        image: relatedService.heroImage,
        link: `/servicos/detalhes/${relatedService.id}`
      }
    }
    return null
  }).filter(Boolean)

  return (
    <main className="w-full min-h-screen bg-alabaster">
      {/* Hero Banner */}
      <SectionHero heroImage={service.heroImage} />
      
      {/* Main Content */}
      <SectionContent 
        title={service.title}
        shortDescription={service.shortDescription}
        inclusions={service.inclusions}
        fullDescription={service.fullDescription}
        galleryImages={service.galleryImages}
        ctaText={service.ctaText}
        ctaLink={service.ctaLink}
        backLink={service.backLink}
        category={service.category}
      />
      
      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <SectionRelated 
          relatedSection={service.relatedSection}
          relatedServices={relatedServicesData}
        />
      )}
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

export default ServiceDetails
