const express = require("express");
const {
  getAllZouza,
  getZouzaById,
  updateZouza,
  deleteZouza,
  createZouza,
} = require("../services/Zouza.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Salé
router.post("/", upload.single("image"), createZouza);

// Get all Salé
router.get("/", getAllZouza);

// Get a Salé by ID
router.get("/:id", getZouzaById);

// Update a Salé
router.put("/:id", upload.single("image"), updateZouza);

// Delete a Salé
router.delete("/:id", deleteZouza);

module.exports = router;
