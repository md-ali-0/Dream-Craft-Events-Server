import { Router } from "express";
import allEvents from "../api/v1/events/allEvents.js";

const router = Router()
router.get('/all-events', allEvents)

export default router