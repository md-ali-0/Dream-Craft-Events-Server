import { Router } from "express";
import findAll from "../../api/v1/organizerRequest/controllers/findAll.js";
import postRequest from "../../api/v1/organizerRequest/controllers/postRequest.js";

const router = Router()
router.get('/request-organizer', findAll)
router.post('/request-organizer', postRequest)

export default router