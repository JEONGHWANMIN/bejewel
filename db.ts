type Category = '팔찌' | '목걸이' | '반지' | '귀걸이';

interface Product {
  id: number;
  category: Category;
  url: string;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}

export function getProductsDB(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    if (!db) reject('Not Read DB');
    const copyDB = [...db] as Product[];
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

export function deleteProductDB(id: number) {
  return new Promise((resolve, reject) => {
    if (!db) reject('Not Read DB');
    const index = db.findIndex((product) => product.id === id);
    if (index === -1) reject('Not Found Product');
    db.splice(index, 1);
    resolve(db);
  });
}

const db = [
  {
    id: 1,
    category: '반지',
    url: 'https://cdn.amondz.com/product/30592/resize/mainImg/PSI_836624.jpeg?v=1670340958033',
    brand: '플릿',
    name: '해류 흐름 R04',
    price: 39000,
    freeDelivery: true,
  },
  {
    id: 2,
    category: '목걸이',
    url: 'https://cdn.amondz.com/product/78052/resize/mainImg/PSI_830671.jpeg?v=1669974330081',
    brand: '모움',
    name: "'Veining' 19N (Silver)",
    price: 108000,
    freeDelivery: true,
  },
  {
    id: 3,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/77386/resize/mainImg/PSI_819811.jpeg?v=1668948838940',
    brand: '제이리사',
    name: "'The rose' petal earrings",
    price: 50400,
    freeDelivery: false,
  },
  {
    id: 4,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/69507/resize/mainImg/PSI_833465.jpeg?v=1670210761895',
    brand: '페르토',
    name: 'PEBBLE EARRING',
    price: 68000,
    freeDelivery: false,
  },
  {
    id: 5,
    category: '목걸이',
    url: 'https://cdn.amondz.com/product/48685/resize/mainImg/PSI_494007.jpeg?v=1631849379246',
    brand: '프리모떼',
    name: 'TWINKLE CHAIN NECKLACE',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 6,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/43589/resize/mainImg/PSI_438899.jpeg?v=1623140001776',
    brand: '뒤테',
    name: '레터링 이어 클라이머, 루세테 화이트',
    price: 49000,
    freeDelivery: false,
  },
  {
    id: 7,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/39365/resize/mainImg/PSI_392928.jpeg?v=1617269383225',
    brand: '마마카사르',
    name: '브릴리언트 RD 실버 원터치 이어커프',
    price: 112500,
    freeDelivery: true,
  },
  {
    id: 8,
    category: '반지',
    url: 'https://cdn.amondz.com/product/55813/resize/mainImg/PSI_591787.jpeg?v=1645492748601',
    brand: '로이드',
    name: '로이드 STARRY LIGHT 14K 탄생석 하트 체인반지',
    price: 59900,
    freeDelivery: false,
  },
  {
    id: 9,
    category: '반지',
    url: 'https://cdn.amondz.com/product/76309/resize/mainImg/PSI_809085.jpeg?v=1667833517296',
    brand: '므아르',
    name: 'Heart mother of pearl ring',
    price: 65000,
    freeDelivery: true,
  },
  {
    id: 10,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/78005/resize/mainImg/PSI_827100.jpeg?v=1669641543963',
    brand: '테사니츠',
    name: 'sand texture earring(10mm)',
    price: 47700,
    freeDelivery: true,
  },
  {
    id: 11,
    category: '목걸이',
    url: 'https://cdn.amondz.com/product/52896/resize/mainImg/PSI_603480.jpeg?v=1646881330263',
    brand: '위아몬즈',
    name: 'DIA 솔리테어 프롱 위아몬즈 목걸이',
    price: 107000,
    freeDelivery: true,
  },
  {
    id: 12,
    category: '목걸이',
    url: 'https://cdn.amondz.com/product/46872/resize/mainImg/PSI_478117.jpeg?v=1628737569842',
    brand: '위아몬즈',
    name: '14K 라지 블링 체인 위아몬즈 목걸이',
    price: 54400,
    freeDelivery: true,
  },
  {
    id: 13,
    category: '귀걸이',
    url: 'https://cdn.amondz.com/product/50819/resize/mainImg/PSI_586979.jpeg?v=1644818480793',
    brand: 'a14',
    name: '14K 도트 스몰 원터치 귀걸이',
    price: 169150,
    freeDelivery: true,
  },
  {
    id: 14,
    category: '목걸이',
    url: 'https://cdn.amondz.com/product/58838/resize/mainImg/PSI_609742.jpeg?v=1647417137869',
    brand: 'a14',
    name: '14K 네츄럴 프레임 목걸이',
    price: 157240,
    freeDelivery: false,
  },
];
