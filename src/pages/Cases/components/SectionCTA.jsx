import ctaBg from '../assets/images/cta-bg.png'

const SectionCTA = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-[100px] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-[1320px] flex flex-col items-center gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center w-full gap-[9px]">
          {/* Title Container */}
          <div className="flex flex-col w-[700px] pb-[0.99px]">
            <div className="flex flex-col items-center w-full">
              <h2 className="font-manrope font-normal text-[48px] leading-[1.3em] text-center text-white">
                Entre em contato agora
              </h2>
            </div>
          </div>
          
          {/* Subtitle Container */}
          <div className="flex flex-col items-center w-[500px]">
            <p className="font-manrope font-normal text-[18px] leading-[1.5em] text-center text-white">
              Fale com nossa equipe agora e receba uma proposta personalizada alinhada às suas necessidades e objetivos
            </p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="relative flex justify-center items-center w-[500px] gap-[10px] p-1 bg-white rounded-[99px]">
          {/* Input Container */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full rounded-[99px]">
              <div className="flex justify-stretch items-stretch w-full py-[11px] px-3">
                <div className="flex flex-col w-full">
                  <input 
                    type="tel" 
                    placeholder="Digite seu telefone"
                    className="w-full font-onest font-normal text-[16px] leading-[1.275em] text-dove-gray placeholder:text-dove-gray bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Button Container */}
          <div className="flex flex-col">
            <button className="flex justify-center items-center py-[10px] px-6 bg-crusta rounded-[999px] hover:bg-crusta/90 transition-colors">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-manrope font-normal text-[14px] leading-[1.5em] tracking-[0.043em] text-white whitespace-nowrap">
                    Enviar 
                  </span>
                </div>
              </div>
            </button>
          </div>
          
          {/* Border */}
          <div className="absolute inset-0 rounded-[99px] border border-wild-sand pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default SectionCTA
