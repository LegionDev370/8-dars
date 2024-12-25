import categoryService from "../services/category.service.js";

class categoryController {
  constructor() {
    this.categoryService = new categoryService();
  }
  async addCategoryController(req, res) {
    try {
      const { category_name } = req.body;
      const data = await this.categoryService.addCategory(category_name);
      if (data) {
        res.statusCode = 201;
        res.json({
          message: "category created",
          success: true,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  async getOneCategoryController(req, res) {
    try {
      const { id: categoryId } = req.params;
      const data = await this.categoryService.getOneCategory(categoryId);
      if (data) {
        res.statusCode = 200;
        res.json(data);
      }
    } catch (error) {
      if (error.message === "CATEGORY-NOT-FOUND") {
        res.statusCode = 400;
        res.json({
          message: "category not found",
        });
      }
      console.error(error.message);
    }
  }
}

export default categoryController;
