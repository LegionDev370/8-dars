import mongoose, { Schema } from "mongoose";

const salesProductsSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: true,
    },
    price: {
      type: Number,
    },
    count: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

export const SalesProductsModel = mongoose.model(
  "sales_products",
  salesProductsSchema
);
