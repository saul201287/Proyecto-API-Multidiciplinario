import express from "express";
import {
  getAllUserController,
  createUserController,
} from "./DependenciesUser";
export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  getAllUserController
    .run(req, res)
    .then(() => {
      return null;
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        error: error,
        msg: "Error en el servidor",
      });
    });
});


userRouter.post("/", (req, res) => {
  createUserController
    .run(req, res)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      res.status(500).send({ error: err.message, msg: "Error en el servidor" });
    });
});
