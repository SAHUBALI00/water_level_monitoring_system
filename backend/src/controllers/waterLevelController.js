import WaterLevel from "../models/waterLevel.js";

export const postWaterLevel = async (req, res) => {
  try {
    const { tankId, level } = req.body;

    // Basic validation
    if (!tankId || level === undefined) {
      return res.status(400).json({ error: "tankId and level are required" });
    }

    console.log("Received POST data:", { tankId, level });

    const newEntry = new WaterLevel({ tankId, level });
    await newEntry.save();

    res.status(201).json({ message: "Water level saved" });
  } catch (err) {
    console.error("Error in postWaterLevel:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
};

export const getLatestLevel = async (req, res) => {
  try {
    const latest = await WaterLevel.findOne().sort({ timestamp: -1 });
    res.status(200).json(latest);
  } catch (err) {
    console.error("Error in getLatestLevel:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const getAllLevels = async (req, res) => {
  try {
    const levels = await WaterLevel.find().sort({ timestamp: -1 });
    res.status(200).json(levels);
  } catch (err) {
    console.error("Error in getAllLevels:", err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
