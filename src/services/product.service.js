import ProductModel from "../models/product.model.js";

class productService {
  constructor() {
    this.productModel = ProductModel;
  }
  async addProduct(body) {
    const findProduct = await this.productModel.findOne({
      name: body.name,
    });
    if (findProduct !== null) {
      throw new Error("PRODUCT-FOUND");
    }
    const data = await this.productModel.create(body);
    return data;
  }
}

export default productService;
