import express from "express";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes";
import paperRoutes from "./routes/paperRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/questions", questionRoutes);
app.use("/paper", paperRoutes)

export default app;
