import { Router } from "express";
import allShops from "../api/v1/shop/allShops.js"



const router = Router()
router.get('/shops', allShops )


export default router