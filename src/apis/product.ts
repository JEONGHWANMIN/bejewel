import axios from 'axios';
import { type CreateProduct, type ProductsResponse } from 'src/types/product';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

export async function getProducts(page: number) {
  try {
    const result = await instance.get<ProductsResponse>(`/products?size=6&page=${page}`);
    return result.data;
  } catch (e) {
    throw new Error('전체 상품데이터 조회 실패');
  }
}

export async function createProduct(product: CreateProduct) {
  try {
    const result = await instance.post('/product', product);
    return result;
  } catch (e) {
    throw new Error('상품 등록 실패');
  }
}
