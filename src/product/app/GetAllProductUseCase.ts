import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductResopitory";

export class GetAllProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(): Promise<Product[] | null> {
    try {
      const result = await this.productRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
