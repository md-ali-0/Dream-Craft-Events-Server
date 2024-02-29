import { Router } from "express"
import CustomEvents from "../api/v1/customEvent/customEventPost.js"
import findCustomEvent from "../api/v1/customEvent/findCustomEvent.js"
import updatePendingStatus from "../api/v1/customEvent/updatePendingStatus.js"
import updateReject from "../api/v1/customEvent/updateReject.js"

const router = Router()
router.post('/custom-event', CustomEvents)
router.get('/custom-event', findCustomEvent)
router.patch('/custom-event/:id', updatePendingStatus)
router.patch('/custom-event/reject/:id', updateReject)

export default router;