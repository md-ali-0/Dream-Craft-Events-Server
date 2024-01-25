import { Router } from "express";
import userSignUp from "../api/v1/users/userSignUp.js";

const router = Router()
router.post('/add-user', userSignUp)

export default router