import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductSchema } from "../schemas/products.schema.js";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getBrans,
  getProductByBrand,
  getNewProducts
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.get("/products", getProducts);

router.post(
  "/products",
  upload,
  createProduct
);


router.get("/products/:id", getProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

//? consultas por marca
router.get("/brands", getBrans);

router.get("/brands/:brand", getProductByBrand);

//? octener los ultimos productos
router.get('/new/products',getNewProducts)

export default router;
