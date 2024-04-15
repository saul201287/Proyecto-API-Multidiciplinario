import { Product } from "./Product";

export interface ProductRepository {
  createProduct(
    name: string,
    description: string,
    price: number
  ): Promise<Product | null>;
}
