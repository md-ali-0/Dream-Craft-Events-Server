import { Router } from "express";
import payment from "../../api/v1/sslcommerz/getPayment.js";
import transId from "../../api/v1/sslcommerz/transId.js";

const router = Router()
router.post('/order', payment)
router.post('/payment/success/:tranId', transId)

export default router;