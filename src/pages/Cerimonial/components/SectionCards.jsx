import { useState } from 'react'
import { Link } from 'react-router-dom'
import cardPlanejamento from '../assets/images/card-planejamento.png'
import cardProducao from '../assets/images/card-producao.png'
import cardExecucao from '../assets/images/card-execucao.png'
import cardCronograma from '../assets/images/card-cronograma.png'

const cards = [
  {
    id: 1,
    title: 'Planejamento ',
    description: 'Estratégia completa do evento',
    image: cardPlanejamento,
  },
  {
    id: 2,
    title: 'Produção',
    description: 'Criação e desenvolvimento do evento',
    image: cardProducao,
  },
  {
    id: 3,
    title: 'Execução',
    description: 'Coordenação no dia do evento',
    image: cardExecucao,
  },
  {
    id: 4,
    title: 'Cronograma',
    description: 'Timeline detalhada e organizada',
    image: cardCronograma,
  },
]

const extraCards = [
  {
    id: 5,
    title: 'Fornecedores',
    description: 'Gestão e contato com parceiros',
    image: cardPlanejamento,
  },
  {
    id: 6,
    title: 'Coordenação',
    description: 'Supervisão integral do evento',
    image: cardProducao,
  },
]

const CerimonialCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-[30px] p-2 w-[650px]">
      <div className="flex flex-col justify-center gap-[10px] w-full">
        {/* Wrapper */}
        <div className="flex flex-row justify-stretch items-stretch w-full">
          {/* Thumbnail */}
          <div className="w-full h-[341.86px] rounded-[30px] overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-[10px] p-[14px]">
          {/* Title Row */}
          <div className="flex flex-row justify-stretch items-stretch gap-[10px]">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col">
                <h3 className="font-manrope font-normal text-[16px] leading-[1.5em] text-shark">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Description Row */}
          <div className="flex flex-row justify-stretch items-stretch gap-[10px]">
            <div className="flex flex-col flex-1">
              <div className="flex flex-row justify-stretch items-stretch gap-[10px] flex-1">
                <div className="flex flex-col flex-1">
                  <p className="font-manrope font-normal text-[16px] leading-[1.5em] text-dove-gray">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionCards = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="w-full py-[100px] px-[100px]">
      <div className="flex flex-col justify-center items-center gap-10">
        {/* Header Row with Back Button */}
        <div className="flex flex-row items-center gap-[351.95px] w-[1304px]">
          {/* Back Button */}
          <Link 
            to="/servicos"
            className="flex flex-row justify-center items-center p-[5px]"
          >
            <div className="flex flex-row justify-center items-center gap-[10px] p-1 rounded-[99px]">
              {/* Arrow Icon */}
              <div className="w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.25 6.75L4.75 12L10.25 17.25" stroke="#1F2021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.25 12H5" stroke="#1F2021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-shark">
                Voltar
              </span>
            </div>
          </Link>
        </div>
        
        {/* Cards Grid Container */}
        <div className="w-[1320px] flex flex-col justify-center items-center gap-10">
          {/* Cards Grid - 2x2 Layout (always visible) */}
          <div className={`relative w-[1320px] ${isExpanded ? 'h-[1469.22px]' : 'h-[975.72px]'} transition-all duration-500`}>
            {/* Row 1 */}
            <div className="absolute left-0 top-0">
              <CerimonialCard {...cards[0]} />
            </div>
            <div className="absolute left-[670px] top-0">
              <CerimonialCard {...cards[1]} />
            </div>
            
            {/* Row 2 */}
            <div className="absolute left-0 top-[493.5px]">
              <CerimonialCard {...cards[2]} />
            </div>
            <div className="absolute left-[670px] top-[493.5px]">
              <CerimonialCard {...cards[3]} />
            </div>

            {/* Row 3 - Extra cards (visible when expanded) */}
            {isExpanded && (
              <>
                <div className="absolute left-0 top-[987px]">
                  <CerimonialCard {...extraCards[0]} />
                </div>
                <div className="absolute left-[670px] top-[987px]">
                  <CerimonialCard {...extraCards[1]} />
                </div>
              </>
            )}
          </div>
          
          {/* Ver mais / Ver menos Button */}
          <div className="flex flex-col">
            <button 
              onClick={handleToggle}
              className="flex flex-row justify-center items-center bg-black rounded-[99px] py-2 px-5 cursor-pointer hover:bg-black/90 transition-colors"
            >
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-white">
                    {isExpanded ? 'Ver menos' : 'Veja mais'}
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCards
