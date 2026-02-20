import ctaBg from '../assets/images/cta-bg.png'

const SectionCTA = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div 
        className="w-[1320px] h-[500px] relative flex items-center px-20 rounded-[40px] overflow-hidden"
        style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-10 max-w-[600px]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/50 w-fit">
              <span className="font-manrope font-medium text-[14px] uppercase tracking-wider text-white">contato</span>
            </div>
            <h2 className="font-manrope font-medium text-[48px] leading-[1.1] text-white">
              Vamos conversar sobre seu evento?
            </h2>
            <p className="font-manrope text-[18px] leading-[1.6] text-white/80">
              Deixe seu telefone que nossa equipe entra em contato para entender suas necessidades e criar uma proposta personalizada.
            </p>
          </div>
          
          {/* Form */}
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-3 py-4 px-6 rounded-full bg-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C19.93 21.1 17.74 21 16.5 20.5C13.5 19.22 10.7 17.3 8.5 14.5C6.8 12.18 5.38 9.5 4.5 6.5C4 5.26 3.9 3.07 4.01 2C4.07 1.44 4.52 1 5.08 1H8.08C8.57 1 9.01 1.35 9.1 1.83L9.67 5.17C9.75 5.63 9.57 6.09 9.19 6.37L7.5 7.7C9.19 11.42 12.58 14.81 16.3 16.5L17.63 14.81C17.91 14.43 18.37 14.25 18.83 14.33L22.17 14.9C22.65 15 23 15.43 23 15.92Z"/>
              </svg>
              <input 
                type="tel"
                placeholder="(00) 00000-0000"
                className="flex-1 font-manrope text-[16px] text-shark placeholder:text-dove-gray outline-none bg-transparent"
              />
            </div>
            <button className="flex items-center gap-2 py-4 px-8 rounded-full bg-crusta hover:bg-crusta/90 transition-colors">
              <span className="font-manrope font-medium text-[16px] text-white">Enviar</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.16666 10H15.8333"/>
                <path d="M10 4.16666L15.8333 10L10 15.8333"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCTA
