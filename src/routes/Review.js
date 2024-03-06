// review route

import { Router } from "express";
import postReview from "../api/v1/review/postReview.js";
import getReview from "../api/v1/review/getReview.js";
import userSpeceficReviews from "../api/v1/review/userSpeceficReviews.js"




const router =Router()

router.post('/review', postReview)
router.get('/review', getReview)
router.get('/review/:email',userSpeceficReviews)

export default router