import { GetAllUserUseCase } from "../app/GetAllUserUserCase";
import { CreateUserUseCase } from "../app/CreateUserUseCase";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { EncryptServices } from "./helpers/EncryptServices";
import { IdServices } from "./helpers/IdServices";

const mysqlUsertRepository = new MysqlUserRepository();
const servicesEncrypt = new EncryptServices();
const idUser = new IdServices();

const getAllUserUseCase = new GetAllUserUseCase(mysqlUsertRepository);

const createUserUseCase = new CreateUserUseCase(
  mysqlUsertRepository,
  servicesEncrypt,
  idUser
);

export const getAllUserController = new GetAllUserController(getAllUserUseCase);
export const createUserController = new CreateUserController(createUserUseCase);
