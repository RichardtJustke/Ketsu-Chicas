import { Link } from 'react-router-dom'
import cardCoquetel from '../assets/images/card-coquetel.png'
import cardCoffeeBreak from '../assets/images/card-coffee-break.png'
import cardBrunch from '../assets/images/card-brunch.png'

const cards = [
  {
    id: 1,
    title: 'Coquetel',
    badge: 'New',
    image: cardCoquetel,
    link: '/servicos/detalhes/buffet-coquetel'
  },
  {
    id: 2,
    title: 'Coffee Break',
    badge: 'Popular',
    image: cardCoffeeBreak,
    link: '/servicos/detalhes/buffet-coffee-break'
  },
  {
    id: 3,
    title: 'Brunch',
    badge: 'New',
    image: cardBrunch,
    link: '/servicos/detalhes/buffet-brunch'
  }
]

const BuffetCard = ({ title, badge, image, link }) => {
  return (
    <div className="flex flex-col bg-white rounded-[24px] p-2 w-[426.66px]">
      <div className="flex flex-col gap-[9.99px]">
        {/* Thumbnail */}
        <div className="w-full h-[262.63px] rounded-[24px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center p-[14px]">
          <div className="flex flex-row justify-start items-center gap-[10px]">
            {/* Title */}
            <div className="flex-1">
              <h3 className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-shark">
                {title}
              </h3>
            </div>
            
            {/* Badge */}
            <div className="flex flex-row justify-center items-center gap-[10px] bg-wild-sand rounded-[99px] py-1 px-[13px]">
              <div className="w-[7px] h-[7px]">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#707070"/>
                </svg>
              </div>
              <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-dove-gray">
                {badge}
              </span>
              <div className="w-[7px] h-[7px]">
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#707070"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Button */}
      <Link 
        to={link}
        className="flex flex-row justify-center items-center gap-[10px] bg-crusta rounded-[999px] py-[10px] px-6 self-start ml-2 mb-2"
      >
        <span className="font-manrope font-normal text-[14px] leading-[1.5em] tracking-[0.04em] text-white">
          Saiba mais 
        </span>
      </Link>
    </div>
  )
}

const SectionCards = () => {
  return (
    <section className="w-full py-[100px] px-[100px]">
      <div className="w-full max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-10">
        {/* Cards Grid */}
        <div className="flex flex-row justify-center gap-5">
          {cards.map((card) => (
            <BuffetCard key={card.id} {...card} />
          ))}
        </div>
        
        {/* Ver pacotes Button */}
        <div className="flex flex-col">
          <Link 
            to="/servicos/buffet/pacotes"
            className="flex flex-row justify-center items-center bg-black rounded-[99px] py-2 px-5"
          >
            <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-white">
              Ver pacotes
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionCards
