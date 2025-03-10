import express from "express";
import { getPaperByFacultyId, getPaperById, getPapers } from "../controllers/paperController";

const router = express.Router();

// Sub routes
router.get("/", getPapers);
router.get("/faculty/:id", getPaperByFacultyId);
router.get("/:id", getPaperById);

export default router;
