import experienciaImg from '../assets/images/experiencia-img.png'

const experienceCards = [
  { title: 'Planejamento estratégico', description: 'Meticulously crafted with top-tier materials for unmatched quality.' },
  { title: 'Equipe especializada', description: 'Meticulously crafted with top-tier materials for unmatched quality.' },
  { title: 'Gestão completa do evento', description: 'Meticulously crafted with top-tier materials for unmatched quality.' },
  { title: 'Execução sem imprevistos', description: 'Meticulously crafted with top-tier materials for unmatched quality.' }
]

const SectionExperience = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-2 gap-[40px] items-start">
        {/* Imagem à esquerda */}
        <div 
          className="w-full h-[500px] rounded-[46px]"
          style={{
            backgroundImage: `url(${experienciaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Conteúdo à direita */}
        <div className="flex flex-col gap-6">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">
            Experiência que se traduz em confiança
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Ao longo da nossa trajetória, aprendemos que um evento bem-sucedido é resultado de organização, comunicação clara e decisões assertivas. Por isso, trabalhamos com processos definidos, fornecedores homologados e uma equipe preparada para qualquer cenário.
          </p>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Nosso compromisso é simples: entregar exatamente o que foi prometido — e, sempre que possível, surpreender positivamente.
          </p>
          
          {/* Cards 2x2 */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {experienceCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-[18px] p-4 flex flex-col gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3.56" y="3.56" width="10.88" height="10.88" rx="2" stroke="#1F2021" strokeWidth="1.12"/>
                  <line x1="3.94" y1="6.94" x2="14.44" y2="6.94" stroke="#1F2021" strokeWidth="1.12"/>
                  <line x1="3.94" y1="11.06" x2="14.44" y2="11.06" stroke="#1F2021" strokeWidth="1.12"/>
                </svg>
                <h3 className="font-manrope font-medium text-[14px] leading-[1.5] text-shark">
                  {card.title}
                </h3>
                <p className="font-manrope text-[13px] leading-[1.5] text-dove-gray">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionExperience