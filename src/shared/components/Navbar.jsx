import logoNavbar from '../../pages/Home/assets/images/logo-navbar.png'

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-[30px]">
      <nav className="w-[700px] h-[55px] flex items-center justify-between pl-[25px] pr-[10px] bg-white rounded-[99px]">
        {/* Logo */}
        <img 
          src={logoNavbar} 
          alt="Chicas Eventos" 
          className="w-[105px] h-[35px] object-contain"
        />
        
        {/* Nav Links */}
        <ul className="flex items-center gap-[2px]">
          {['Home', 'Serviços', 'Cases', 'Sobre'].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="block py-[4px] px-[10px] font-manrope text-[16px] leading-[1.5] text-dove-gray hover:text-shark transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <button className="py-[8px] px-[20px] bg-crusta rounded-[99px] font-manrope text-[16px] leading-[1.5] text-white hover:bg-crusta/90 transition-colors">
          Fazer orçamento
        </button>
      </nav>
    </header>
  )
}

export default Navbar
