import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { IEncryptServices } from "./services/IEncryptServices";
import { ICreateId } from "./services/ICreateId";

export class CreateUserUseCase {
  constructor(
    readonly userRepository: UserRepository,
    readonly options: IEncryptServices,
    readonly createId: ICreateId,
  ) {}

  async run(
    id: string,
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    username: string,
    email: string,
    password: string
  ): Promise<{user:User, token: string} | null> {
    try {
      const newPassword = await this.options.encodePassword(password);
      id =  this.createId.asignarId()
      
      
      const user: any = await this.userRepository.createUser(
        id,
        nombre,
        apellidoP,
        apellidoM,
        email,
        username,
        newPassword,
      );
     
      if (user) return user;

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
