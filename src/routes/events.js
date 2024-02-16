import { Router } from "express";
import allEvents from "../api/v1/events/allEvents.js";
import editEvent from "../api/v1/events/editEvent.js";
import singleEvent from "../api/v1/events/singleEvent.js";

const router = Router()
router.get('/events', allEvents)
router.get('/event/:id', singleEvent)
router.get('/edit-event/:id', editEvent)

export default router