import { Router } from "express";
import userSignUp from "../api/v1/users/userSignUp.js";
import userSignIn from "../api/v1/users/userSignIn.js";

const router = Router()
router.post('/add-user', userSignUp)
router.post('/login-user', userSignIn)

export default router