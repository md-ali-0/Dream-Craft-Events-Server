import { Router } from "express";
import allEvents from "../api/v1/events/allEvents.js";
import singleEvent from "../api/v1/events/singleEvent.js";

const router = Router()
router.get('/events', allEvents)
router.get('/event/:id', singleEvent)

export default router