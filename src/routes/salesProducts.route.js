import { Router } from "express";
import salesProductsController from "../controllers/salesProducts.controller.js";

const salesProductsRouter = Router();

salesProductsRouter.post("/sale-product", (req, res) => {
  return new salesProductsController().addSaleProductController(req, res);
});
salesProductsRouter.get("/sale-productsCounts", (req, res) => {
  return new salesProductsController().getSaleProductsWithCountsController(
    req,
    res
  );
});

export default salesProductsRouter;
