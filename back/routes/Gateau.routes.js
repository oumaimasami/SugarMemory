const express = require("express");
const {
  getAllGateau,
  getGateauById,
  updateGateau,
  deleteGateau,
  createGateau,
} = require("../services/Gateau.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Gateau
router.post("/", upload.single("image"), createGateau);

// Get all Gateau
router.get("/", getAllGateau);

// Get a Gateau by ID
router.get("/:id", getGateauById);

// Update a Gateau
router.put("/:id", upload.single("image"), updateGateau);

// Delete a Gateau
router.delete("/:id", deleteGateau);

module.exports = router;
