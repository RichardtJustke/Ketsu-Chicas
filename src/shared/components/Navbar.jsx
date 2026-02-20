import { Link, useLocation } from 'react-router-dom'
import logoNavbar from '../../pages/Home/assets/images/logo-navbar.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Cases', path: '/cases' },
  { label: 'Sobre', path: '/sobre' },
]

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-[30px]">
      <nav className="w-[700px] h-[55px] flex items-center justify-between pl-[25px] pr-[10px] bg-white rounded-[99px]">
        {/* Logo */}
        <Link to="/">
          <img 
            src={logoNavbar} 
            alt="Chicas Eventos" 
            className="w-[105px] h-[35px] object-contain"
          />
        </Link>
        
        {/* Nav Links */}
        <ul className="flex items-center gap-[2px]">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`block py-[4px] px-[10px] font-manrope text-[16px] leading-[1.5] transition-colors ${
                  location.pathname === item.path 
                    ? 'text-shark font-medium' 
                    : 'text-dove-gray hover:text-shark'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <Link 
          to="/orcamento" 
          className="py-[8px] px-[20px] bg-crusta rounded-[99px] font-manrope text-[16px] leading-[1.5] text-white hover:bg-crusta/90 transition-colors"
        >
          Fazer orçamento
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
