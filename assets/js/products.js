const PRODUCTS = [
  {
    id: 1,
    name: "Camisa Amarela Brasil Nike I 2026/27 Jogador Masculina",
    category: "Camisetas",
    type: "Jogador",
    audience: "Masculino",
    brand: "Nike",
    price: 749.99,
    oldPrice: 799.90,
    promotion: true,
    images: [
      "./assets/images/products/camisetas/camisa-jogador-amarela-brasil1.png",
      "./assets/images/products/camisetas/camisa-jogador-amarela-brasil2.png",
      "./assets/images/products/camisetas/camisa-jogador-amarela-brasil3.png",
      "./assets/images/products/camisetas/camisa-jogador-amarela-brasil4.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Modelo jogador em versão premium para quem quer vestir o Brasil com máximo desempenho e acabamento esportivo.",
    featured: true
  },
  {
    id: 2,
    name: "Camisa Brasil Nike I 2026/27 Torcedor Pro Masculina",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Masculino",
    brand: "Nike",
    price: 449.99,
    oldPrice: 499.90,
    promotion: true,
    images: [
      "./assets/images/products/camisetas/camisa-torcedor-amarela-brasil1.png",
      "./assets/images/products/camisetas/camisa-torcedor-amarela-brasil2.png",
      "./assets/images/products/camisetas/camisa-torcedor-amarela-brasil3.png",
      "./assets/images/products/camisetas/camisa-torcedor-amarela-brasil4.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Camisa amarela para o torcedor brasileiro que vibra, canta e carrega a seleção no peito.",
    featured: true
  },
  {
    id: 3,
    name: "Camisa Brasil Jordan II 2026/27 Torcedor Pro Masculina",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Masculino",
    brand: "Nike",
    price: 449.99,
    oldPrice: 499.90,
    promotion: true,
    images: [
      "./assets/images/products/camisetas/camisa-torcedor-azul-brasil1.png",
      "./assets/images/products/camisetas/camisa-torcedor-azul-brasil2.png",
      "./assets/images/products/camisetas/camisa-torcedor-azul-brasil3.png",
      "./assets/images/products/camisetas/camisa-torcedor-azul-brasil4.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Versão azul para quem quer uma alternativa marcante, moderna e cheia de presença na arquibancada.",
    featured: true
  },
  {
    id: 4,
    name: "Camisa Originals Brasil COB",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Masculino",
    brand: "Adidas",
    price: 399.99,
    oldPrice: null,
    promotion: false,
    images: [
      "./assets/images/products/camisetas/camisa-torcedor-adidas-brasil1.png",
      "./assets/images/products/camisetas/camisa-torcedor-adidas-brasil2.png",
      "./assets/images/products/camisetas/camisa-torcedor-adidas-brasil3.png",
      "./assets/images/products/camisetas/camisa-torcedor-adidas-brasil4.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Camisa com visual retrô e casual para vestir o Brasil também fora dos dias de jogo.",
    featured: false
  },
  {
    id: 5,
    name: "Camisa Brasil Nike I 2026/27 Torcedora Pro Feminina",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Feminino",
    brand: "Nike",
    price: 449.99,
    oldPrice: 499.90,
    promotion: true,
    images: [
      "./assets/images/products/femininas/camisa-feminina-nike-brasil1.png",
      "./assets/images/products/femininas/camisa-feminina-nike-brasil2.png",
      "./assets/images/products/femininas/camisa-feminina-nike-brasil3.png"
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Modelo feminino para torcedoras que fazem da arquibancada uma extensão da paixão pelo Brasil.",
    featured: true
  },
  {
    id: 15,
    name: "Camisa Brasil Jordan II 2026/27 Torcedora Pro Feminina",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Feminino",
    brand: "Nike",
    price: 449.99,
    oldPrice: 499.90,
    promotion: true,
    images: [
      "./assets/images/products/femininas/camisa-feminina-azul-nike-brasil1.png",
      "./assets/images/products/femininas/camisa-feminina-azul-nike-brasil2.png",
      "./assets/images/products/femininas/camisa-feminina-azul-nike-brasil3.png",
      "./assets/images/products/femininas/camisa-feminina-azul-nike-brasil4.png"
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Versão azul feminina para torcedoras que querem vestir o Brasil com estilo, presença e energia de arquibancada.",
    featured: true
  },
  {
    id: 6,
    name: "Camisa Cropped Originals Brasil COB",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Feminino",
    brand: "Adidas",
    price: 399.99,
    oldPrice: null,
    promotion: false,
    images: [
      "./assets/images/products/femininas/camisa-feminina-adidas-brasil1.png",
      "./assets/images/products/femininas/camisa-feminina-adidas-brasil2.png"
    ],
    sizes: ["PP", "P", "M", "G"],
    description: "Cropped com estilo casual, identidade brasileira e visual perfeito para torcer com personalidade.",
    featured: false
  },
  {
    id: 7,
    name: "Camisa Infantil Brasil Nike I 2026/27 Torcedor Pro",
    category: "Camisetas",
    type: "Torcedor",
    audience: "Infantil",
    brand: "Nike",
    price: 399.99,
    oldPrice: 449.90,
    promotion: true,
    images: [
      "./assets/images/products/Infantil/camisa-torcedor-infantil-brasil.png",
      "./assets/images/products/Infantil/camisa-torcedor-infantil-brasil2.png"
    ],
    sizes: ["7-8", "9-10", "11-12", "13-15"],
    description: "Camisa infantil para a nova geração de torcedores brasileiros, indicada para 7 a 15 anos.",
    featured: false
  },
  {
    id: 8,
    name: "Jaqueta Brasil Dri-FIT Nike Academy Pro Masculina",
    category: "Agasalhos",
    type: "Torcedor",
    audience: "Unisex",
    brand: "Nike",
    price: 499.99,
    oldPrice: 599.90,
    promotion: true,
    images: [
      "./assets/images/products/agasalhos/jaqueta-nike-brasil.png",
      "./assets/images/products/agasalhos/jaqueta-nike-brasil2.png",
      "./assets/images/products/agasalhos/jaqueta-nike-brasil3.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Jaqueta esportiva para acompanhar o Brasil em dias frios, treinos, viagens e jogos decisivos.",
    featured: true
  },
  {
    id: 9,
    name: "Jaqueta Brasil 1994 - UMBRO",
    category: "Agasalhos",
    type: "Torcedor",
    audience: "Unisex",
    brand: "UMBRO",
    price: 799.99,
    oldPrice: 899.90,
    promotion: true,
    images: [
      "./assets/images/products/agasalhos/jaqueta-umbro-brasil1.png",
      "./assets/images/products/agasalhos/jaqueta-umbro-brasil2.png"
    ],
    sizes: ["P", "M", "G", "GG"],
    description: "Jaqueta retrô inspirada em 1994, para quem gosta de história, nostalgia e futebol brasileiro.",
    featured: true
  },
  {
    id: 10,
    name: "Capa Bandeira do Brasil Torcedor Adulta 80cm x 140cm",
    category: "Acessórios",
    type: "Bandeira",
    audience: "Unisex",
    brand: "Brasil",
    price: 79.99,
    oldPrice: 99.90,
    promotion: true,
    images: [
      "./assets/images/products/acessorios/capa-bandeira-brasil.png"
    ],
    sizes: ["Único"],
    description: "Capa bandeira para entrar no clima do jogo e transformar qualquer lugar em arquibancada.",
    featured: false
  },
  {
    id: 11,
    name: "Bandeira Brasil Torcedor 130x90cm",
    category: "Acessórios",
    type: "Bandeira",
    audience: "Unisex",
    brand: "Brasil",
    price: 59.99,
    oldPrice: 79.90,
    promotion: true,
    images: [
      "./assets/images/products/acessorios/bandeira-brasil.png"
    ],
    sizes: ["Único"],
    description: "Bandeira do Brasil para decorar, comemorar e mostrar a força da torcida brasileira.",
    featured: false
  },
  {
    id: 12,
    name: "Boné Brasil - disponível em 3 cores",
    category: "Acessórios",
    type: "Boné",
    audience: "Unisex",
    brand: "Brasil",
    price: 99.99,
    oldPrice: 119.90,
    promotion: true,
    images: [
      "./assets/images/products/acessorios/bone-brasil.png"
    ],
    sizes: ["Único"],
    options: ["Amarelo", "Verde", "Azul"],
    optionLabel: "Cor",
    optionTitle: "Tamanho único, selecione uma cor",
    description: "Boné Brasil em três opções de cores para completar o visual da torcida.",
    featured: false
  },
  {
    id: 13,
    name: "Copo Térmico Brasil",
    category: "Acessórios",
    type: "Copo",
    audience: "Utensílio",
    brand: "Brasil",
    price: 89.99,
    oldPrice: 109.99,
    promotion: true,
    images: [
      "./assets/images/products/acessorios/copo-termico.png"
    ],
    sizes: ["Único"],
    description: "Copo térmico temático para acompanhar os jogos, churrascos e encontros da torcida.",
    featured: false
  }
,
  {
    id: 14,
    name: "Pulseira do Brasil",
    category: "Acessórios",
    type: "Pulseira",
    audience: "Unisex",
    brand: "Brasil",
    price: 24.99,
    oldPrice: 35.99,
    promotion: true,
    images: [
      "./assets/images/products/acessorios/pulseira-brasil.png"
    ],
    sizes: ["Único"],
    options: ["Verde", "Amarela"],
    optionLabel: "Cor",
    optionTitle: "Tamanho único, selecione uma cor",
    description: "Pulseira do Brasil nas cores verde ou amarela para completar o visual da torcida.",
    featured: false
  }
];