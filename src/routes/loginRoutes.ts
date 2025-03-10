import express from "express";
import { getFaculty } from "../controllers/loginController";

const router = express.Router();

// Sub routes
router.post("/", getFaculty);

export default router;
