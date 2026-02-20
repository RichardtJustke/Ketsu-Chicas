const SectionTestimonials = () => {
  const testimonials = [
    {
      name: 'Andressa Klahold',
      text: 'Escolhi a Chicas Eventos para cuidar de todo o cerimonial do meu casamento e foi a melhor decisão que tomei! A equipe é extremamente profissional, atenciosa e dedicada. Eles cuidaram de cada detalhe com muito carinho, desde a organização até a execução no grande dia.'
    },
    {
      name: 'Douglas Brito',
      text: 'Fui convidado para um evento corporativo organizado pela Chicas Eventos e fiquei impressionado com a qualidade do serviço. A decoração estava impecável, o atendimento foi excelente e tudo funcionou perfeitamente. Recomendo demais!'
    },
    {
      name: 'Mariana Costa',
      text: 'A Chicas Eventos transformou o aniversário da minha filha em um sonho realizado! A equipe entendeu exatamente o que queríamos e entregou muito além das expectativas. Profissionalismo e criatividade em cada detalhe.'
    }
  ]

  return (
    <section className="w-full flex justify-center py-[100px] bg-wild-sand">
      <div className="w-[1320px] flex flex-col gap-[60px]">
        {/* Título da seção */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark text-center">
            O que dizem sobre nós
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray text-center max-w-[550px]">
            Veja o que nossos clientes falam sobre a experiência de trabalhar com a Chicas Eventos
          </p>
        </div>

        {/* Cards de depoimentos */}
        <div className="grid grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex flex-col gap-5 p-8 bg-white rounded-[24px]"
            >
              {/* Aspas */}
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32V19.2C0 15.4667 0.666667 12.0667 2 9C3.33333 5.93333 5.2 3.33333 7.6 1.2L12.8 4.8C11.2 6.4 9.93333 8.26667 9 10.4C8.06667 12.5333 7.6 14.8 7.6 17.2H16V32H0ZM24 32V19.2C24 15.4667 24.6667 12.0667 26 9C27.3333 5.93333 29.2 3.33333 31.6 1.2L36.8 4.8C35.2 6.4 33.9333 8.26667 33 10.4C32.0667 12.5333 31.6 14.8 31.6 17.2H40V32H24Z" fill="#C97E2B"/>
              </svg>
              
              {/* Texto do depoimento */}
              <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
                {testimonial.text}
              </p>
              
              {/* Nome do cliente */}
              <p className="font-manrope font-medium text-[18px] leading-[1.5] text-shark">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials