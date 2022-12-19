export interface ProductsResponse {
  products: Product[];
  totalPage: number;
}

export interface CreateProduct {
  url: string | ArrayBuffer;
  category: Category;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}

export interface Product {
  id: string;
  url: string | ArrayBuffer;
  category: Category;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}

export type Category = '팔찌' | '목걸이' | '반지' | '귀걸이' | '';
