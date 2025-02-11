const express = require("express");
const {
  getAllSable,
  getSableById,
  updateSable,
  deleteSable,
  createSable,
} = require("../services/Sable.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Sable avec image
router.post("/", upload.single("image"), createSable);

// Get all Salé
router.get("/", getAllSable);

// Get a Salé by ID
router.get("/:id", getSableById);

// Update a Salé
router.put("/:id", upload.single("image"), updateSable);

// Delete a Salé
router.delete("/:id", deleteSable);

module.exports = router;
