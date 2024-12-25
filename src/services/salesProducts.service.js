import { SalesProductsModel } from "../models/salesProducts.model.js";

class salesProductsService {
  constructor() {
    this.salesProductsModel = SalesProductsModel;
  }
  async addSaleProduct(body) {
    const data = await this.salesProductsModel.create(body);
    return data;
  }
  async getSaleProductsWithCounts() {
    const response = await this.salesProductsModel.aggregate([
      {
        $group: {
          _id: "$productId",
          totalCount: {
            $sum: "$count",
          },
          totalPrice: {
            $sum: "$price",
          },
        },
      },
      {
        $project: {
          product: "$_id",
          totalCount: 1,
          totalPrice: 1,
          _id: 0,
        },
      },
      {
        $unwind: "$product",
      },
      {
        $lookup: {
          localField: "product",
          foreignField: "_id",
          from: "products",
          as: "product",
          pipeline: [
            {
              $lookup: {
                localField: "category",
                foreignField: "_id",
                from: "categories",
                as: "category",
              },
            },
            {
              $unwind: "$category",
            },
          ],
        },
      },
    ]);
    return response;
  }
}
export default salesProductsService;
