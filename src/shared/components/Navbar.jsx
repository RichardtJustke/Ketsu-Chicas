import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoNavbar from '../../pages/Home/assets/images/logo-navbar.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Cases', path: '/cases' },
  { label: 'Sobre', path: '/sobre' },
]

const servicosLinks = [
  { label: 'Buffet', path: '/servicos/buffet' },
  { label: 'Cerimonial', path: '/servicos/cerimonial' },
  { label: 'Equipe Operacional', path: '/servicos/equipe-operacional' },
  { label: 'Audiovisual', path: '/servicos/audiovisual' },
]

const Navbar = () => {
  const location = useLocation()
  const [isServicosOpen, setIsServicosOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Fecha o dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicosOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Verifica se está em uma página de serviços
  const isServicosActive = location.pathname.startsWith('/servicos')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="w-full max-w-[750px] h-14 flex items-center justify-between pl-6 pr-3 bg-white rounded-full shadow-lg shadow-black/5">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src={logoNavbar} 
            alt="Chicas Eventos" 
            className="w-[100px] h-8 object-contain"
          />
        </Link>
        
        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {/* Home */}
          <li>
            <Link 
              to="/"
              className={`block py-2 px-3 font-manrope text-[15px] leading-normal transition-colors rounded-full ${
                location.pathname === '/' 
                  ? 'text-shark font-medium' 
                  : 'text-dove-gray hover:text-shark hover:bg-alabaster'
              }`}
            >
              Home
            </Link>
          </li>

          {/* Serviços com Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicosOpen(!isServicosOpen)}
              className={`flex items-center gap-1 py-2 px-3 font-manrope text-[15px] leading-normal transition-colors rounded-full ${
                isServicosActive 
                  ? 'text-shark font-medium' 
                  : 'text-dove-gray hover:text-shark hover:bg-alabaster'
              }`}
            >
              Serviços
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isServicosOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-black/10 overflow-hidden transition-all duration-200 ${
                isServicosOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <ul className="py-2">
                {servicosLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsServicosOpen(false)}
                      className={`block py-2.5 px-4 font-manrope text-[14px] transition-colors ${
                        location.pathname === item.path
                          ? 'text-crusta font-medium bg-alabaster'
                          : 'text-dove-gray hover:text-shark hover:bg-alabaster'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Cases */}
          <li>
            <Link 
              to="/cases"
              className={`block py-2 px-3 font-manrope text-[15px] leading-normal transition-colors rounded-full ${
                location.pathname === '/cases' 
                  ? 'text-shark font-medium' 
                  : 'text-dove-gray hover:text-shark hover:bg-alabaster'
              }`}
            >
              Cases
            </Link>
          </li>

          {/* Sobre */}
          <li>
            <Link 
              to="/sobre"
              className={`block py-2 px-3 font-manrope text-[15px] leading-normal transition-colors rounded-full ${
                location.pathname === '/sobre' 
                  ? 'text-shark font-medium' 
                  : 'text-dove-gray hover:text-shark hover:bg-alabaster'
              }`}
            >
              Sobre
            </Link>
          </li>
        </ul>

        {/* Cart Icon + CTA */}
        <div className="flex items-center gap-2">
          {/* Cart Icon */}
          <Link 
            to="/carrinho"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              location.pathname === '/carrinho'
                ? 'bg-alabaster text-shark'
                : 'text-dove-gray hover:text-shark hover:bg-alabaster'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        
          {/* CTA */}
          <Link 
            to="/orcamento" 
            className="flex-shrink-0 py-2 px-5 bg-crusta rounded-full font-manrope text-[15px] leading-normal text-white font-medium hover:bg-crusta/90 transition-colors"
          >
            Fazer orçamento
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
