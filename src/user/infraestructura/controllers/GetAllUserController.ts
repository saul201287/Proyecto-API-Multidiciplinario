import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../app/GetAllUserUserCase";

export class GetAllUserController {
  constructor(readonly getAllUserUseCase: GetAllUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.getAllUserUseCase.run();
      console.log(users);
      if (users) {
        res.status(200).send({
          status: "success",
          data: users.map((user: any) => {
            return {
              id: user.id,
              nombre: user.nombre,
              apellidoP: user.apellidoP,
              apellidoM: user.apellidoM,
              username: user.username,
              email: user.email,
              password: user.password,
            };
          }),
        });
      } else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
