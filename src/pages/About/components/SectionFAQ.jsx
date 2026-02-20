import { useState } from 'react'

const SectionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quais tipos de eventos a Chicas organiza?',
      answer: 'A Chicas Eventos organiza eventos corporativos, casamentos, aniversários, formaturas, confraternizações, lançamentos de produtos, eventos sociais e muito mais. Nossa equipe está preparada para atender qualquer tipo de evento, independente do tamanho ou complexidade.'
    },
    {
      question: 'Vocês atendem em quais regiões?',
      answer: 'Atendemos principalmente na região metropolitana, mas também realizamos eventos em outras cidades e estados. Entre em contato conosco para verificarmos a disponibilidade para sua localização.'
    },
    {
      question: 'Como funciona o processo de orçamento?',
      answer: 'O processo começa com uma conversa inicial para entendermos suas necessidades e expectativas. Após isso, elaboramos uma proposta personalizada detalhando todos os serviços, valores e condições. O orçamento é gratuito e sem compromisso.'
    },
    {
      question: 'Com quanto tempo de antecedência devo contratar?',
      answer: 'Recomendamos que o contato seja feito com pelo menos 3 a 6 meses de antecedência para eventos maiores, como casamentos. Para eventos menores, 1 a 2 meses pode ser suficiente. Porém, quanto antes você entrar em contato, maior a disponibilidade de datas e fornecedores.'
    },
    {
      question: 'Vocês oferecem serviços de decoração?',
      answer: 'Sim! Oferecemos serviços completos de decoração, incluindo ambientação, iluminação, arranjos florais, mobiliário e todos os elementos necessários para criar a atmosfera perfeita para seu evento.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col gap-[60px]">
        {/* Título da seção */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark text-center">
            Perguntas frequentes
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray text-center max-w-[550px]">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        {/* Acordeões */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="w-full border border-dove-gray/30 rounded-[24px] overflow-hidden"
            >
              {/* Header do acordeão */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-manrope font-medium text-[18px] leading-[1.5] text-shark text-left">
                  {faq.question}
                </span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9L12 15L18 9" stroke="#1F2021" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Conteúdo do acordeão */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionFAQ