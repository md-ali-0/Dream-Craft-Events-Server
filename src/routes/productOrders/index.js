import { Router } from "express";
import findAll from "../../api/v1/productOrders/controllers/findAll.js";
import postOrders from "../../api/v1/productOrders/controllers/postOrders.js";
import userSpeceficProducts from "../../api/v1/productOrders/controllers/userSpeceficProducts.js"


const router = Router();
router.get("/product-orders", findAll);
router.post("/product-orders", postOrders);
router.get('/product-orders/:email', userSpeceficProducts )

export default router;
