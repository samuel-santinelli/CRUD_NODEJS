import { Router } from "express";
import { CategoryControllers } from "./controllers/category";
import { ProductControllers } from "./controllers/products";

const router = Router();


const createProduct = new ProductControllers();
const createCategory = new CategoryControllers();

router.post("/product", createProduct.create);
router.post("/category", createCategory.create);

export { router };
