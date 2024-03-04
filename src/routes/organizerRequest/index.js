import { Router } from "express";
import findAll from "../../api/v1/organizerRequest/controllers/findAll.js";
import postRequest from "../../api/v1/organizerRequest/controllers/postRequest.js";
import requestAccept from "../../api/v1/organizerRequest/controllers/requestAccept.js";
import requestReject from "../../api/v1/organizerRequest/controllers/requestReject.js";
import checkPendingRequest from "../../api/v1/organizerRequest/controllers/checkPendingRequest.js";
import singleRequest from "../../api/v1/organizerRequest/controllers/singleRequest.js";

const router = Router()
router.get('/request-organizer', findAll)
router.get('/check-pending-request', checkPendingRequest)
router.get('/single-request', singleRequest)
router.post('/request-organizer', postRequest)
router.put('/request-organizer/accept/:id', requestAccept)
router.put('/request-organizer/reject/:id', requestReject)

export default router