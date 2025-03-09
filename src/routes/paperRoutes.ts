import express from "express";
import { gePaperById, getPapers } from "../controllers/paperController";

const router = express.Router();

// Sub routes
router.get("/", getPapers);
router.get("/:id", gePaperById);

export default router;
