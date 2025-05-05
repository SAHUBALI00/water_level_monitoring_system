import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import waterLevelRoutes from "./routes/waterLevelRoutes.js";
import cors from "cors"

dotenv.config({ path: "./src/.env" });
const app = express();
app.use(               //adding a middleware
  cors({   
    origin:process.env.CORS_ORIGIN,
    credentials: true
  })
)
app.use(express.json());
app.use("/api/", waterLevelRoutes);
app.get('/', (req, res) => {
    res.send("API is working");
  });
  
connectDB();

export default app;
