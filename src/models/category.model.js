import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("categories", categorySchema);

export default CategoryModel;
