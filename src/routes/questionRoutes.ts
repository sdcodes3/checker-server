import express from "express";
import { getQuestions, getQuestionsById, getQuestionsByPaperId } from "../controllers/questionController";

const router = express.Router();

// Sub routes
router.get("/", getQuestions);
router.get("/:id", getQuestionsById);
router.get("/paper/:id", getQuestionsByPaperId)

export default router;
