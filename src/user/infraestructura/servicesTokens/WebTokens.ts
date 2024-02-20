import {sign} from "jsonwebtoken"
import { IWebToken } from "../../domain/services/WebTokens"

export class WebTokensService implements IWebToken{
    async  singToken(id: string, secret: string, expiresIn: number): Promise<string | null> {
        try {
            const token = sign(id, secret || "seguridad")    
           return token;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}