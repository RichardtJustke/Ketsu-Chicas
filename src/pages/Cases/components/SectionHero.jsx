import heroBgCases from '../assets/images/hero-bg-cases.png'

const SectionHero = () => {
  return (
    <section className="w-full h-[1200px] flex flex-col justify-stretch items-stretch p-5">
      {/* Background Container with Image */}
      <div className="relative w-full h-full flex justify-center items-center rounded-[40px] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 79%), url(${heroBgCases})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center py-[250px] px-[100px]">
          {/* Text Container */}
          <div className="flex flex-col justify-center items-center gap-[10px] w-full">
            <div className="flex flex-col w-[1080px]">
              <div className="flex justify-center w-full gap-3">
                <div className="flex justify-center w-[936px]">
                  <h1 className="font-manrope font-normal text-[60px] leading-[1.2em] text-center text-white w-[763px]">
                    Inspire-se e conheça a qualidade de alguns dos projetos já executados.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
