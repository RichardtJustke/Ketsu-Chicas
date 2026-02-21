// Mock data para o carrinho - baseado no Figma
import itemFotografo from '../assets/images/item-fotografo.png'

export const initialCartItems = [
  {
    id: '85417',
    name: 'Gravação drone 3 horas',
    category: 'Drone',
    price: 300.00,
    quantity: 1,
    image: null, // Placeholder cinza
    hasTotal: false
  },
  {
    id: '75644',
    name: 'Buffet',
    category: 'Pacote basico',
    price: 78.00,
    quantity: 66,
    image: null, // Placeholder cinza
    hasTotal: true,
    totalPrice: 5148.00
  },
  {
    id: '96447',
    name: 'Cobertura 6h',
    category: 'fotografo',
    price: 1200.00,
    quantity: 1,
    image: itemFotografo,
    hasTotal: false
  }
]

export const summaryData = {
  installationFee: 300.00,
  discount: 0.00,
  promoCodes: ['CHICAS10', 'PRIMEIRA', 'EVENTO20']
}

export const deliveryInfo = {
  freeDelivery: {
    title: 'Entrega gratuita',
    subtitle: 'Em pedidos acima de R$200'
  },
  safeEquipment: {
    title: 'Equipamentos Seguros',
    subtitle: 'Todos os itens revisados antes da entrega'
  }
}

export const testimonial = {
  text: 'Cada equipamento é cuidadosamente revisado e higienizado antes de cada locação',
  author: 'Equipe Tonho Locação'
}
