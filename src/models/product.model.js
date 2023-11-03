import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: [],
      required: true,
    },
    brand: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Product", productSchema);
