import nossaHistoriaImg from '../assets/images/nossa-historia-img.png'

const SectionHistory = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-2 gap-[40px] items-center">
        {/* Texto à esquerda */}
        <div className="flex flex-col gap-4">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">
            Nossa História
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            A Chicas nasceu do cuidado com os detalhes e da paixão por criar experiências memoráveis. Ao longo dos anos, evoluímos junto com o mercado de eventos, ampliando nossa atuação, nossa estrutura e, principalmente, nossa visão.
          </p>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Mais do que organizar eventos, acreditamos em construir momentos únicos, alinhando estética, logística e emoção. Cada projeto carrega nossa assinatura: planejamento preciso, equipe preparada e entrega impecável.
          </p>
        </div>
        
        {/* Imagem à direita */}
        <div 
          className="w-full h-[347px] rounded-[46px]"
          style={{
            backgroundImage: `url(${nossaHistoriaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </section>
  )
}

export default SectionHistory