import express from "express";
import {
  postWaterLevel,
  getLatestLevel,
  getAllLevels
} from "../controllers/waterLevelController.js";

const router = express.Router();

router.post('/water-level', postWaterLevel);
router.get("/latest", getLatestLevel);
router.get("/history", getAllLevels);

export default router;
