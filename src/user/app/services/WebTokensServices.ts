import { IWebToken } from "../../domain/services/IWebTokens";

export class WebTokenService {
  constructor(readonly webToken: IWebToken) {}
  async run(id: string, secret: string, expiresIn: number): Promise<string | null>{
    try {
      const token = await this.webToken.singToken(id, secret, expiresIn);
      return token;
    } catch (error) {
        console.log(error);
      return null;
    }
  }
}
