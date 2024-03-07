import { Router } from "express";
import authVerify from "../api/v1/auth/authVerify.js";
import allUsers from "../api/v1/users/allUsers.js";
import checkUserRole from "../api/v1/users/checkUserRole.js";
import editUser from "../api/v1/users/editUser.js";
import singleUser from "../api/v1/users/singleUser.js";
import userSignIn from "../api/v1/users/userSignIn.js";
import userSignUp from "../api/v1/users/userSignUp.js";
import userToOrganizer from "../api/v1/users/userToOrganizer.js";
import deleteUser from "../api/v1/users/deleteUser.js";
import updatePass from "../api/v1/users/updatePass.js";
import googleLogin from "../api/v1/users/googleLogin.js";
import "dotenv/config";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.get('/check-user-role/:email', checkUserRole)
router.post('/token-verify', authVerify)
router.post('/users', allUsers)
router.post('/user/:id', singleUser)
router.put('/edit-user/:id', editUser)
router.put('/update-pass/:id', updatePass)
router.put('/users/organizer/:userId', userToOrganizer)
router.delete('/delete-user/:id', deleteUser)
router.post('/google-login', googleLogin)


export default router