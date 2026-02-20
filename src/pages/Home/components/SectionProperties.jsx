import buffetService from '../assets/images/buffet-service.png'
import audiovisualService from '../assets/images/audiovisual-service.png'
import cerimonialService from '../assets/images/cerimonial-service.png'
import equipeService from '../assets/images/equipe-service.png'

const services = [
  { title: 'Buffet Personalizado', subtitle: 'Gastronomia que surpreende e emociona.', image: buffetService },
  { title: 'Captação Audiovisual Profissional', subtitle: 'Cada momento merece ser eternizado com excelência.', image: audiovisualService },
  { title: 'Organização Cerimonial', subtitle: 'Planejamento estratégico que liberta você de preocupações.', image: cerimonialService },
  { title: 'Equipe Operacional', subtitle: 'Profissionais que fazem a diferença.', image: equipeService }
]

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-[30px] p-2 flex flex-col">
    <div 
      className="w-full h-[342px] rounded-[30px]"
      style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="font-manrope text-[16px] text-shark">{service.title}</span>
        <button className="py-1 px-4 bg-crusta rounded-full font-manrope text-[14px] text-white">Saiba mais</button>
      </div>
      <span className="font-manrope text-[16px] text-dove-gray">{service.subtitle}</span>
    </div>
  </div>
)

const SectionProperties = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center max-w-[700px]">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">Conheça nossos serviços completos</h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray mt-2">
            Cada serviço pensado para transformar seu evento em uma experiência que marca e emociona
          </p>
        </div>
        
        {/* Grid 2x2 */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionProperties
