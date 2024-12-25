import { Router } from "express";
import productController from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/product", (req, res) => {
  return new productController().addProductController(req, res);
});

export default productRouter;
