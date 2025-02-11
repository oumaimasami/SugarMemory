const express = require("express");
const {
  getMignardiseByType,
  createMignardise,
  getAllMignardise,
  getMignardiseById,
  updateMignardise,
  deleteMignardise,
} = require("../services/Mignardise.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Salé
router.post("/", upload.single("image"), createMignardise);

// Get all Salé
router.get("/", getAllMignardise);

//Get Salé by type
router.get("/type/:type", getMignardiseByType);

// Get a Salé by ID
router.get("/:id", getMignardiseById);

// Update a Salé
router.put("/:id", upload.single("image"), updateMignardise);

// Delete a Salé
router.delete("/:id", deleteMignardise);

module.exports = router;
