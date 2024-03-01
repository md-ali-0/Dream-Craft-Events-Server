import { Router } from "express";
import adminStatistics from "../api/v1/dashboard/adminStatistics.js";

const router = Router();

router.get('/admin-statistics', adminStatistics); 

export default router;
