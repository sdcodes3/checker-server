import express from "express";
import cors from "cors";
import supabase from "./supabase";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const { data, error } = await supabase.from("your_table").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
