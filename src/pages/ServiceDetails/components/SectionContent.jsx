import { useState } from 'react'
import { Link } from 'react-router-dom'

const SectionContent = ({ 
  category, 
  title, 
  shortDescription, 
  inclusions, 
  fullDescription,
  galleryImages,
  ctaText,
  ctaLink,
  backLink 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Navegar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev < galleryImages.length - 1 ? prev + 1 : 0
    )
  }

  // Navegar para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev > 0 ? prev - 1 : galleryImages.length - 1
    )
  }

  return (
    <section className="relative w-full pt-[150px] pb-[100px] px-[100px] rounded-b-[60px]">
      {/* Container Medium */}
      <div className="w-full max-w-[1320px] mx-auto flex flex-col justify-center items-center">
        {/* Wrapper Branco */}
        <div className="w-[800px] bg-white rounded-[24px] p-6 flex flex-col items-center gap-10">
          
          {/* Row: Voltar Button */}
          <div className="w-full flex flex-row items-center gap-[351.95px]">
            <Link 
              to={backLink}
              className="flex flex-row justify-center items-center p-[5px] rounded-[99px]"
            >
              <div className="flex flex-row justify-center items-center gap-[10px] p-1 rounded-[99px]">
                {/* Arrow Icon */}
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M19 12H5M5 12L12 19M5 12L12 5" 
                    stroke="#000000" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Text */}
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-shark">
                      Voltar
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col gap-[10px]">
            {/* Category Badge */}
            <div className="flex flex-row items-center gap-[10px]">
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <span className="font-manrope font-normal text-[18px] leading-[1.5em] text-center text-shark">
                    {category}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex flex-col">
              <h1 className="font-manrope font-normal text-[60px] leading-[1.2em] text-left text-shark">
                {title}
              </h1>
            </div>

            {/* Short Description */}
            <div className="flex flex-col w-[399px]">
              <p className="w-[379px] font-manrope font-normal text-[18px] leading-[1.5em] text-left text-dove-gray whitespace-pre-line">
                {shortDescription}
              </p>
            </div>

            {/* Inclusions List */}
            <div className="flex flex-col w-[399px]">
              <div className="w-[379px] font-manrope font-normal text-[18px] leading-[1.5em] text-left text-dove-gray">
                <p className="font-medium">O QUE ESTÁ INCLUSO:</p>
                {inclusions.map((item, index) => (
                  <p key={index}> {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-end">
            <Link 
              to={ctaLink}
              className="flex flex-row justify-end items-center bg-black rounded-[99px] py-2 px-5"
            >
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-center text-white">
                    {ctaText}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Gallery Section */}
          <div className="w-full flex flex-col justify-center">
            <div className="relative w-full h-[398.05px]">
              {/* Gallery Container */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                {/* Images List */}
                <div 
                  className="flex flex-row gap-[10px] h-full transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 762}px)`
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[752px] h-full rounded-[24px] overflow-hidden"
                    >
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center gap-[10px] py-4">
                {/* Previous Button */}
                <button 
                  onClick={prevSlide}
                  className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white/35 hover:bg-white/50 transition-colors"
                >
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5H1M1 5L5 1M1 5L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex flex-row gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-white' : 'bg-white/35'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button 
                  onClick={nextSlide}
                  className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white/35 hover:bg-white/50 transition-colors"
                >
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H14M14 5L10 1M14 5L10 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Full Description Article */}
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col">
                <p className="font-manrope font-normal text-[18px] leading-[1.5em] text-left text-dove-gray whitespace-pre-line">
                  {fullDescription}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SectionContent
