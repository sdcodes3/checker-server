import express from "express";
import { getPaperById, getPapers } from "../controllers/paperController";

const router = express.Router();

// Sub routes
router.get("/", getPapers);
router.get("/:id", getPaperById);

export default router;
