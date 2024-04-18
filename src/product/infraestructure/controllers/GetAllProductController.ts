import { Request, Response } from "express";
import { GetAllProductUseCase } from "../../app/GetAllProductUseCase";

export class GetAllProductController {
  constructor(readonly getAllProductUseCase: GetAllProductUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const products = await this.getAllProductUseCase.run();
      console.log(products);
      if (products)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: products.map((product: any) => {
            return {
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
