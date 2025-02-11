const express = require("express");
const {
  getSucreByType,
  createSucre,
  getAllSucre,
  getSucreById,
  updateSucre,
  deleteSucre,
} = require("../services/Sucre.service");
const upload = require("../Middleware/Upload");
const router = express.Router();

// Create a new Salé
router.post("/", upload.single("image"), createSucre);

// Get all Salé
router.get("/", getAllSucre);

//Get Salé by type
router.get("/type/:type", getSucreByType);

// Get a Salé by ID
router.get("/:id", getSucreById);

// Update a Salé
router.put("/:id", upload.single("image"), updateSucre);

// Delete a Salé
router.delete("/:id", deleteSucre);

module.exports = router;
