import express from "express";
import { createProductController } from "./dependencies";

export const productRouter = express.Router();

productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);
