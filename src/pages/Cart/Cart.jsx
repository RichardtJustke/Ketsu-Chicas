import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../shared/components/Navbar'
import Footer from '../../shared/components/Footer'
import CartActions from './components/CartActions'
import CartSummary from './components/CartSummary'
import { initialCartItems, summaryData } from './mock/cartData'
import heroBanner from './assets/images/hero-banner.png'

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [discount, setDiscount] = useState(summaryData.discount)

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId))
  }

  const handleApplyPromo = (code) => {
    // Simula aplicação de código promocional
    const validCodes = {
      'CHICAS10': 10,
      'PRIMEIRA': 15,
      'EVENTO20': 20
    }
    
    if (validCodes[code.toUpperCase()]) {
      const discountPercent = validCodes[code.toUpperCase()]
      const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      setDiscount((subtotal * discountPercent) / 100)
    }
  }

  // Cálculos
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal + summaryData.installationFee - discount

  return (
    <div className="w-full min-h-screen bg-alabaster overflow-x-hidden">
      <Navbar />

      <main className="bg-alabaster">
        {/* Hero Section */}
        <section className="w-full h-[1200px] p-5">
          <div className="relative w-full h-full rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <img 
              src={heroBanner}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-[100px] py-[250px]">
              {/* Main Title */}
              <div className="flex flex-col items-center gap-[10px] w-[1080px]">
                <div className="flex flex-row justify-center gap-3">
                  {['Seu', 'Carrinho', 'de', 'Serviços'].map((word) => (
                    <span key={word} className="font-manrope font-normal text-[60px] leading-[1.2] text-center text-white">
                      {word}
                    </span>
                  ))}
                </div>

                {/* Subtitle */}
                <div className="w-[500px] h-[54px] relative">
                  <span className="font-manrope font-normal text-[18px] leading-[1.5] text-center text-white">
                    Revise seus itens selecionados e finalize seu pedido para transformar seu evento em uma experiência inesquecível.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cart Content Section */}
        <section className="w-full py-[57px]">
          {/* Back Button */}
          <div className="max-w-[1736px] mx-auto px-5 mb-[33px]">
            <Link 
              to="/"
              className="inline-flex flex-row items-center gap-2 rounded-[13.5px]"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14H9" stroke="#0A0A0A" strokeWidth="2.33" strokeLinecap="round"/>
                <path d="M14 9L9 14L14 19" stroke="#0A0A0A" strokeWidth="2.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Arial'] font-normal text-[24.5px] leading-[1.43] text-center text-[#0A0A0A]">
                Continuar comprando
              </span>
            </Link>
          </div>

          {/* Main Cart Container */}
          <div className="max-w-[1736px] mx-auto px-5">
            <div className="flex flex-row gap-[56px]">
              {/* Left: Cart Items + Instructions */}
              <CartActions 
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />

              {/* Right: Summary */}
              <CartSummary 
                subtotal={subtotal}
                itemCount={cartItems.length}
                installationFee={summaryData.installationFee}
                discount={discount}
                total={total}
                onApplyPromo={handleApplyPromo}
              />
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="w-full py-[100px] px-[100px]">
          <div className="relative w-full max-w-[1720px] mx-auto h-[457.18px] rounded-[40px] overflow-hidden">
            {/* Background */}
            <img 
              src={heroBanner}
              alt="CTA Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-10">
              {/* Text */}
              <div className="flex flex-col items-center gap-[9px]">
                <div className="w-[700px] pb-[0.99px]">
                  <h2 className="font-manrope font-normal text-[48px] leading-[1.3] text-center text-white">
                    Entre em contato agora
                  </h2>
                </div>
                <div className="w-[500px]">
                  <p className="font-manrope font-normal text-[18px] leading-[1.5] text-center text-white">
                    Fale com nossa equipe agora e receba uma proposta personalizada alinhada às suas necessidades e objetivos
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="flex flex-row justify-center items-center gap-[10px] bg-white rounded-[99px] p-1 w-[500px]">
                <div className="flex-1 px-3 py-[11px]">
                  <input 
                    type="tel"
                    placeholder="Digite seu telefone"
                    className="w-full font-['Onest'] font-normal text-[16px] leading-[1.27] text-left text-shark placeholder:text-dove-gray outline-none bg-transparent"
                  />
                </div>
                <button className="flex flex-row justify-center items-center bg-crusta rounded-[999px] py-[10px] px-6">
                  <span className="font-manrope font-normal text-[14px] leading-[1.5] tracking-[0.04em] text-white">
                    Enviar 
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Cart
