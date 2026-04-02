import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.json(restaurant);
});

export default router;