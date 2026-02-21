import { Link } from 'react-router-dom'
import fotografiaImg from '../assets/images/fotografia.png'
import videoImg from '../assets/images/video-78d2e8.png'
import droneImg from '../assets/images/drone-78d2e8.png'
import storymakerImg from '../assets/images/storymaker-241c91.png'

const cards = [
  {
    id: 1,
    title: 'Fotografia',
    description: 'Cobertura completa do evento',
    image: fotografiaImg,
  },
  {
    id: 2,
    title: 'Video',
    description: 'Filmagem e edição profissional',
    image: videoImg,
  },
  {
    id: 3,
    title: 'Drone',
    description: 'Imagens aéreas espetaculares',
    image: droneImg,
  },
  {
    id: 4,
    title: 'Storymaker',
    description: 'Conteúdo para redes sociais',
    image: storymakerImg,
  },
]

const SectionCards = () => {
  return (
    <section className="w-full py-[100px] px-[100px]">
      <div className="max-w-[1304px] mx-auto flex flex-col items-center gap-10">
        {/* Header Row with Back Button */}
        <div className="w-full flex flex-row items-center">
          {/* Back Link */}
          <Link 
            to="/servicos"
            className="flex flex-row justify-center items-center p-[5px] rounded-[99px]"
          >
            <div className="flex flex-row justify-center items-center gap-[10px] p-1 rounded-[99px]">
              {/* Arrow Icon */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M19 12H5M5 12L12 19M5 12L12 5" 
                  stroke="#1F2021" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Text */}
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-shark">
                    Voltar
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Cards Container */}
        <div className="w-full max-w-[1320px] flex flex-col justify-center items-center gap-10">
          {/* Cards Grid 2x2 */}
          <div className="relative w-full h-[975.72px]">
            {/* Row 1 */}
            <div className="absolute top-0 left-0 w-[650px]">
              <Card card={cards[0]} />
            </div>
            <div className="absolute top-0 left-[670px] w-[650px]">
              <Card card={cards[1]} />
            </div>
            
            {/* Row 2 */}
            <div className="absolute top-[493.5px] left-0 w-[650px]">
              <Card card={cards[2]} />
            </div>
            <div className="absolute top-[493.5px] left-[670px] w-[650px]">
              <Card card={cards[3]} />
            </div>
          </div>
          
          {/* Ver Pacotes Button */}
          <div className="flex flex-col">
            <Link 
              to="/servicos"
              className="flex flex-row justify-center items-center bg-black rounded-[99px] py-2 px-5"
            >
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-white">
                    Ver pacotes
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({ card }) => {
  return (
    <div className="relative w-full bg-white rounded-[30px] p-2">
      {/* Card Content */}
      <div className="flex flex-col gap-[10px]">
        {/* Wrapper */}
        <div className="flex flex-row rounded-[30px]">
          {/* Thumbnail */}
          <div className="flex-1 h-[341.86px] relative">
            <img 
              src={card.image} 
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
            />
          </div>
        </div>
        
        {/* Content / Text */}
        <div className="flex flex-col gap-[10px] p-[14px]">
          {/* Row 1: Title + Button */}
          <div className="flex flex-row justify-center items-center gap-[10px]">
            {/* Title */}
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col">
                <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-shark">
                  {card.title}
                </span>
              </div>
            </div>
            
            {/* Saiba mais Button */}
            <button className="flex flex-row justify-center items-center bg-crusta rounded-[999px] py-[10px] px-6">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-manrope font-normal text-[14px] leading-[1.5em] tracking-[0.04em] text-white">
                    Saiba mais 
                  </span>
                </div>
              </div>
            </button>
          </div>
          
          {/* Row 2: Description */}
          <div className="flex flex-row gap-[10px]">
            <div className="flex-1 flex flex-row gap-[10px]">
              <div className="flex-1 flex flex-col">
                <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-dove-gray">
                  {card.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Border */}
      <div className="absolute inset-0 rounded-[30px] border-[3px] border-white pointer-events-none" />
    </div>
  )
}

export default SectionCards
