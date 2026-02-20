import logoFooter from '../../pages/Home/assets/images/logo-footer.png'

const Footer = () => {
  const menuEmpresa = ['Sobre', 'Cases']
  const menuServicos = ['Buffet', 'Audiovisual', 'RH', 'Cerimonial']

  return (
    <footer className="w-full flex justify-center py-[100px]">
      <div className="w-[1320px] flex flex-col gap-8">
        {/* Main Grid */}
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-[60px]">
          {/* Logo Column */}
          <div className="flex flex-col gap-5">
            <img src={logoFooter} alt="Chicas Eventos" className="w-[105px] h-[65px] object-contain" />
            <p className="font-manrope text-[18px] leading-[1.5] text-dove-gray max-w-[400px]">
              Transformamos cada evento em uma experiência exclusiva conduzida com profissionalismo, excelência e dedicação em cada detalhe.
            </p>
          </div>

          {/* Menu Empresa */}
          <div className="flex flex-col gap-4">
            <span className="font-manrope text-[18px] text-shark py-2">Empresa</span>
            <div className="flex flex-col gap-2">
              {menuEmpresa.map((item) => (
                <a key={item} href="#" className="font-manrope text-[16px] text-dove-gray hover:text-shark transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Serviços */}
          <div className="flex flex-col gap-4">
            <span className="font-manrope text-[18px] text-shark py-2">Serviços</span>
            <div className="flex flex-col gap-2">
              {menuServicos.map((item) => (
                <a key={item} href="#" className="font-manrope text-[16px] text-dove-gray hover:text-shark transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Conecte-se */}
          <div className="flex flex-col gap-4">
            <span className="font-manrope text-[18px] text-shark py-2">Conecte-se</span>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="#" className="w-[22px] h-[22px]">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect width="22" height="22" rx="5" fill="#EC3397"/>
                  <rect x="5.35" y="5.35" width="11.3" height="11.3" rx="3" stroke="white" strokeWidth="1.5"/>
                  <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.5"/>
                  <circle cx="15.55" cy="6.45" r="1.32" fill="white"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-[22px] h-[22px]">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect width="22" height="22" rx="3" fill="#0A66C2"/>
                  <path d="M6 9V16H8.5V9H6ZM7.25 5C6.56 5 6 5.56 6 6.25C6 6.94 6.56 7.5 7.25 7.5C7.94 7.5 8.5 6.94 8.5 6.25C8.5 5.56 7.94 5 7.25 5ZM10 9V16H12.5V12.5C12.5 11.67 13.17 11 14 11C14.83 11 15.5 11.67 15.5 12.5V16H18V12C18 10.07 16.43 8.5 14.5 8.5C13.5 8.5 12.62 8.95 12 9.67V9H10Z" fill="white"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-[22px] h-[22px]">
                <svg viewBox="0 0 22 22" fill="none">
                  <rect width="22" height="22" rx="11" fill="#1877F2"/>
                  <path d="M15.5 11C15.5 8.51 13.49 6.5 11 6.5C8.51 6.5 6.5 8.51 6.5 11C6.5 13.24 8.12 15.1 10.25 15.45V12.5H9V11H10.25V9.88C10.25 8.67 11.02 8 12.12 8C12.64 8 13.19 8.1 13.19 8.1V9.31H12.59C11.99 9.31 11.75 9.69 11.75 10.08V11H13.13L12.88 12.5H11.75V15.45C13.88 15.1 15.5 13.24 15.5 11Z" fill="white"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-[22px] h-[18px]">
                <svg viewBox="0 0 22 18" fill="#1DA1F2">
                  <path d="M22 2.13C21.19 2.5 20.31 2.74 19.39 2.85C20.33 2.28 21.04 1.38 21.38 0.31C20.49 0.84 19.51 1.21 18.47 1.42C17.64 0.54 16.47 0 15.19 0C12.74 0 10.75 1.99 10.75 4.44C10.75 4.8 10.79 5.15 10.87 5.48C7.11 5.29 3.77 3.51 1.54 0.82C1.14 1.51 0.91 2.28 0.91 3.11C0.91 4.68 1.71 6.07 2.94 6.89C2.2 6.87 1.5 6.67 0.89 6.34V6.4C0.89 8.54 2.41 10.31 4.44 10.73C4.05 10.84 3.64 10.89 3.22 10.89C2.92 10.89 2.63 10.86 2.35 10.81C2.94 12.57 4.57 13.86 6.51 13.9C5 15.09 3.11 15.8 1.06 15.8C0.7 15.8 0.35 15.78 0 15.74C1.94 17 4.25 17.72 6.73 17.72C15.18 17.72 19.79 10.96 19.79 5.01C19.79 4.82 19.78 4.62 19.77 4.43C20.66 3.79 21.38 2.98 21.97 2.08L22 2.13Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center pt-8 border-t border-dove-gray/20">
          <span className="font-abel text-[13px] text-black">
            © 2025 Chicas Eventos. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
