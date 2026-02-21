import { Link } from 'react-router-dom'

const SectionRelated = ({ relatedSection, relatedServices }) => {
  return (
    <section className="w-full py-[100px] px-[100px]">
      <div className="relative w-full max-w-[1320px] h-[617.27px] mx-auto">
        {/* Header Section */}
        <div className="absolute top-[-1px] left-0 w-full flex flex-col justify-center items-center gap-[9.99px]">
          {/* Title */}
          <div className="flex flex-col items-center px-[43.37px]">
            <h2 className="font-manrope font-normal text-[48px] leading-[1.3em] text-center text-shark">
              {relatedSection.title} 
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="flex flex-col items-center w-[500px]">
            <span className="font-manrope font-normal text-[18px] leading-[1.5em] text-center text-dove-gray">
              {relatedSection.subtitle} 
            </span>
          </div>
        </div>

        {/* Cards Container */}
        <div 
          className="absolute top-[142.9px] left-0 w-full flex flex-row gap-5"
        >
          {relatedServices.map((service) => (
            <div 
              key={service.id}
              className="flex-1 flex flex-row items-center"
            >
              <div className="w-[650px]">
                {/* Card */}
                <div className="relative w-full bg-white rounded-[30px] p-2">
                  {/* Card Content */}
                  <div className="flex flex-col gap-[10px]">
                    {/* Wrapper */}
                    <div className="flex flex-row rounded-[30px]">
                      {/* Thumbnail */}
                      <div className="flex-1 h-[341.86px] relative">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                        />
                      </div>
                    </div>
                    
                    {/* Content / Text */}
                    <div className="flex flex-col gap-[10px] p-[14px]">
                      {/* Row 1: Title + Button */}
                      <div className="flex flex-row justify-center items-center gap-[10px]">
                        {/* Title */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex flex-col">
                            <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-shark">
                              {service.title}
                            </span>
                          </div>
                        </div>
                        
                        {/* Saiba mais Button */}
                        <Link 
                          to={service.link}
                          className="flex flex-row justify-center items-center bg-crusta rounded-[999px] py-[10px] px-6"
                        >
                          <div className="flex flex-col">
                            <div className="flex flex-col">
                              <span className="font-manrope font-normal text-[14px] leading-[1.5em] tracking-[0.04em] text-white">
                                Saiba mais 
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      
                      {/* Row 2: Description */}
                      <div className="flex flex-row gap-[10px]">
                        <div className="flex-1 flex flex-row gap-[10px]">
                          <div className="flex-1 flex flex-col">
                            <span className="font-manrope font-normal text-[16px] leading-[1.5em] text-left text-dove-gray">
                              {service.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-[30px] border-[3px] border-white pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionRelated
