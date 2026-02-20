import ctaSlideshowImg from '../assets/images/cta-slideshow-img.png'
import { Link } from 'react-router-dom'

const SectionCTA = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="relative w-[1320px] h-[400px]">
        {/* Container com gradiente */}
        <div className="absolute inset-0 rounded-[40px] overflow-hidden">
          {/* Imagem de fundo */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${ctaSlideshowImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>
        
        {/* Conteúdo centralizado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-white text-center max-w-[800px]">
            Vamos planejar seu próximo evento?
          </h2>
          
          <p className="font-manrope text-[18px] leading-[1.5] text-white/80 text-center max-w-[500px]">
            Conte com uma equipe que entende de eventos, pessoas e experiências. Estamos prontos para transformar sua ideia em realidade.
          </p>
          
          <Link 
            to="/contato"
            className="py-2 px-5 bg-crusta rounded-full font-manrope text-[16px] text-white hover:bg-crusta/90 transition-colors"
          >
            Falar com a Chicas
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionCTA