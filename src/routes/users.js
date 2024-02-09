import { Router } from "express";
import authVerify from "../api/v1/auth/authVerify.js";
import userSignIn from "../api/v1/users/userSignIn.js";
import userSignUp from "../api/v1/users/userSignUp.js";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.post('/token-verify', authVerify)

export default router