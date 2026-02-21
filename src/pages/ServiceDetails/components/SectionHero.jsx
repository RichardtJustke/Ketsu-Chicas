const SectionHero = ({ heroImage }) => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-[581.81px]"
      style={{
        filter: 'blur(0px)'
      }}
    >
      <img 
        src={heroImage} 
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default SectionHero
