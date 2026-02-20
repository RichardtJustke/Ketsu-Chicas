import testimonialImg1 from '../assets/images/testimonial-img1.png'
import testimonialImg2 from '../assets/images/testimonial-img2.png'
import testimonialAvatar from '../assets/images/testimonial-avatar.png'
import slideshowImg1 from '../assets/images/slideshow-img1.png'
import slideshowImg3 from '../assets/images/slideshow-img3.png'
import slideshowImg4 from '../assets/images/slideshow-img4.png'

const SectionIntroduce = () => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col items-center gap-10">
        {/* Testimonial Block */}
        <div className="flex flex-col items-center gap-4 text-center px-6 py-5">
          {/* Avatar Images */}
          <div className="flex items-center -space-x-2">
            <div className="w-[80px] h-[80px] rounded-[20px] overflow-hidden border-4 border-white">
              <img src={testimonialImg1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[80px] h-[80px] rounded-[20px] overflow-hidden border-4 border-white">
              <img src={testimonialImg2} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Stars */}
          <div className="flex gap-2">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FF7926">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            ))}
          </div>
          
          {/* Quote */}
          <p className="font-manrope text-[32px] leading-[1.4] text-shark max-w-[900px]">
            Confiança é tudo quando se trata de evento. Com a Chicas, sei que não vou ter surpresas desagradáveis. Já trabalhei com eles em vários projetos e sempre com a mesma qualidade e comprometimento
          </p>
          
          {/* Author */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={testimonialAvatar} alt="" className="w-full h-full object-cover" />
            </div>
            <span className="font-manrope font-medium text-[18px] text-shark">Minedly Licsa</span>
            <span className="font-manrope text-[16px] text-dove-gray">@Ceo Faunder</span>
          </div>
        </div>
        
        {/* Slideshow */}
        <div className="w-full flex justify-center items-center gap-5 overflow-hidden">
          <div 
            className="w-[350px] h-[250px] rounded-[40px] flex-shrink-0"
            style={{ backgroundImage: `url(${slideshowImg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div 
            className="w-[500px] h-[380px] rounded-[40px] flex-shrink-0"
            style={{ backgroundImage: `url(${slideshowImg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div 
            className="w-[350px] h-[250px] rounded-[40px] flex-shrink-0"
            style={{ backgroundImage: `url(${slideshowImg4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionIntroduce
