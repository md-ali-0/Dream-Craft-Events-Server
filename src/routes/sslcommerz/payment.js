import { Router } from "express";
import payment from "../../api/v1/sslcommerz/getPayment.js";
import transId from "../../api/v1/sslcommerz/transId.js";
import allPaymentHistory from "../../api/v1/sslcommerz/allPaymentHistory.js";
import findAll from "../../api/v1/sslcommerz/findAll.js";
import paymentFail from "../../api/v1/sslcommerz/paymentFail.js";

const router = Router()
router.post('/order', payment)
router.post('/payment/success/:tranId', transId)
router.post('/payment/fail/:tranId', paymentFail)
router.get('/order/:email', allPaymentHistory)
router.get('/bookings', findAll)

export default router;