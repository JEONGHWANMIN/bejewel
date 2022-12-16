export interface Product {
  id: number;
  url: string | ArrayBuffer;
  brand: string;
  name: string;
  price: number;
  freeDelivery: boolean;
}
