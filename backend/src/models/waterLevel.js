import mongoose from "mongoose";

const waterLevelSchema = new mongoose.Schema({
  tankId: { type: String, required: true },
  level: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const WaterLevel = mongoose.model("WaterLevel", waterLevelSchema);
export default WaterLevel;
