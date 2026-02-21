import heroBg from '../assets/images/hero-bg-cerimonial.png'

const SectionHero = () => {
  return (
    <section className="w-full px-5 pt-5">
      <div 
        className="relative w-full max-w-[1880px] h-[797px] mx-auto rounded-[40px] overflow-hidden flex flex-col items-center justify-center pb-[250px]"
      >
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 rounded-[40px]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40 rounded-[40px]" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full gap-5">
          {/* Text Container */}
          <div className="flex flex-col items-center gap-[10px]">
            {/* Heading */}
            <div className="flex flex-col w-[1080px]">
              <div className="flex flex-row justify-center gap-3">
                <div className="flex flex-row justify-center">
                  <h1 className="font-manrope font-normal text-[60px] leading-[1.2em] text-center text-white">
                    Cerimonial
                  </h1>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="flex flex-row justify-center">
            <p className="w-[580px] font-manrope font-normal text-[18px] leading-[1.5em] text-center text-white">
              Todas as etapas do evento serão coordenadas por nossa equipe de 
              cerimonial. Planejar, coordenar e supervisionar garante que tudo seja 
              executado com eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
