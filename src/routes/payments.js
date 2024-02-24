import { Router } from "express";
import payments from "../api/v1/payments/payments.js";


const router = Router()
router.get('/payments', payments)

export default router