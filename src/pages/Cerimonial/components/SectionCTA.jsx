import { useState } from 'react'
import ctaBg from '../assets/images/cta-bg-cerimonial.png'

const SectionCTA = () => {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Phone submitted:', phone)
  }

  return (
    <section className="relative w-full py-[100px] px-[100px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-10">
        {/* Text */}
        <div className="flex flex-col justify-center items-center gap-[9px]">
          {/* Heading */}
          <div className="flex flex-col w-[700px] pb-[0.99px]">
            <h2 className="font-manrope font-normal text-[48px] leading-[1.3em] text-center text-white">
              Entre em contato agora
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="flex flex-col items-center w-[500px]">
            <p className="font-manrope font-normal text-[18px] leading-[1.5em] text-center text-white">
              Fale com nossa equipe agora e receba uma proposta personalizada alinhada às suas necessidades e objetivos
            </p>
          </div>
        </div>
        
        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="relative flex flex-row justify-center items-center gap-[10px] w-[500px] bg-white rounded-[99px] p-1"
        >
          {/* Input Container */}
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col rounded-[99px]">
              <div className="flex flex-row items-stretch py-[11px] px-3 pb-[11.19px]">
                <input
                  type="tel"
                  placeholder="Digite seu telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full font-onest font-normal text-[16px] leading-[1.275em] text-left text-dove-gray placeholder:text-dove-gray bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex flex-col">
            <button 
              type="submit"
              className="flex flex-row justify-center items-center bg-crusta rounded-[999px] py-[10px] px-6"
            >
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-manrope font-normal text-[14px] leading-[1.5em] tracking-[0.04em] text-white">
                    Enviar 
                  </span>
                </div>
              </div>
            </button>
          </div>
          
          {/* Border */}
          <div className="absolute inset-0 rounded-[99px] border border-wild-sand pointer-events-none" />
        </form>
        
        {/* Empty text container */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center w-[500px]">
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCTA
