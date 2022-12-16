import axios from "axios";
import { type Product } from "src/types/product";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export async function getProducts() {
  const result = await instance.get<Product[]>("/products");
  return result.data;
}
