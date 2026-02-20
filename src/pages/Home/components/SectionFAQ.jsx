import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Como escolher o buffet ideal para meu evento?',
    answer: 'Analisamos o perfil dos convidados, tipo de evento e orçamento disponível para sugerir o cardápio mais adequado. Oferecemos degustação prévia e trabalhamos com diferentes estilos gastronômicos.'
  },
  {
    id: 2,
    question: 'Qual o tamanho da equipe ideal para meu evento?',
    answer: 'O dimensionamento da equipe depende do número de convidados, tipo de serviço e complexidade do evento. Nossa consultoria avalia cada caso para garantir atendimento de qualidade.'
  },
  {
    id: 3,
    question: 'A Chicas Eventos atende no Pará inteiro?',
    answer: 'Sim! Atendemos em todo o estado do Pará, incluindo a capital Belém e cidades do interior. Nossa logística permite levar toda a estrutura necessária para qualquer localidade.'
  },
  {
    id: 4,
    question: 'Ainda estou com dúvida, o que faço?',
    answer: 'Entre em contato conosco pelo telefone ou WhatsApp! Nossa equipe está pronta para esclarecer todas as suas dúvidas e ajudar a planejar seu evento perfeito.'
  }
]

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="flex flex-col gap-4 p-6 rounded-[20px] border border-dove-gray/30 bg-white">
    <button className="w-full flex justify-between items-center" onClick={onToggle}>
      <span className="font-manrope font-medium text-[20px] text-shark text-left">{faq.question}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        <path d="M6 9L12 15L18 9" stroke="#1F2021" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    {isOpen && (
      <p className="font-manrope text-[18px] leading-[1.6] text-dove-gray">{faq.answer}</p>
    )}
  </div>
)

const SectionFAQ = () => {
  const [openId, setOpenId] = useState(1)
  
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-[400px_1fr] gap-[60px]">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 py-2 px-4 rounded-full border border-dove-gray w-fit">
            <span className="font-manrope font-medium text-[14px] uppercase tracking-wider text-shark">faq</span>
          </div>
          <h2 className="font-manrope font-medium text-[48px] leading-[1.1] text-shark">
            Ficou com alguma dúvida?
          </h2>
          <p className="font-manrope text-[18px] leading-[1.6] text-dove-gray">
            Confira as perguntas mais frequentes sobre nossos serviços. Se não encontrar o que precisa, entre em contato!
          </p>
        </div>
        
        {/* Right Column - FAQ Items */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionFAQ
