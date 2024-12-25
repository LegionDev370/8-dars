import salesProductsService from "../services/salesProducts.service.js";

class salesProductsController {
  constructor() {
    this.salesProductsService = new salesProductsService();
  }
  async addSaleProductController(req, res) {
    try {
      const body = req.body;
      const data = await this.salesProductsService.addSaleProduct(body);
      if (data) {
        res.statusCode = 201;
        res.json({
          message: "success",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  async getSaleProductsWithCountsController(req, res) {
    try {
      const data = await this.salesProductsService.getSaleProductsWithCounts();
      res.statusCode = 200;
      res.json(data);
    } catch (error) {
      console.error(error.message);
    }
  }
}
export default salesProductsController;
