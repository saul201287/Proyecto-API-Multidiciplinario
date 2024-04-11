import { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[] | null>;
  createUser(
    id: string,
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    email: string,
    username: string,
    newPassword: string
  ): Promise<User | null>;
}
