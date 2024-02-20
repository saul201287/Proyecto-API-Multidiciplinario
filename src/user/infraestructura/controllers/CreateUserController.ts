import { Request, Response } from "express";
import { CreateUserUseCase } from "../../app/CreateUserUseCase";


export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    
    try {
      const user = await this.createUserUseCase.run(
        data.nombre,
        data.apellidoP,
        data.apellidoM,
        data.username,
        data.email,
        data.password,
        data.token
      );
      console.log(user);
      
      if (user)
      
        res.status(201).header("token",data.token).send({
          status: "success",
          data: {
            id: user?.id,
            nombre: user?.nombre,
            apellidoP: user?.apellidoP,
            apellidoM: user?.apellidoM,
            username: user?.username,
            email: user?.email,
            password: user?.password
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}
