export interface IWebToken {
    //TODO: cambiar el tipo de dato del id cuando implemente un generador de id
    singToken(id:string,secret:string, expiresIn:number): Promise<string | null>;
}