import { useState } from 'react'
import CartItem from './CartItem'

const CartActions = ({ items, onUpdateQuantity, onRemove }) => {
  const [specialInstructions, setSpecialInstructions] = useState('')

  return (
    <div className="flex flex-col gap-[42px] w-[1138.66px]">
      {/* Card: Carrinho */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px] flex flex-col gap-[42px]">
        {/* Header */}
        <div className="h-[87.5px] px-[42px] pt-[42px]">
          <div className="flex flex-row items-center gap-[14px]">
            {/* Icon */}
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.52 8.8H30.47" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
              <path d="M4.38 2.92H30.63V32.08H4.38V2.92Z" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.67 14.58V20.42" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
              <path d="M23.33 14.58V20.42" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
              <path d="M11.67 20.42C11.67 23.67 14.25 26.25 17.5 26.25C20.75 26.25 23.33 23.67 23.33 20.42" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
            </svg>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1] text-left text-[#0A0A0A]">
              Carrinho  
            </span>
          </div>
        </div>

        {/* Content - Items List */}
        <div className="flex flex-col gap-7 px-[42px] pb-[42px]">
          {items.map((item, index) => (
            <div key={item.id}>
              <CartItem 
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
              {index < items.length - 1 && (
                <div className="h-[2px] bg-[rgba(0,0,0,0.1)] mt-7" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card: Instruções Especiais */}
      <div className="bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[25.5px]">
        {/* Header */}
        <div className="h-[87.5px] px-[42px] pt-[42px]">
          <div className="flex flex-row items-center gap-[14px]">
            {/* Icon */}
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.92 4.38H32.08V30.63H2.92V4.38Z" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 11.67H26.25" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
              <path d="M8.75 17.5H26.25" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
              <path d="M8.75 23.33H17.5" stroke="#0A0A0A" strokeWidth="2.92" strokeLinecap="round"/>
            </svg>
            <span className="font-['Arial'] font-normal text-[28px] leading-[1] text-left text-[#0A0A0A]">
              Instruções Especiais
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[14px] px-[44px] pt-[44px] pb-[42px]">
          {/* Label */}
          <div className="flex flex-row items-center gap-[14px]">
            <span className="font-['Arial'] font-normal text-[24.5px] leading-[1] text-left text-[#0A0A0A]">
              Adicione uma observação ao seu pedido (opcional)
            </span>
          </div>

          {/* Textarea */}
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="Observações especiais sobre entrega, montagem, horário preferencial, endereço do evento..."
            className="w-full h-[120px] bg-[#F3F3F5] rounded-[13.5px] px-[21px] py-[14px] font-['Arial'] text-[24.5px] leading-[1.43] text-[#0A0A0A] placeholder:text-[#717182] outline-none resize-none"
          />

          {/* Hint */}
          <div className="flex flex-row">
            <span className="font-['Arial'] font-normal text-[21px] leading-[1.33] text-left text-[#717182]">
              Exemplos: 'Evento será no dia 15/03 às 14h' • 'Entregar em [endereço]' • 'Montagem no período da manhã' • 'Preciso de ajuda com o layout'
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartActions
