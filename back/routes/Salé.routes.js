const express = require("express");
const {
  createSalé,
  getAllSalé,
  getSaléById,
  updateSalé,
  deleteSalé,
  getSaléByType,
} = require("../services/Salé.service");

const router = express.Router();

// Create a new Salé
router.post("/", createSalé);

// Get all Salé
router.get("/", getAllSalé);

//Get Salé by type
router.get("/type/:type", getSaléByType);

// Get a Salé by ID
router.get("/:id", getSaléById);

// Update a Salé
router.put("/:id", updateSalé);

// Delete a Salé
router.delete("/:id", deleteSalé);

module.exports = router;
