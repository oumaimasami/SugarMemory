const express = require("express");
const {
  createSaveur,
  getAllSaveur,
  getSaveurById,
  updateSaveur,
  deleteSaveur,
} = require("../services/Saveurs.service");

const upload = require("../Middleware/Upload");

const router = express.Router();

// Route pour créer un Saveur avec image
router.post("/", upload.single("image"), createSaveur);

// Routes standards
router.get("/", getAllSaveur);
router.get("/:id", getSaveurById);
router.put("/:id", upload.single("image"), updateSaveur);
router.delete("/:id", deleteSaveur);

module.exports = router;
