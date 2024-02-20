import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { IBcryptOptions } from "../domain/services/Bcrypt";
import { INodeMailer } from "../domain/services/NodeMailer";
import { IWebToken } from "../domain/services/WebTokens";

export class CreateUserUseCase {
  constructor(
    readonly userRepository: UserRepository,
    readonly options: IBcryptOptions,
    readonly nodeMailer: INodeMailer,
    readonly webToken: IWebToken
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
     
      let tokenNew = await this.webToken.singToken(
        nombre,
        String(process.env.SECRET_TOKEN),
        100 * 100
      );
      console.log(tokenNew);
      
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
