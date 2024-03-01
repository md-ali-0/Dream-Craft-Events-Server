// contact route

import { Router } from "express";
import postContact from "../api/v1/contact/postContact.js";
import allContacts from "../api/v1/contact/allContacts.js";


const router = Router();

router.post('/contact', postContact);
router.get('/contact',allContacts); 

export default router;
