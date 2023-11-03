import mongoose from "mongoose";
import { MONGO_URI_KEY } from "./config.js";

export const connetDB = async () => {
  try {
    await mongoose.connect(MONGO_URI_KEY);
    console.log(">>> *** MONGODB *** <<<");
  } catch (error) {
    console.log(error);
  }
};
