import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { BcryptOptions } from "../domain/services/Bcrypt";
import { NodeMailer } from "../domain/services/NodeMailer";

export class CreateUserUseCase {
  constructor(
    readonly userRepository: UserRepository,
    readonly options: BcryptOptions,
    readonly nodeMailer: NodeMailer
  ) {}

  async run(
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    username: string,
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const newPassword = await this.options.encodePassword(password);
      await this.nodeMailer.sendMail(email, nombre);
      const user = await this.userRepository.createUser(
        nombre,
        apellidoP,
        apellidoM,
        email,
        username,
        newPassword
      );
      return user;
    } catch (error) {
      console.log(error);
      
      return null;
    }
  }
}
