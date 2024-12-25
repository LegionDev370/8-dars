import mongoose from "mongoose";
import CategoryModel from "../models/category.model.js";
class categoryService {
  constructor() {
    this.categoryModel = CategoryModel;
  }
  async addCategory(categoryName) {
    const data = await this.categoryModel.create({ name: categoryName });
    return data;
  }
  async getOneCategory(categoryId) {
    const category = await this.categoryModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(categoryId),
        },
      },
      {
        $lookup: {
          localField: "_id",
          foreignField: "category",
          from: "products",
          as: "products",
          pipeline: [
            {
              $project: {
                name: 1,
                price: 1,
                discountPrice: {
                  $subtract: ["$price", { $multiply: ["$price", 0.2] }],
                },
              },
            },
          ],
        },
      },
    ]);
    if (category !== null) {
      return category[0];
    }
    throw new Error("CATEGORY-NOT-FOUND");
  }
}

export default categoryService;
