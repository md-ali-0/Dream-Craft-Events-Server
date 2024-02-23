// contact route

import { Router } from "express";
import postContact from "../api/v1/contact/postContact.js";


const router =Router()

router.post('/contact', postContact)

export default router