import { Router } from "express";
import categoryController from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/category", (req, res) => {
  return new categoryController().addCategoryController(req, res);
});
categoryRouter.get("/categories/:id", (req, res) => {
  return new categoryController().getOneCategoryController(req, res);
});

export default categoryRouter;
