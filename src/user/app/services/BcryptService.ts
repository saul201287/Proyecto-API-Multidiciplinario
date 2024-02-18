import { BcryptOptions } from "../../domain/services/Bcrypt";

export class BcryptService {
    constructor(readonly options: BcryptOptions) {}
    async run(password: string): Promise<string | null>{
        try {
            const passwordEncript = await this.options.encodePassword(password);
            return passwordEncript;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async runcompare(password: string, password2: string): Promise<boolean | null> {
        try {
            const pass = await this.options.compareTo(password, password2);
            return pass;
        } catch (error) {
            console.log(error);
            return null;
        }

    }
}