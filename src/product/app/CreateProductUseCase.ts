import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductResopitory";

export class CreateProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(
    name: string,
    description: string,
    price: number
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.createProduct(
        name,
        description,
        price
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}
