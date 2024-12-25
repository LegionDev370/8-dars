import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("products", productSchema);

export default ProductModel;
