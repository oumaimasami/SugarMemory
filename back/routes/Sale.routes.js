const express = require("express");
const {
  getSaleByType,
  createSale,
  getAllSale,
  getSaleById,
  updateSale,
  deleteSale,
} = require("../services/Sale.service");

const upload = require("../Middleware/Upload");

const router = express.Router();

// Route pour créer un Salé avec image
router.post("/", upload.single("image"), createSale);

// Routes standards
router.get("/", getAllSale);
router.get("/:id", getSaleById);
router.get("/type/:type", getSaleByType);
router.put("/:id", upload.single("image"), updateSale);
router.delete("/:id", deleteSale);

module.exports = router;
