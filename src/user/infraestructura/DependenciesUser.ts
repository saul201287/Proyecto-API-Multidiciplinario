import { PutUserUseCase } from "../app/PutUserUseCase";
import { GetAllUserUseCase } from "../app/GetAllUserUserCase";
import { GetOneUserUseCase } from "../app/GetOneUserUseCase";
import { CreateUserUseCase } from "../app/CreateUserUseCase";
import { PutUserController } from "./controllers/PutUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { GetOneUserController } from "./controllers/GetOneUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { Bcrypt } from "./servicesBcrypt/Bcrypt";

const mysqlUsertRepository = new MysqlUserRepository();
const bcrypt = new Bcrypt();

const putUserUseCase = new PutUserUseCase(mysqlUsertRepository);
const getAllUserUseCase = new GetAllUserUseCase(mysqlUsertRepository);
const getOneUserUseCase = new GetOneUserUseCase(mysqlUsertRepository, bcrypt);
const createUserUseCase = new CreateUserUseCase(mysqlUsertRepository, bcrypt);

export const putUserController = new PutUserController(putUserUseCase);
export const getAllUserController = new GetAllUserController(getAllUserUseCase);
export const getOneUserController = new GetOneUserController(getOneUserUseCase);
export const createUserController = new CreateUserController(createUserUseCase);
