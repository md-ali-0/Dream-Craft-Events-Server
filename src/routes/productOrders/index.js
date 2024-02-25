import { Router } from "express";
import findAll from "../../api/v1/productOrders/controllers/findAll.js";
import postOrders from "../../api/v1/productOrders/controllers/postOrders.js";

const router = Router();
router.get("/product-orders", findAll);
router.post("/product-orders", postOrders);

export default router;
