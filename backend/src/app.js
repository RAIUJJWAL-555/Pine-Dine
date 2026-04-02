import express from "express";
import cors from "cors";

import authRoutes from "./routes/authroutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();

// Middlewares
app.use(cors());
// cors for safty concers and manageing origin requests 
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);

// Test api is working or not
app.get("/", (req, res) => {
  res.send("API is working ");
});

// Error handling server + initial
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;