const valuesData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="2" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="9.25" x2="19.25" y2="9.25" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="14.75" x2="19.25" y2="14.75" stroke="#1F2021" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Excelência',
    description: 'Buscamos alto padrão em cada detalhe — do atendimento à execução final.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="2" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="9.25" x2="19.25" y2="9.25" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="14.75" x2="19.25" y2="14.75" stroke="#1F2021" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Responsabilidade',
    description: 'Cumprimos prazos, acordos e expectativas com seriedade e transparência.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="2" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="9.25" x2="19.25" y2="9.25" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="14.75" x2="19.25" y2="14.75" stroke="#1F2021" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Planejamento',
    description: 'Nada é improvisado. Cada evento nasce de uma estratégia clara e bem estruturada.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="2" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="9.25" x2="19.25" y2="9.25" stroke="#1F2021" strokeWidth="1.5"/>
        <line x1="5.25" y1="14.75" x2="19.25" y2="14.75" stroke="#1F2021" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Personalização',
    description: 'Projetos pensados sob medida, respeitando o perfil, o objetivo e a essência de cada cliente.'
  }
]

const SectionValues = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark text-center">
            O que guia cada projeto
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray text-center max-w-[500px]">
            Princípios que sustentam nosso trabalho e garantem resultados consistentes.
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-2 gap-5">
          {valuesData.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-[24px] p-6 flex flex-col gap-3"
            >
              {/* Ícone */}
              <div className="w-6 h-6">
                {value.icon}
              </div>
              
              {/* Título */}
              <h3 className="font-manrope font-medium text-[18px] leading-[1.5] text-shark">
                {value.title}
              </h3>
              
              {/* Descrição */}
              <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionValues