import { Router } from "express";
import findAll from "../../api/v1/organizerRequest/controllers/findAll";
import postRequest from "../../api/v1/organizerRequest/controllers/postRequest";

const router = Router()
router.get('/organizerRequest', findAll)
router.post('/organizerRequest', postRequest)

module.exports = router;