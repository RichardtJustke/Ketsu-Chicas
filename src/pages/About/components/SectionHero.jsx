import heroBg from '../assets/images/hero-bg-sobre.png'

const SectionHero = () => {
  return (
    <section className="w-full p-5">
      <div 
        className="w-full h-[1160px] rounded-[40px] flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-[20px] max-w-[1518px] px-[100px]">
          {/* Heading */}
          <div className="w-[1080px] text-center">
            <h1 className="font-manrope font-normal text-[60px] leading-[1.2em] text-white">
              Eventos que marcam. Experiências que ficam.
            </h1>
          </div>
          
          {/* Subtítulo */}
          <p className="font-manrope font-normal text-[18px] leading-[1.5em] text-white text-center max-w-[800px]">
            Há mais de 3 anos transformando sonhos em eventos impecáveis — do planejamento à execução, com sensibilidade, técnica e excelência.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionHero