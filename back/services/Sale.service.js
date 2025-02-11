const Sale = require("../models/Sale.model");

// Créer un Salé avec upload d'image
const createSale = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image

    // Validation du type
    if (
      ![
        "Salé Panaché",
        "Salé Prestige",
        "Salé Classique",
        "Salé Royal",
        "Zouza",
        "Cornet",
        "Fricassé",
      ].includes(type)
    ) {
      return res.status(400).json({ message: "Invalid type for Salé" });
    }

    // Création du document
    const sale = await Sale.create({ name, price, description, type, image });

    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les Salés
const getAllSale = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un Salé par ID
const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un Salé
const updateSale = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedSale = await Sale.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSale) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un Salé
const deleteSale = async (req, res) => {
  try {
    const deletedSale = await Sale.findByIdAndDelete(req.params.id);
    if (!deletedSale) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json({ message: "Salé deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer les Salés par type
const getSaleByType = async (req, res) => {
  try {
    const { type } = req.params;

    if (
      ![
        "Salé Panaché",
        "Salé Prestige",
        "Salé Classique",
        "Salé Royal",
        "Zouza",
        "Cornet",
        "Fricassé",
      ].includes(type)
    ) {
      return res.status(400).json({ message: "Invalid type for Salé" });
    }

    const sales = await Sale.find({ type });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSaleByType,
  createSale,
  getAllSale,
  getSaleById,
  updateSale,
  deleteSale,
};
