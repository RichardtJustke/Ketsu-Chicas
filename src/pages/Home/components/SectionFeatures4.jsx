const cards = [
  {
    title: 'Solução integrada e completa',
    description: 'Você não precisa gerenciar múltiplos fornecedores — buffet, audiovisual, equipe e cerimonial, tudo em um único parceiro de confiança'
  },
  {
    title: 'Agilidade com personalização',
    description: 'Processos otimizados e equipe proativa que responde rápido sem perder o olhar atento aos seus desejos'
  },
  {
    title: 'Identidade amazônica autêntica',
    description: 'Levamos a riqueza e autenticidade da cultura amazônica para cada evento, criando experiências únicas'
  },
  {
    title: 'Acompanhamento além do evento',
    description: 'Nosso compromisso vai além do dia da celebração — estamos presentes no planejamento, execução e pós-evento'
  }
]

const SectionFeatures4 = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center max-w-[700px]">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">Por que escolher a Chicas Eventos?</h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray mt-2">
            Transformamos encontros em memórias inesquecíveis com profissionalismo e identidade regional
          </p>
        </div>
        
        {/* Cards Grid 2x2 */}
        <div className="grid grid-cols-2 gap-5 w-full max-w-[900px]">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-[24px] p-6 flex flex-col gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1F2021" strokeWidth="1.5"/>
              </svg>
              <h3 className="font-manrope font-medium text-[18px] text-shark">{card.title}</h3>
              <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures4
