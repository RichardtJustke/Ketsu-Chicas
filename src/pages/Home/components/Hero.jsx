import heroBg from '../assets/images/hero-bg.png'

const Hero = () => {
  return (
    <section className="w-full p-5">
      <div 
        className="w-full h-[1160px] rounded-[40px] relative overflow-hidden flex flex-col justify-end items-center pb-[100px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="font-manrope text-[18px] text-white/80">Chicas Eventos</span>
          
          <h1 className="font-manrope text-[60px] leading-[1.2] text-white max-w-[800px]">
            Eventos extraordinários começam aqui.
          </h1>
          
          <p className="font-manrope text-[18px] leading-[1.5] text-white/80 max-w-[411px]">
            Planejamento preciso. Equipe alinhada. Execução impecável para eventos sociais e corporativos.
          </p>
          
          <button className="mt-4 py-2 px-5 bg-crusta rounded-full font-manrope text-[16px] text-white hover:bg-crusta/90 transition-colors">
            Planejar meu evento
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
