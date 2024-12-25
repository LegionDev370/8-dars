import productService from "../services/product.service.js";

class productController {
  constructor() {
    this.productService = new productService();
  }
  async addProductController(req, res) {
    try {
      const body = req.body;
      const data = await this.productService.addProduct(body);
      if (data) {
        res.statusCode = 201;
        res.json({
          message: "product created",
          success: true,
        });
      }
    } catch (error) {
      console.error(error.message);
      if (error.message === "PRODUCT-FOUND") {
        res.statusCode = 400;
        res.json({
          message: "product already been existed",
          success: false,
        });
      }
    }
  }
}

export default productController;
