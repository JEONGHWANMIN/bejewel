export interface ProductsResponse {
  products: Product[];
  totalPage: number;
}

export interface CreateProduct {
  url: string | ArrayBuffer;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}

export interface Product {
  id: string;
  url: string | ArrayBuffer;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}
