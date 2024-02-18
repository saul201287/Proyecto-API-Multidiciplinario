export class User{
    constructor(
      readonly id: number,
      readonly nombre: string,
      readonly apellidoP: string,
      readonly apellidoM: string,
      readonly email: string,
      readonly username: string,
      readonly password: string
    ) {}
  }