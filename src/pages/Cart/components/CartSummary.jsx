import { useState } from 'react'
import { Link } from 'react-router-dom'

const CartSummary = ({ 
  subtotal, 
  itemCount, 
  installationFee, 
  discount, 
  total,
  onApplyPromo 
}) => {
  const [promoCode, setPromoCode] = useState('')

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      onApplyPromo(promoCode)
    }
  }

  return (
    <div className="flex flex-col gap-[42px] w-[541.31px]">
      {/* Card: Código Promocional */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px]">
        {/* Header */}
        <div className="p-[42px] pb-0">
          <div className="flex flex-row items-center gap-[14px]">
            {/* Icon */}
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.5" cy="17.5" r="14" stroke="#0A0A0A" strokeWidth="2.92"/>
              <circle cx="12.27" cy="12.27" r="1.46" fill="#0A0A0A"/>
              <circle cx="22.73" cy="22.73" r="1.46" fill="#0A0A0A"/>
              <path d="M23.33 11.67L11.67 23.33" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
            </svg>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1] text-left text-[#0A0A0A]">
              Código Promocional
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[21px] p-[42px] pt-[42px]">
          {/* Input Row */}
          <div className="flex flex-row gap-[14px]">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Digite seu código"
              className="flex-1 h-[63px] bg-[#F3F3F5] rounded-[13.5px] px-[21px] py-[7px] font-['Arial'] text-[24.5px] leading-[1.15] text-[#0A0A0A] placeholder:text-[#717182] outline-none"
            />
            <button 
              onClick={handleApplyPromo}
              className="h-[63px] px-7 py-[14px] bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[13.5px] opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-center text-[#0A0A0A]">
                Aplicar
              </span>
            </button>
          </div>

          {/* Hint */}
          <div className="flex flex-row">
            <span className="font-['Arial'] font-normal text-[21px] leading-[1.33] text-left text-[#717182]">
              Experimente: CHICAS10, PRIMEIRA ou EVENTO20
            </span>
          </div>
        </div>
      </div>

      {/* Card: Resumo do Pedido */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px] flex flex-col gap-[42px]">
        {/* Header */}
        <div className="px-[42px] pt-[42px]">
          <span className="font-['Arial'] font-normal text-[28px] leading-[1] text-left text-[#0A0A0A]">
            Resumo do Pedido
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7 px-[42px] pb-[42px]">
          {/* Subtotal */}
          <div className="flex flex-row justify-between">
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
              Subtotal ({itemCount} items)
            </span>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
              R${subtotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          </div>

          {/* Taxa de instalação */}
          <div className="flex flex-row justify-between">
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
              Taxa de instalação
            </span>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
              R${installationFee.toFixed(0)}
            </span>
          </div>

          {/* Desconto */}
          <div className="flex flex-row justify-between items-center">
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
              Desconto
            </span>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-right text-[#0A0A0A]">
              R${discount.toFixed(2).replace('.', ',')}
            </span>
          </div>

          {/* Divider */}
          <div className="h-[2px] bg-[rgba(0,0,0,0.1)]" />

          {/* Total */}
          <div className="flex flex-row justify-between">
            <span className="font-['Arial'] font-normal text-[31.5px] leading-[1.56] text-left text-[#0A0A0A]">
              Total
            </span>
            <span className="font-['Arial'] font-normal text-[31.5px] leading-[1.56] text-right text-[#0A0A0A]">
              R${total.toFixed(2).replace('.', ',')}
            </span>
          </div>

          {/* Finalizar Button */}
          <Link 
            to="/checkout"
            className="h-[70px] flex flex-row items-center justify-center gap-2 bg-[#030213] rounded-[13.5px] hover:bg-[#1a1a2e] transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33 5.83H6.42L9.33 22.17H23.33" stroke="#FFFFFF" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.33 17.5H22.75L25.67 5.83" stroke="#FFFFFF" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10.5" cy="24.5" r="1.75" fill="#FFFFFF"/>
              <circle cx="21" cy="24.5" r="1.75" fill="#FFFFFF"/>
            </svg>
            <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-center text-white">
              Finalizar Pedido
            </span>
          </Link>
        </div>
      </div>

      {/* Card: Delivery Info */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px] py-[42px] pl-[42px]">
        <div className="flex flex-col gap-7">
          {/* Entrega gratuita */}
          <div className="flex flex-row items-center gap-[21px]">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.92 5.83L2.92 26.25C2.92 27.42 3.87 28.33 5.04 28.33H11.67" stroke="#717182" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.42 26.25H26.25C27.42 26.25 28.33 25.33 28.33 24.17V17.5" stroke="#717182" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.08 11.67H20.42L20.42 26.25" stroke="#717182" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16.04" cy="26.25" r="4.38" stroke="#717182" strokeWidth="2.92"/>
              <path d="M13.13 26.25H21.88" stroke="#717182" strokeWidth="2.92"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-left text-[#0A0A0A]">
                Entrega gratuita
              </span>
              <span className="font-['Arial'] font-normal text-[21px] leading-[1.33] text-left text-[#717182]">
                Em pedidos acima de R$200
              </span>
            </div>
          </div>

          {/* Equipamentos Seguros */}
          <div className="flex flex-row items-center gap-[21px]">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 2.92L5.83 8.75V17.5C5.83 25.2 10.79 32.08 17.5 32.08C24.21 32.08 29.17 25.2 29.17 17.5V8.75L17.5 2.92Z" stroke="#717182" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.25 17.5L15.75 21L22.75 14" stroke="#717182" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-left text-[#0A0A0A]">
                Equipamentos Seguros
              </span>
              <span className="font-['Arial'] font-normal text-[21px] leading-[1.33] text-left text-[#717182]">
                Todos os itens revisados antes da entrega
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card: Testimonial */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px] py-[42px] pl-[42px] pr-0">
        <div className="flex flex-col gap-[25px]">
          <p className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-left text-[#717182] pr-[9px]">
            Cada equipamento é cuidadosamente revisado e higienizado antes de cada locação
          </p>
          <span className="font-['Arial'] font-normal text-[21px] leading-[1.33] text-center text-[#0A0A0A]">
            Equipe Tonho Locação
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
