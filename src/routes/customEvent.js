import { Router } from "express"
import CustomEvents from "../api/v1/customEvent/customEventPost.js"
import findCustomEvent from "../api/v1/customEvent/findCustomEvent.js"

const router = Router()
router.post('/custom-event', CustomEvents)
router.get('/custom-event', findCustomEvent)
router.patch()

export default router;