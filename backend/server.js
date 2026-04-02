import app from "./src/app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected successfully"))
  .catch((err) => console.log(err));

// Server 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port no:- ${PORT}`);
});