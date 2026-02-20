import gastronomiaCard from '../assets/images/gastronomia-card.png'
import cinematograficaCard from '../assets/images/cinematografica-card.png'
import amazonicaCard from '../assets/images/amazonica-card.png'

const IconCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-[24px] p-6 flex flex-col gap-3">
    <div className="w-6 h-6">{icon}</div>
    <h3 className="font-manrope font-medium text-[18px] text-shark">{title}</h3>
    <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">{description}</p>
  </div>
)

const ImageCard = ({ image, title, description }) => (
  <div className="bg-white rounded-[24px] p-2 flex flex-col">
    <div className="p-3">
      <h3 className="font-manrope font-medium text-[18px] text-shark text-center">{title}</h3>
    </div>
    <div 
      className="w-full h-[214px] rounded-[24px]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <div className="p-3">
      <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">{description}</p>
    </div>
  </div>
)

const SectionFeatures3 = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center max-w-[700px]">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">Veja o que fazemos</h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray mt-2">
            Explore o que torna a Chicas Eventos única na criação de experiências memoráveis
          </p>
        </div>
        
        {/* Grid 3 Columns */}
        <div className="grid grid-cols-3 gap-5 w-full">
          {/* Col 1 */}
          <div className="flex flex-col gap-5">
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1F2021" strokeWidth="1.5"/></svg>}
              title="Jornada Sem Preocupação"
              description="Do primeiro contato ao pós-evento, garantimos um processo fluido e sem estresse"
            />
            <ImageCard 
              image={gastronomiaCard}
              title="Excelência Gastronômica"
              description="Buffets elaborados com ingredientes selecionados e sabores que encantam"
            />
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-5">
            <ImageCard 
              image={cinematograficaCard}
              title="Captação Cinematográfica"
              description="Cada momento do seu evento capturado com qualidade profissional"
            />
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none"><path d="M4.75 4.75V14.75H9.25" stroke="#1F2021" strokeWidth="1.5"/><path d="M14.75 4.75V14.75H19.25" stroke="#1F2021" strokeWidth="1.5"/><path d="M9.25 4.75V19.25H14.75" stroke="#1F2021" strokeWidth="1.5"/></svg>}
              title="Personalização Total"
              description="Cada evento é único e merece uma abordagem exclusiva"
            />
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-5">
            <IconCard 
              icon={<svg viewBox="0 0 24 24" fill="none"><rect x="4.75" y="4.75" width="14.5" height="8.5" rx="2" stroke="#1F2021" strokeWidth="1.5"/><rect x="4.75" y="12" width="14.5" height="7.25" rx="2" stroke="#1F2021" strokeWidth="1.5"/></svg>}
              title="Acompanhamento do Início ao Fim"
              description="Coordenação profissional presente em cada etapa"
            />
            <ImageCard 
              image={amazonicaCard}
              title="Essência Amazônica"
              description="Valorizamos a riqueza da cultura amazônica, criando eventos autênticos"
            />
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="flex items-center gap-3 py-3 px-5 bg-white rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF7926"/>
          </svg>
          <div className="w-px h-8 bg-wild-sand" />
          <span className="font-manrope text-[18px] text-shark">Confiança de mais de 100 eventos realizados</span>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures3
