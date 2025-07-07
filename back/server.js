require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const saleRoutes = require("./routes/Sale.routes");
const zouzaRoutes = require("./routes/Zouza.routes");
const sableRoutes = require("./routes/Sable.routes");
const sucreRoutes = require("./routes/Sucre.routes");
const datteRoutes = require("./routes/Datte.routes");
const ghraybaRoutes = require("./routes/Ghrayba.routes");
const epicerieRoutes = require("./routes/Epicerie.routes");
const gateauRoutes = require("./routes/Gateau.routes");
const mignardiseRoutes = require("./routes/Mignardise.routes");
const saveursRoutes = require("./routes/Saveurs.routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "https://sugarmemories.netlify.app", // Replace this with your React app's URL in production
  })
);

// Routes
app.use("/api/sale", saleRoutes);
app.use("/api/zouza", zouzaRoutes);
app.use("/api/sable", sableRoutes);
app.use("/api/sucre", sucreRoutes);
app.use("/api/dattes", datteRoutes);
app.use("/api/ghrayba", ghraybaRoutes);
app.use("/api/epicerie", epicerieRoutes);
app.use("/api/gateau", gateauRoutes);
app.use("/api/mignardise", mignardiseRoutes);
app.use("/api/saveurs", saveursRoutes);
app.use("/uploads", express.static("uploads"));

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
