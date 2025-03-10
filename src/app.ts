import express from "express";
import cors from "cors";
import questionRoutes from "./routes/questionRoutes";
import paperRoutes from "./routes/paperRoutes";
import loginRoutes from "./routes/loginRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/questions", questionRoutes);
app.use("/paper", paperRoutes)
app.use("/login", loginRoutes)

export default app;
