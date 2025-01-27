import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes"; // Import your routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Enable JSON body parsing

// API Routes
app.use("/api", routes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
