const express = require("express");
const {
  getAllDatte,
  getDatteById,
  updateDatte,
  deleteDatte,
  createDatte,
} = require("../services/Datte.service");
const upload = require("../Middleware/Upload");

const router = express.Router();

// Create a new Datte
router.post("/", upload.single("image"), createDatte);

// Get all Datte
router.get("/", getAllDatte);

// Get a Datte by ID
router.get("/:id", getDatteById);

// Update a Datte
router.put("/:id", upload.single("image"), updateDatte);

// Delete a Datte
router.delete("/:id", deleteDatte);

module.exports = router;
