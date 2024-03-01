import { Router } from "express";
import payment from "../../api/v1/sslcommerz/getPayment.js";
import transId from "../../api/v1/sslcommerz/transId.js";
import allPaymentHistory from "../../api/v1/sslcommerz/allPaymentHistory.js";

const router = Router()
router.post('/order', payment)
router.post('/payment/success/:tranId', transId)
router.get('/order/:email', allPaymentHistory)

export default router;