import { Router } from "express";
import payment from "../../api/v1/sslcommerz/getPayment.js";

const router = Router()
router.post('/order', payment)

export default router;