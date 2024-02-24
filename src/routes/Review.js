// review route

import { Router } from "express";
import postReview from "../api/v1/review/postReview.js";
import getReview from "../api/v1/review/getReview.js";



const router =Router()

router.post('/review', postReview)
router.get('/review', getReview)

export default router