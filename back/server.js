require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const saléRoutes = require("./routes/salé.routes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/salé", saléRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database successfully!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection to database failed:", error.message);
  });
