interface Product {
  id: number;
  url: string;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}

export function getProductsDB(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    if (!db) reject('Not Read DB');
    const copyDB = [...db];
    const sortedDB = copyDB.sort((a, b) => b.id - a.id);
    resolve(sortedDB);
  });
}

export function createProductDB(product: Product): Promise<Product> {
  return new Promise((resolve, reject) => {
    if (!db) reject('Not Read DB');
    db.push(product);
    resolve(product);
  });
}

export function editProductDB(id: number, product: Product) {
  return new Promise((resolve, reject) => {
    if (!db) reject('Not Read DB');
    const index = db.findIndex((product) => product.id === id);
    if (index === -1) reject('Not Found Product');
    db[index] = product;
    resolve(product);
  });
}

const db = [
  {
    id: 1,
    url: 'https://cdn.amondz.com/product/30592/resize/mainImg/PSI_836624.jpeg?v=1670340958033',
    brand: '플릿',
    name: '해류 흐름 R04',
    price: 39000,
    freeDelivery: true,
  },
  {
    id: 2,
    url: 'https://cdn.amondz.com/product/78052/resize/mainImg/PSI_830671.jpeg?v=1669974330081',
    brand: '모움',
    name: "'Veining' 19N (Silver)",
    price: 108000,
    freeDelivery: true,
  },
  {
    id: 3,
    url: 'https://cdn.amondz.com/product/77386/resize/mainImg/PSI_819811.jpeg?v=1668948838940',
    brand: '제이리사',
    name: "'The rose' petal earrings",
    price: 50400,
    freeDelivery: false,
  },
  {
    id: 4,
    url: 'https://cdn.amondz.com/product/69507/resize/mainImg/PSI_833465.jpeg?v=1670210761895',
    brand: '페르토',
    name: 'PEBBLE EARRING',
    price: 68000,
    freeDelivery: false,
  },
  {
    id: 5,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 6,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 7,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 8,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 9,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 10,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 11,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 12,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 13,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 14,
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: false,
  },
];
