const express = require("express");
const {
  getAllEpicerie,
  getEpicerieById,
  updateEpicerie,
  deleteEpicerie,
  createEpicerie,
} = require("../services/Epicerie.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Epicerie
router.post("/", upload.single("image"), createEpicerie);

// Get all Epicerie
router.get("/", getAllEpicerie);

// Get a Epicerie by ID
router.get("/:id", getEpicerieById);

// Update a Epicerie
router.put("/:id", upload.single("image"), updateEpicerie);

// Delete a Epicerie
router.delete("/:id", deleteEpicerie);

module.exports = router;
