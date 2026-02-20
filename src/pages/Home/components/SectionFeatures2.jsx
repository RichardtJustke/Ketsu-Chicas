import sectionFeatures2Hotel from '../assets/images/section-features-2-hotel.png'

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-[18px] p-4 flex flex-col gap-2">
    <div className="w-[18px] h-[18px]">{icon}</div>
    <span className="font-manrope font-medium text-[13.5px] text-shark">{title}</span>
    <p className="font-manrope text-[12px] leading-[1.5] text-dove-gray">{description}</p>
  </div>
)

const SectionFeatures2 = () => {
  const services = [
    {
      icon: <svg viewBox="0 0 18 18" fill="none"><rect x="3.56" y="3.56" width="10.88" height="10.88" rx="2" stroke="#1F2021" strokeWidth="1.5"/><line x1="3.94" y1="6.94" x2="14.44" y2="6.94" stroke="#1F2021" strokeWidth="1.5"/><line x1="3.94" y1="11.06" x2="14.44" y2="11.06" stroke="#1F2021" strokeWidth="1.5"/></svg>,
      title: 'Buffet completo',
      description: 'Cardápios personalizados com coquetel, coffee break, brunch e refeição completa'
    },
    {
      icon: <svg viewBox="0 0 18 18" fill="none"><rect x="3" y="4" width="12" height="10" rx="2" stroke="#1F2021" strokeWidth="1.5"/><circle cx="9" cy="9" r="2.5" stroke="#1F2021" strokeWidth="1.5"/></svg>,
      title: 'Captação audiovisual',
      description: 'Foto, vídeo, cobertura social e drone com qualidade profissional'
    },
    {
      icon: <svg viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="#1F2021" strokeWidth="1.5"/><path d="M3 15C3 12.2386 5.68629 10 9 10C12.3137 10 15 12.2386 15 15" stroke="#1F2021" strokeWidth="1.5"/></svg>,
      title: 'Equipe Operacional',
      description: 'Profissionais capacitados para recepção, segurança e garçom'
    },
    {
      icon: <svg viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="12" height="12" rx="2" stroke="#1F2021" strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke="#1F2021" strokeWidth="1.5"/></svg>,
      title: 'Organização cerimonial',
      description: 'Planejamento detalhado e execução coordenada'
    }
  ]

  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-2 gap-[40px]">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">
            Realizar seu evento com a Chicas é simples e rápido
          </h2>
          
          <div className="flex flex-col gap-4">
            <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
              <strong className="text-shark">Receba seu orçamento personalizado</strong><br />
              Montamos uma proposta sob medida alinhada ao propósito do seu evento, com transparência nos valores e prazo definido
            </p>
            <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
              <strong className="text-shark">Confirme e relaxe</strong><br />
              Após a confirmação, cuidamos de tudo: execução, coordenação e acompanhamento total — inclusive no pós-evento.
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div 
          className="w-full h-[649px] rounded-[40px]"
          style={{
            backgroundImage: `url(${sectionFeatures2Hotel})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </section>
  )
}

export default SectionFeatures2
