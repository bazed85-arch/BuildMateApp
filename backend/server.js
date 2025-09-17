import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BuildMate Backend API 🚀" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

