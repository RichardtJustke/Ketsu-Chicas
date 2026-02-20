import casesGrid from '../assets/images/cases-grid.svg'

const CasesGrid = () => {
  return (
    <section className="w-full flex justify-center items-center py-[109px]">
      <div className="w-[1174px] flex flex-col gap-[77px]">
        <img 
          src={casesGrid} 
          alt="Cases da Chicas Eventos" 
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}

export default CasesGrid
