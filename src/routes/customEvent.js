import { Router } from "express"
import CustomEvents from "../api/v1/customEvent/customEventPost.js"
import findCustomEvent from "../api/v1/customEvent/findCustomEvent.js"
import updatePendingStatus from "../api/v1/customEvent/updatePendingStatus.js"
import updateReject from "../api/v1/customEvent/updateReject.js"
import inboxByUser from "../api/v1/customEvent/inboxByUser.js"
import updateSeenStatus from "../api/v1/customEvent/updateSeenStatus.js"

const router = Router()
router.post('/custom-event', CustomEvents)
router.get('/custom-event', findCustomEvent)
router.get('/custom-event/user', findCustomEvent)
router.get('/custom-event/inbox', inboxByUser)

//update data
router.patch('/custom-event/:id', updatePendingStatus)
router.patch('/custom-event/seen/:id', updateSeenStatus)
router.put('/custom-event/:id', updateReject)


export default router;