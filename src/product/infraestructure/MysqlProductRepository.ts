import { query } from "../../database/mysql";
import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductResopitory";

export class MysqlProductRepository implements ProductRepository {
  async getAll(): Promise<Product[] | null> {
    const sql = "SELECT * FROM product";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id,
            product.name,
            product.description,
            product.price
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Product | null> {
    const sql = "SELECT * FROM product WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Product(
        result[0].id,
        result[0].name,
        result[0].description,
        result[0].price
      );
    } catch (error) {
      return null;
    }
  }

  async createProduct(
    name: string,
    description: string,
    price: number
  ): Promise<Product | null> {
    const sql =
      "INSERT INTO product (name, description, price) VALUES (?, ?, ?)";
    const params: any[] = [name, description, price];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Product(result.insertId, name, description, price);
    } catch (error) {
      return null;
    }
  }
}
