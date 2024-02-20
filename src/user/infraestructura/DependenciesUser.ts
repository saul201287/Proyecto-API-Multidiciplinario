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
import { NodeMailerService } from "./servicesEmail/NodeMailer";
import { WebTokensService } from "./servicesTokens/WebTokens";


const mysqlUsertRepository = new MysqlUserRepository();
const bcrypt = new Bcrypt();
const nodeMailer = new NodeMailerService();
const webTokens = new WebTokensService();

const putUserUseCase = new PutUserUseCase(mysqlUsertRepository);
const getAllUserUseCase = new GetAllUserUseCase(mysqlUsertRepository);
const getOneUserUseCase = new GetOneUserUseCase(mysqlUsertRepository, bcrypt);
const createUserUseCase = new CreateUserUseCase(mysqlUsertRepository, bcrypt, nodeMailer, webTokens);

export const putUserController = new PutUserController(putUserUseCase);
export const getAllUserController = new GetAllUserController(getAllUserUseCase);
export const getOneUserController = new GetOneUserController(getOneUserUseCase);
export const createUserController = new CreateUserController(createUserUseCase);
