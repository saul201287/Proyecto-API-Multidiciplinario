import { Request, Response } from "express";
import { CreateProductUseCase } from "../../app/CreateProductUseCase";

export class CreateProductController {
  constructor(readonly createProductUseCase: CreateProductUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const product = await this.createProductUseCase.run(
        data.name,
        data.description,
        data.price
      );

      if (product)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: product?.id,
            name: product?.name,
            description: product?.description,
            price: product?.price,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
