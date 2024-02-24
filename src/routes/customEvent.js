import { Router } from "express";
import customEvent from "../api/v1/customEvent/customEvent";

const router = Router()
router.post('/custom-event', customEvent)

export default router;