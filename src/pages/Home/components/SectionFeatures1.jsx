import sectionFeaturesHotel from '../assets/images/section-features-hotel.png'

const SectionFeatures1 = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-2 gap-[40px] items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-4">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">
            Tudo o que você precisa para realizar o seu evento
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Do buffet ao audiovisual, a Chicas oferece soluções completas com personalização, agilidade e identidade amazônica.
          </p>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Transformamos cada evento em uma experiência exclusiva. Começamos com uma estrutura bem modesta — cozinha emprestada e cardápio enxuto — mas sempre primando pela qualidade. Crescemos por indicação, valorizando nossa comunidade local e levando a autenticidade da cultura amazônica para cada celebração.
          </p>
        </div>
        
        {/* Image */}
        <div 
          className="w-full h-[347px] rounded-[46px]"
          style={{
            backgroundImage: `url(${sectionFeaturesHotel})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </section>
  )
}

export default SectionFeatures1
