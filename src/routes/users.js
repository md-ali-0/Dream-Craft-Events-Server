import { Router } from "express";
import userSignIn from "../api/v1/users/userSignIn.js";
import userSignUp from "../api/v1/users/userSignUp.js";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)

export default router