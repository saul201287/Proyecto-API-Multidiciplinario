import { compare, hash } from "bcryptjs";
import { BcryptOptions } from "../../domain/services/Bcrypt";

export class Bcrypt implements BcryptOptions {
  async encodePassword(password: string): Promise<string> {
    const newPassword = await hash(password, 10);
    return newPassword;
  }

  async compareTo(
    password: string,
    hashedPassword: string
  ): Promise<boolean | null> {
    const result = await compare(password, hashedPassword);

    return result;
  }
}
