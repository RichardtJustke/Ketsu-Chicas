import heroBg from '../assets/images/hero-bg-buffet.png'

const SectionHero = () => {
  return (
    <section className="w-full px-5 pt-5">
      <div 
        className="relative w-full max-w-[1880px] h-[797px] mx-auto rounded-[40px] overflow-hidden flex flex-col items-center justify-end pb-[250px]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-[10px] px-[100px]">
          {/* Heading com blur */}
          <div className="flex flex-row justify-center gap-3">
            <div className="flex flex-row justify-center">
              <h1 className="font-manrope font-normal text-[60px] leading-[1.2em] text-center text-white">
                Buffet
              </h1>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="w-[476px] font-manrope font-normal text-[18px] leading-[1.5em] text-center text-white">
            Cardápios sob medida para cada ocasião: coquetéis, coffee break, brunch e refeições completas. Clique nos cartões para ver os detalhes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
