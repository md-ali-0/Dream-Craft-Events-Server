import { Router } from "express";
import findAll from "../../api/v1/organizerRequest/controllers/findAll.js";
import postRequest from "../../api/v1/organizerRequest/controllers/postRequest.js";
import requestAccept from "../../api/v1/organizerRequest/controllers/requestAccept.js";
import requestReject from "../../api/v1/organizerRequest/controllers/requestReject.js";

const router = Router()
router.get('/request-organizer', findAll)
router.post('/request-organizer', postRequest)
router.put('/request-organizer/accept/:id', requestAccept)
router.put('/request-organizer/reject/:id', requestReject)

export default router