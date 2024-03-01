//

import { Router } from "express";
import postEmail from "../api/v1/newsletter/postEmail.js";

const router = Router();

router.post("/news", postEmail);

export default router;
