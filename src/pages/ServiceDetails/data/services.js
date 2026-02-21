// Imagens de exemplo (serão substituídas por imagens reais de cada serviço)
import heroBanner from '../assets/images/hero-banner.png'
import gallery1 from '../assets/images/gallery-1-611917.png'
import gallery2 from '../assets/images/gallery-2-7fe37e.png'
import gallery3 from '../assets/images/gallery-3-392a5b.png'
import gallery4 from '../assets/images/gallery-4.png'
import relatedCoffee from '../assets/images/related-coffee.png'
import relatedBrunch from '../assets/images/related-brunch-78d2e8.png'

// Dados dos serviços (estrutura dinâmica)
export const servicesData = {
  // Buffet - Coquetel
  'buffet-coquetel': {
    id: 'buffet-coquetel',
    category: 'Buffet',
    title: 'Coquetel',
    shortDescription: 'Serviço volante com finger food\nTudo é preparado com ingredientes frescos e selecionados oferecendo assim uma experiência gastronômica única.',
    inclusions: [
      'Bartender',
      'Coquetéis clássicos e autorais',
      'Decoração temática'
    ],
    fullDescription: `O serviço de coquetel da Chicas foi pensado para criar momentos leves, sofisticados e memoráveis. Cada detalhe é cuidadosamente planejado para que bebidas, apresentação e atendimento estejam em perfeita harmonia com o estilo do evento.

Trabalhamos com ingredientes frescos, combinações equilibradas e receitas clássicas e autorais, garantindo uma experiência sensorial que agrada diferentes paladares. Do coquetel de boas-vindas à celebração final, tudo é executado com precisão e elegância.

Nossa equipe de bartenders atua de forma organizada e discreta, mantendo o fluxo do evento sem interrupções, enquanto a ambientação temática do bar complementa a proposta visual e fortalece a identidade do momento.

Mais do que servir bebidas, entregamos uma experiência gastronômica completa, que eleva o padrão do evento e reforça a sensação de cuidado em cada detalhe.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Nossos buffet são completos',
    },
    relatedServices: [
      {
        id: 'buffet-coffee-break',
        title: 'Coffee Break',
        description: 'Perfeito para reuniões e conferências',
        image: relatedCoffee,
        link: '/servicos/detalhes/buffet-coffee-break',
      },
      {
        id: 'buffet-brunch',
        title: 'Brunch',
        description: 'Mix café da manhã + almoço',
        image: relatedBrunch,
        link: '/servicos/detalhes/buffet-brunch',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/buffet',
    backLink: '/servicos/buffet',
  },

  // Buffet - Coffee Break
  'buffet-coffee-break': {
    id: 'buffet-coffee-break',
    category: 'Buffet',
    title: 'Coffee Break',
    shortDescription: 'Pausa gourmet para seus eventos corporativos\nOpções doces e salgadas preparadas com excelência para momentos de networking.',
    inclusions: [
      'Café premium',
      'Seleção de chás',
      'Salgados variados',
      'Doces finos'
    ],
    fullDescription: `O Coffee Break da Chicas Eventos é pensado para transformar pausas corporativas em momentos memoráveis. Oferecemos uma seleção cuidadosa de bebidas quentes, sucos naturais e opções gastronômicas que agradam todos os paladares.

Nossa equipe prepara cada item com ingredientes de alta qualidade, garantindo frescor e apresentação impecável. Dos clássicos salgados às opções contemporâneas, cada detalhe é pensado para proporcionar uma experiência única.

Atendemos eventos de todos os portes, desde pequenas reuniões até grandes conferências, sempre mantendo o mesmo padrão de excelência e atenção aos detalhes.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Nossos buffet são completos',
    },
    relatedServices: [
      {
        id: 'buffet-coquetel',
        title: 'Coquetel',
        description: 'Serviço volante com finger food',
        image: relatedCoffee,
        link: '/servicos/detalhes/buffet-coquetel',
      },
      {
        id: 'buffet-brunch',
        title: 'Brunch',
        description: 'Mix café da manhã + almoço',
        image: relatedBrunch,
        link: '/servicos/detalhes/buffet-brunch',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/buffet',
    backLink: '/servicos/buffet',
  },

  // Buffet - Brunch
  'buffet-brunch': {
    id: 'buffet-brunch',
    category: 'Buffet',
    title: 'Brunch',
    shortDescription: 'O melhor do café da manhã e almoço em um só serviço\nExperiência gastronômica única que combina sabores e momentos especiais.',
    inclusions: [
      'Estação de ovos',
      'Pães artesanais',
      'Frutas frescas',
      'Pratos quentes'
    ],
    fullDescription: `O Brunch da Chicas Eventos une o melhor do café da manhã com a sofisticação de um almoço requintado. É a escolha perfeita para eventos que pedem uma experiência gastronômica prolongada e descontraída.

Nosso cardápio inclui desde itens tradicionais como ovos preparados na hora e pães artesanais, até opções mais elaboradas que surpreendem os convidados.

A apresentação é cuidadosamente pensada para criar uma atmosfera acolhedora e elegante, tornando cada brunch um momento único.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Nossos buffet são completos',
    },
    relatedServices: [
      {
        id: 'buffet-coquetel',
        title: 'Coquetel',
        description: 'Serviço volante com finger food',
        image: relatedCoffee,
        link: '/servicos/detalhes/buffet-coquetel',
      },
      {
        id: 'buffet-coffee-break',
        title: 'Coffee Break',
        description: 'Perfeito para reuniões e conferências',
        image: relatedBrunch,
        link: '/servicos/detalhes/buffet-coffee-break',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/buffet',
    backLink: '/servicos/buffet',
  },

  // Audiovisual - Fotografia
  'audiovisual-fotografia': {
    id: 'audiovisual-fotografia',
    category: 'Audiovisual',
    title: 'Fotografia',
    shortDescription: 'Cobertura completa do seu evento\nCapturamos cada momento especial com técnica e sensibilidade.',
    inclusions: [
      'Fotógrafo profissional',
      'Edição profissional',
      'Entrega digital',
      'Álbum impresso'
    ],
    fullDescription: `A fotografia da Chicas Eventos é pensada para capturar a essência de cada momento. Nossa equipe de fotógrafos profissionais trabalha de forma discreta e atenta, garantindo que nenhum detalhe seja perdido.

Utilizamos equipamentos de última geração e técnicas modernas de edição para entregar imagens de alta qualidade que contam a história do seu evento.

Oferecemos diferentes pacotes que podem incluir desde cobertura básica até álbuns personalizados e impressões artísticas.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Serviços de audiovisual completos',
    },
    relatedServices: [
      {
        id: 'audiovisual-video',
        title: 'Video',
        description: 'Filmagem e edição profissional',
        image: relatedCoffee,
        link: '/servicos/detalhes/audiovisual-video',
      },
      {
        id: 'audiovisual-drone',
        title: 'Drone',
        description: 'Imagens aéreas espetaculares',
        image: relatedBrunch,
        link: '/servicos/detalhes/audiovisual-drone',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/audiovisual',
    backLink: '/servicos/audiovisual',
  },

  // Audiovisual - Video
  'audiovisual-video': {
    id: 'audiovisual-video',
    category: 'Audiovisual',
    title: 'Video',
    shortDescription: 'Filmagem e edição profissional\nRegistros em vídeo que eternizam seus momentos mais especiais.',
    inclusions: [
      'Cinegrafista',
      'Equipamento 4K',
      'Edição cinematográfica',
      'Trilha sonora'
    ],
    fullDescription: `O serviço de vídeo da Chicas Eventos oferece uma cobertura cinematográfica completa. Nossa equipe captura cada momento com precisão técnica e visão artística.

Trabalhamos com equipamentos de alta definição e técnicas de filmagem modernas para criar produções que emocionam e eternizam memórias.

A edição é feita com atenção aos detalhes, incluindo correção de cor, trilha sonora e efeitos que elevam a qualidade final do material.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Serviços de audiovisual completos',
    },
    relatedServices: [
      {
        id: 'audiovisual-fotografia',
        title: 'Fotografia',
        description: 'Cobertura completa do evento',
        image: relatedCoffee,
        link: '/servicos/detalhes/audiovisual-fotografia',
      },
      {
        id: 'audiovisual-drone',
        title: 'Drone',
        description: 'Imagens aéreas espetaculares',
        image: relatedBrunch,
        link: '/servicos/detalhes/audiovisual-drone',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/audiovisual',
    backLink: '/servicos/audiovisual',
  },

  // Audiovisual - Drone
  'audiovisual-drone': {
    id: 'audiovisual-drone',
    category: 'Audiovisual',
    title: 'Drone',
    shortDescription: 'Imagens aéreas espetaculares\nPerspectivas únicas que transformam seu evento em uma produção cinematográfica.',
    inclusions: [
      'Operador certificado',
      'Drone profissional',
      'Imagens 4K',
      'Edição aérea'
    ],
    fullDescription: `O serviço de drone da Chicas Eventos proporciona imagens aéreas de tirar o fôlego. Nossos operadores são certificados e experientes em capturar os melhores ângulos do seu evento.

Utilizamos drones de última geração que garantem estabilidade e qualidade de imagem excepcionais, mesmo em condições desafiadoras.

As imagens aéreas adicionam uma dimensão única à cobertura do evento, mostrando a grandiosidade e beleza do local de uma perspectiva privilegiada.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Serviços de audiovisual completos',
    },
    relatedServices: [
      {
        id: 'audiovisual-fotografia',
        title: 'Fotografia',
        description: 'Cobertura completa do evento',
        image: relatedCoffee,
        link: '/servicos/detalhes/audiovisual-fotografia',
      },
      {
        id: 'audiovisual-video',
        title: 'Video',
        description: 'Filmagem e edição profissional',
        image: relatedBrunch,
        link: '/servicos/detalhes/audiovisual-video',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/audiovisual',
    backLink: '/servicos/audiovisual',
  },

  // Audiovisual - Storymaker
  'audiovisual-storymaker': {
    id: 'audiovisual-storymaker',
    category: 'Audiovisual',
    title: 'Storymaker',
    shortDescription: 'Conteúdo para redes sociais\nProdução de conteúdo em tempo real para suas redes.',
    inclusions: [
      'Profissional dedicado',
      'Stories e Reels',
      'Edição rápida',
      'Publicação imediata'
    ],
    fullDescription: `O Storymaker da Chicas Eventos é dedicado à criação de conteúdo para redes sociais em tempo real. Durante o evento, nossa equipe produz stories, reels e posts que podem ser compartilhados instantaneamente.

Trabalhamos com uma linguagem visual alinhada à identidade da marca, garantindo que todo o conteúdo seja coeso e impactante.

É a solução perfeita para quem deseja maximizar o alcance e engajamento nas redes sociais durante e após o evento.`,
    heroImage: heroBanner,
    galleryImages: [gallery1, gallery2, gallery3, gallery4],
    relatedSection: {
      title: 'Veja também',
      subtitle: 'Serviços de audiovisual completos',
    },
    relatedServices: [
      {
        id: 'audiovisual-fotografia',
        title: 'Fotografia',
        description: 'Cobertura completa do evento',
        image: relatedCoffee,
        link: '/servicos/detalhes/audiovisual-fotografia',
      },
      {
        id: 'audiovisual-video',
        title: 'Video',
        description: 'Filmagem e edição profissional',
        image: relatedBrunch,
        link: '/servicos/detalhes/audiovisual-video',
      },
    ],
    ctaText: 'Ver Pacotes',
    ctaLink: '/servicos/audiovisual',
    backLink: '/servicos/audiovisual',
  },
}

// Função helper para obter dados do serviço
export const getServiceData = (serviceId) => {
  return servicesData[serviceId] || null
}

// Lista de todos os serviços disponíveis
export const getAllServices = () => {
  return Object.values(servicesData)
}
