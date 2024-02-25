import { Router } from "express";
import allShops from "../api/v1/products/allProducts.js"
import postProducts from "../api/v1/products/postProducts.js";



const router = Router()
router.get('/products', allShops )
router.post("/products", postProducts);

export default router