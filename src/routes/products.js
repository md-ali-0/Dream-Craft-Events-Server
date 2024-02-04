import { Router } from "express";
import allShops from "../api/v1/products/allProducts.js"



const router = Router()
router.get('/products', allShops )


export default router