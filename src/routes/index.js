import { Router } from "express";
import categoryRoutes from "./category.route.js";
import productRoutes from "./product.route.js";

const router = Router()

router.use('/product', productRoutes)
router.use('/category', categoryRoutes)

export default router