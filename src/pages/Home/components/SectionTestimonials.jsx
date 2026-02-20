import henki from '../assets/images/testimonial-henki.png'
import leopas from '../assets/images/testimonial-leopas.png'
import wedly from '../assets/images/testimonial-wedly.png'
import bineme from '../assets/images/testimonial-bineme.png'

const testimonials = [
  {
    id: 1,
    quote: '"A equipe foi sensacional! Todos os convidados saíram falando da estrutura impecável que montaram no nosso aniversário de empresa. Recomendo demais!"',
    name: 'Henki Sevas',
    role: '@Ceo Faunder',
    avatar: henki,
  },
  {
    id: 2,
    quote: '"Fizemos nosso lançamento de produto com eles e foi perfeito. O audiovisual funcionou sem nenhum problema e o buffet estava maravilhoso. Foi um sucesso!"',
    name: 'Leopas Kensy',
    role: '@Ceo Faunder',
    avatar: leopas,
  },
  {
    id: 3,
    quote: '"Nosso workshop anual nunca foi tão bem organizado. Cada detalhe foi pensado com carinho e profissionalismo. Já fechamos para o próximo ano!"',
    name: 'Wedly Licsa',
    role: '@Ceo Faunder',
    avatar: wedly,
  },
  {
    id: 4,
    quote: '"Confiança é tudo quando se trata de evento. Com a Chicas, sei que não vou ter surpresas desagradáveis. Já trabalhei com eles em vários projetos."',
    name: 'Bineme Kiry',
    role: '@Ceo Faunder',
    avatar: bineme,
  }
]

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col gap-4 p-8 rounded-[30px] border border-dove-gray/30 bg-white">
    {/* Stars */}
    <div className="flex gap-1">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FF7926">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ))}
    </div>
    
    {/* Quote */}
    <p className="font-manrope text-[20px] leading-[1.6] text-shark">
      {testimonial.quote}
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-3 pt-2">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-manrope font-medium text-[18px] text-shark">{testimonial.name}</span>
        <span className="font-manrope text-[16px] text-dove-gray">{testimonial.role}</span>
      </div>
    </div>
  </div>
)

const SectionTestimonials = () => {
  return (
    <section className="w-full flex justify-center py-[100px] bg-wild-sand">
      <div className="w-[1320px] flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 py-2 px-4 rounded-full border border-dove-gray w-fit">
            <span className="font-manrope font-medium text-[14px] uppercase tracking-wider text-shark">
              depoimentos
            </span>
          </div>
          <h2 className="font-manrope font-medium text-[48px] leading-[1.1] text-shark max-w-[543px]">
            Veja o que falam sobre nós
          </h2>
        </div>
        
        {/* Testimonials Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials
