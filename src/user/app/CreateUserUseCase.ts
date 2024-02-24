import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { IEncryptServices } from "./services/IEncryptServices";
import { INodeMailer } from "../domain/services/INodeMailer";
import { WebTokenService } from "./services/WebTokensServices";

export class CreateUserUseCase {
  constructor(
    readonly userRepository: UserRepository,
    readonly options: IEncryptServices,
    readonly nodeMailer: INodeMailer,
    readonly webToken: WebTokenService
  ) {}

  async run(
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    username: string,
    email: string,
    password: string,
    token: string | null
  ): Promise<User | null> {
    try {
      const newPassword = await this.options.encodePassword(password);
      //await this.nodeMailer.sendMail(email, nombre);
     
      let tokenNew = await this.webToken.run(
        nombre,
        String(process.env.SECRET_TOKEN),
        100 * 100
      );
      console.log(tokenNew + "44");
      
      const user: any = await this.userRepository.createUser(
        nombre,
        apellidoP,
        apellidoM,
        email,
        username,
        newPassword,
        tokenNew,
      );
      if (user) return user;

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
