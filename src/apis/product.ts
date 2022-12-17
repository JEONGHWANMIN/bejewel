import axios from "axios";
import { type ProductsResponse } from "src/types/product";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export async function getProducts(page: number) {
  const result = await instance.get<ProductsResponse>(
    `/products?size=6&page=${page}`
  );
  return result.data;
}
