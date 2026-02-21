import { Link } from 'react-router-dom'
import garconsImg from '../assets/images/garcons.png'
import recepcionistasImg from '../assets/images/recepcionistas-48cb55.png'
import segurancasImg from '../assets/images/segurancas.png'

const cards = [
  {
    id: 1,
    title: 'Garçons',
    image: garconsImg,
  },
  {
    id: 2,
    title: 'Recepcionistas',
    image: recepcionistasImg,
  },
  {
    id: 3,
    title: 'Seguranças',
    image: segurancasImg,
  },
]

const SectionCards = () => {
  return (
    <section className="w-full py-[100px] px-[100px]">
      <div className="max-w-[1304px] mx-auto flex flex-col items-center gap-10">
        {/* Header Row with Back Button */}
        <div className="w-full flex flex-row items-center gap-[351.95px]">
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
          {/* Cards Row */}
          <div className="flex flex-row justify-center gap-5">
            {cards.map((card) => (
              <div 
                key={card.id}
                className="relative w-[426.66px] bg-white rounded-[24px] p-2"
              >
                {/* Card Content */}
                <div className="flex flex-col gap-[9.99px]">
                  {/* Wrapper */}
                  <div className="flex flex-row rounded-[24px]">
                    {/* Thumbnail */}
                    <div className="flex-1 h-[262.63px] relative">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
                      />
                    </div>
                  </div>
                  
                  {/* Content / Text */}
                  <div className="flex flex-col justify-center p-[14px]">
                    <div className="flex flex-row gap-[10px]">
                      <div className="flex-1 flex flex-col">
                        <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-shark">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Border */}
                <div className="absolute inset-0 rounded-[24px] border-[3px] border-white pointer-events-none" />
              </div>
            ))}
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

export default SectionCards
