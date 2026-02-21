import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginBg from './assets/images/login-bg.png'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Limpa erro quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName) {
      newErrors.fullName = 'Nome é obrigatório'
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Nome deve ter ao menos 3 caracteres'
    }
    
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme sua senha'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem'
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você deve aceitar os termos'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simula cadastro (sem backend)
    setTimeout(() => {
      setIsLoading(false)
      // Simula sucesso e redireciona para login
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-8 lg:px-20 py-10 relative">
        {/* Back Button */}
        <Link 
          to="/"
          className="flex items-center gap-2 text-[#A3AED0] hover:text-[#2B3674] transition-colors group w-fit"
        >
          <svg 
            className="w-6 h-6 rotate-90" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em]">
            Voltar
          </span>
        </Link>

        {/* Form Container */}
        <div className="w-full max-w-[410px] mx-auto lg:mx-0 animate-fade-in-up">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-['DM_Sans'] font-bold text-[36px] leading-[1.56] tracking-[-0.02em] text-[#2B3674]">
              Criar Conta
            </h1>
            <p className="font-['DM_Sans'] font-normal text-[16px] tracking-[-0.02em] text-[#A3AED0] mt-2">
              Preencha os dados abaixo para criar sua conta!
            </p>
          </div>

          {/* Google Sign Up */}
          <button 
            type="button"
            className="w-full h-[50px] flex items-center justify-center gap-3 bg-[#F4F7FE] rounded-[16px] hover:bg-[#E0E5F2] transition-colors"
          >
            {/* Google Icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7874 10.2249C19.7874 9.56659 19.7291 8.94159 19.6208 8.33325H10.2041V12.0916H15.6041C15.3624 13.3249 14.6541 14.3666 13.6041 15.0749V17.5749H16.8208C18.7041 15.8333 19.7874 13.2666 19.7874 10.2249Z" fill="#4285F4"/>
              <path d="M10.2042 20.0001C12.9542 20.0001 15.2625 19.1001 16.8209 17.5751L13.6042 15.0751C12.7042 15.6751 11.5625 16.0418 10.2042 16.0418C7.54587 16.0418 5.29587 14.2834 4.50421 11.9084H1.18754V14.4834C2.73754 17.5584 6.21254 20.0001 10.2042 20.0001Z" fill="#34A853"/>
              <path d="M4.50417 11.9083C4.30417 11.3083 4.18751 10.6666 4.18751 9.99994C4.18751 9.33327 4.30417 8.6916 4.50417 8.0916V5.5166H1.18751C0.504172 6.8666 0.120839 8.38327 0.120839 9.99994C0.120839 11.6166 0.504172 13.1333 1.18751 14.4833L4.50417 11.9083Z" fill="#FBBC05"/>
              <path d="M10.2042 3.95833C11.6875 3.95833 13.0209 4.46666 14.0792 5.45833L16.8959 2.64166C15.2542 1.08333 12.9459 0 10.2042 0C6.21254 0 2.73754 2.44166 1.18754 5.51666L4.50421 8.09166C5.29587 5.71666 7.54587 3.95833 10.2042 3.95833Z" fill="#EA4335"/>
            </svg>
            <span className="font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#2B3674]">
              Cadastrar com Google
            </span>
          </button>

          {/* Separator */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-[#E0E5F2]" />
            <span className="px-4 font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#A3AED0]">
              ou
            </span>
            <div className="flex-1 h-[1px] bg-[#E0E5F2]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#2B3674] mb-2">
                Nome completo*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className={`w-full h-[50px] bg-[#F4F7FE] rounded-[16px] px-6 font-['DM_Sans'] text-[14px] tracking-[-0.02em] text-[#2B3674] placeholder:text-[#A3AED0] outline-none border-2 transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-transparent focus:border-crusta'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-red-500 text-[12px] font-['DM_Sans']">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#2B3674] mb-2">
                E-mail*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                className={`w-full h-[50px] bg-[#F4F7FE] rounded-[16px] px-6 font-['DM_Sans'] text-[14px] tracking-[-0.02em] text-[#2B3674] placeholder:text-[#A3AED0] outline-none border-2 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-transparent focus:border-crusta'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-[12px] font-['DM_Sans']">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#2B3674] mb-2">
                Senha*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mín. 8 caracteres"
                  className={`w-full h-[50px] bg-[#F4F7FE] rounded-[16px] px-6 pr-12 font-['DM_Sans'] text-[14px] tracking-[-0.02em] text-[#2B3674] placeholder:text-[#A3AED0] outline-none border-2 transition-colors ${
                    errors.password ? 'border-red-500' : 'border-transparent focus:border-crusta'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0] hover:text-[#2B3674] transition-colors"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-500 text-[12px] font-['DM_Sans']">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block font-['DM_Sans'] font-medium text-[14px] tracking-[-0.02em] text-[#2B3674] mb-2">
                Confirmar senha*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Digite a senha novamente"
                  className={`w-full h-[50px] bg-[#F4F7FE] rounded-[16px] px-6 pr-12 font-['DM_Sans'] text-[14px] tracking-[-0.02em] text-[#2B3674] placeholder:text-[#A3AED0] outline-none border-2 transition-colors ${
                    errors.confirmPassword ? 'border-red-500' : 'border-transparent focus:border-crusta'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0] hover:text-[#2B3674] transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-red-500 text-[12px] font-['DM_Sans']">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Accept Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-[18px] h-[18px] rounded-[2px] flex items-center justify-center transition-colors ${
                    formData.acceptTerms ? 'bg-crusta' : errors.acceptTerms ? 'bg-red-200' : 'bg-[#E0E5F2]'
                  }`}>
                    {formData.acceptTerms && (
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-['DM_Sans'] font-normal text-[14px] tracking-[-0.02em] text-[#2B3674]">
                  Ao criar uma conta, você concorda com os{' '}
                  <Link to="/termos" className="text-crusta hover:underline">
                    Termos de Uso
                  </Link>
                  {' '}e{' '}
                  <Link to="/privacidade" className="text-crusta hover:underline">
                    Política de Privacidade
                  </Link>
                </span>
              </label>
              {errors.acceptTerms && (
                <p className="mt-1 text-red-500 text-[12px] font-['DM_Sans'] ml-7">{errors.acceptTerms}</p>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[54px] bg-crusta rounded-[16px] font-['DM_Sans'] font-bold text-[14px] tracking-[-0.02em] text-white hover:bg-crusta/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Criando conta...' : 'Criar Conta'}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 font-['DM_Sans'] text-[14px] tracking-[-0.02em]">
            <span className="text-[#707EAE]">Já tem uma conta? </span>
            <Link 
              to="/login"
              className="font-bold text-[#707EAE] hover:text-crusta transition-colors"
            >
              Entrar
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 text-[14px] font-['DM_Sans']">
          <p className="text-[#06040B]">
            © 2026 Chicas Eventos. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="font-medium text-[#A3AED0] hover:text-crusta transition-colors">Site</Link>
            <Link to="/termos" className="font-medium text-[#A3AED0] hover:text-crusta transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block w-1/2 h-screen sticky top-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default SignUp
