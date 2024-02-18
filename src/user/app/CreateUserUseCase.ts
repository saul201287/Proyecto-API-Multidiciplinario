import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { BcryptOptions } from "../domain/services/Bcrypt";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository, readonly options: BcryptOptions) {}

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
      return null;
    }
  }
}
