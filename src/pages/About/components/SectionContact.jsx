import { useState } from 'react'

const SectionContact = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implementar lógica de envio
    console.log('Email enviado:', email)
  }

  return (
    <section className="w-full flex justify-center py-[100px] bg-shark">
      <div className="w-[1320px] flex flex-col items-center gap-10">
        {/* Título e subtítulo */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-white text-center">
            Entre em contato agora
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-white/70 text-center max-w-[500px]">
            Deixe seu e-mail e entraremos em contato para começar a planejar seu evento
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="w-[400px] py-3 px-5 bg-white rounded-full font-manrope text-[16px] leading-[1.5] text-shark placeholder:text-dove-gray outline-none focus:ring-2 focus:ring-crusta"
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-crusta rounded-full font-manrope text-[16px] text-white hover:bg-crusta/90 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default SectionContact