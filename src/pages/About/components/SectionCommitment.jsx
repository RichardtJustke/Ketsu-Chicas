import compromissoImg from '../assets/images/compromisso-img.png'

const SectionCommitment = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] grid grid-cols-2 gap-[40px] items-center">
        {/* Imagem à esquerda */}
        <div 
          className="w-full h-[347px] rounded-[46px]"
          style={{
            backgroundImage: `url(${compromissoImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Texto à direita */}
        <div className="flex flex-col gap-4">
          <h2 className="font-manrope text-[48px] leading-[1.3] text-shark">
            Mais do que eventos. Compromisso
          </h2>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Cada evento é único — e é assim que tratamos cada cliente. Atuamos com escuta ativa, planejamento estratégico e execução cuidadosa, garantindo tranquilidade antes, durante e depois do evento.
          </p>
          <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray">
            Da concepção à finalização, nossa equipe acompanha cada etapa com responsabilidade, criatividade e respeito ao propósito de quem confia na Chicas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionCommitment