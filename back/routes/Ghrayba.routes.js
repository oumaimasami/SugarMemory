const express = require("express");
const {
  getAllGhrayba,
  getGhraybaById,
  updateGhrayba,
  deleteGhrayba,
  createGhrayba,
} = require("../services/Ghrayba.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Ghrayba
router.post("/", upload.single("image"), createGhrayba);

// Get all Ghrayba
router.get("/", getAllGhrayba);

// Get a Ghrayba by ID
router.get("/:id", getGhraybaById);

// Update a Ghrayba
router.put("/:id", upload.single("image"), updateGhrayba);

// Delete a Ghrayba
router.delete("/:id", deleteGhrayba);

module.exports = router;
