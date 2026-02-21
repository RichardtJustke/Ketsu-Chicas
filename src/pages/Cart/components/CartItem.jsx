const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1)
    }
  }

  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1)
  }

  return (
    <div className="flex flex-row gap-7 pt-7">
      {/* Image Container */}
      <div className="w-[224px] h-[224px] bg-[#ECECF0] rounded-[17.5px] flex-shrink-0 overflow-hidden">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover rounded-[16px]"
          />
        ) : null}
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-7 flex-1">
        {/* Info Row */}
        <div className="flex flex-row justify-between items-start gap-[14px]">
          {/* Left: Title + Tags */}
          <div className="flex flex-col flex-1">
            {/* Title */}
            <div className="h-[42px]">
              <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-left text-[#0A0A0A]">
                {item.name}
              </span>
            </div>
            
            {/* Tags */}
            <div className="flex flex-row gap-7">
              <div className="flex flex-row">
                <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-left text-[#717182]">
                  id:{item.id}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-left text-[#717182]">
                  {item.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Price */}
          <div className="flex flex-col">
            <div className="h-[42px]">
              <span className="font-['Arial'] font-normal text-[28px] leading-[1.5] text-right text-[#0A0A0A]">
                R${item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            {item.hasTotal && item.quantity > 1 && (
              <div className="h-[35px]">
                <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-right text-[#717182]">
                  R${(item.price * item.quantity).toFixed(2).replace('.', ',')} total
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-row justify-between items-center">
          {/* Quantity Controls */}
          <div className="flex flex-row items-center gap-[14px]">
            {/* Decrement Button */}
            <button 
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
              className={`w-[56px] h-[56px] flex items-center justify-center bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[13.5px] ${item.quantity <= 1 ? 'opacity-50' : 'hover:bg-gray-50'}`}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83 14H22.17" stroke="#0A0A0A" strokeWidth="2.33" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Quantity Input */}
            <div className="flex-1 h-[56px] flex items-center justify-center bg-[#F3F3F5] rounded-[13.5px] px-[21px] py-[7px] min-w-[70px]">
              <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-center text-[#0A0A0A]">
                {item.quantity}
              </span>
            </div>

            {/* Increment Button */}
            <button 
              onClick={handleIncrement}
              className="w-[56px] h-[56px] flex items-center justify-center bg-white border-2 border-[rgba(0,0,0,0.1)] rounded-[13.5px] hover:bg-gray-50"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5.83V22.17M5.83 14H22.17" stroke="#0A0A0A" strokeWidth="2.33" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Remove Button */}
          <button 
            onClick={() => onRemove(item.id)}
            className="flex flex-row items-center gap-2 rounded-[13.5px] px-4 py-2 hover:bg-red-50"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.67 12.83V19.83M16.33 12.83V19.83" stroke="#D4183D" strokeWidth="2.33" strokeLinecap="round"/>
              <path d="M5.83 7H22.17" stroke="#D4183D" strokeWidth="2.33" strokeLinecap="round"/>
              <path d="M5.83 7H22.17V25.67C22.17 26.4 21.57 27 20.83 27H7.17C6.43 27 5.83 26.4 5.83 25.67V7Z" stroke="#D4183D" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.33 7V4.67C9.33 3.19 10.52 2 12 2H16C17.48 2 18.67 3.19 18.67 4.67V7" stroke="#D4183D" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-center text-[#D4183D]">
              Remove
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
