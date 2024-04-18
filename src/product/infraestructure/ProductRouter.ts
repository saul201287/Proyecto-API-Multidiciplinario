import express from "express";

import {
  createProductController,
  getAllProductController,
  getByIdProductController,
} from "./dependencies";

export const productRouter = express.Router();

productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);
productRouter.get(
  "/:id",
  getByIdProductController.run.bind(getByIdProductController)
);
productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
);
