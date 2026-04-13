export interface RheemProduct {
  gal: string;
  price: string;
  model: string;
  image: string;
  link: string;
  features: string[];
}

export const RHEEM_CATALOG: Record<number, RheemProduct> = {
  20: { 
    gal: '20', 
    price: '3,180', 
    model: 'Rheem Professional Classic 20 Gal.',
    image: 'https://images.thdstatic.com/productImages/0c744186-2679-467b-839b-73a4b9e2894c/svn/rheem-electric-water-heaters-xe20s06st-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-20-gal-p829039716',
    features: ['Serie Professional Classic', 'Ideal para espacios reducidos', 'Garantía de 6 años']
  },
  30: { 
    gal: '30', 
    price: '3,736', 
    model: 'Rheem Performance 30 Gal. Tall',
    image: 'https://images.thdstatic.com/productImages/8e469584-6353-4679-8804-098867a6894c/svn/rheem-electric-water-heaters-xe30t06st-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-30-gal-p829061826',
    features: ['Diseño compacto y eficiente', 'Recuperación rápida de temperatura', 'Protección de ánodo de magnesio']
  },
  40: { 
    gal: '40', 
    price: '4,025', 
    model: 'Rheem Performance 40 Gal. Tall',
    image: 'https://images.thdstatic.com/productImages/3f689584-6353-4679-8804-098867a6894c/svn/rheem-electric-water-heaters-xe40t06st-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-40-gal-p829086251',
    features: ['Perfecto para familias de 2-3 personas', 'Aislamiento de espuma de alta densidad', 'Válvula de alivio incluida']
  },
  50: { 
    gal: '50', 
    price: '4,295', 
    model: 'Rheem Performance Plus 50 Gal.',
    image: 'https://images.thdstatic.com/productImages/4f689584-6353-4679-8804-098867a6894c/svn/rheem-electric-water-heaters-xe50t09el55u1-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-50-gal-p829015071',
    features: ['Mayor durabilidad y rendimiento', 'Resistencias de acero inoxidable', 'Garantía extendida de 9 años']
  },
  66: { 
    gal: '66', 
    price: '5,730', 
    model: 'Rheem ELD66-D Light Duty',
    image: 'https://images.thdstatic.com/productImages/5f689584-6353-4679-8804-098867a6894c/svn/rheem-electric-water-heaters-eld66-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-66-gal-p829086306',
    features: ['Uso comercial ligero o residencial grande', 'Doble resistencia para mayor flujo', 'Tanque revestido de vidrio']
  },
  80: { 
    gal: '80', 
    price: '6,440', 
    model: 'Rheem 80 Gal. Electric',
    image: 'https://images.thdstatic.com/productImages/6f689584-6353-4679-8804-098867a6894c/svn/rheem-electric-water-heaters-xe80t12ec55u1-64_600.jpg',
    link: 'https://grupoprisma.company.site/Calentador-Rheem-El%C3%A9ctrico-de-Dep%C3%B3sito-80-gal-p829086316',
    features: ['Máxima capacidad para alto consumo', 'Ideal para jacuzzis y tinas grandes', 'Control termostático preciso']
  }
};

export function calculateRecommendation(personas: number, banos: number, tina: boolean): number {
  let galonesRecomendados = 30;

  if (personas >= 6 || (tina && personas >= 4)) {
    galonesRecomendados = 80;
  } else if (personas === 5 || tina) {
    galonesRecomendados = 66;
  } else if (personas >= 3) {
    galonesRecomendados = 50;
  } else if (personas === 2 && banos >= 2) {
    galonesRecomendados = 40;
  } else if (personas === 2) {
    galonesRecomendados = 30;
  } else {
    galonesRecomendados = 20; // 1 persona
  }

  return galonesRecomendados;
}
