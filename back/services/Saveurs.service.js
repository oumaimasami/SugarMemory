const Saveur = require("../models/Saveurs.model");

// Créer un Saveur avec upload d'image
const createSaveur = async (req, res) => {
  try {
    const { name, link } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image

    // Création du document
    const saveur = await Saveur.create({ name, link, image });

    res.status(201).json(saveur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les Saveurs
const getAllSaveur = async (req, res) => {
  try {
    const saveurs = await Saveur.find();
    res.status(200).json(saveurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un Saveur par ID
const getSaveurById = async (req, res) => {
  try {
    const saveur = await Saveur.findById(req.params.id);
    if (!saveur) {
      return res.status(404).json({ message: "Saveur not found" });
    }
    res.status(200).json(saveur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un Saveur
const updateSaveur = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedSaveur = await Saveur.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSaveur) {
      return res.status(404).json({ message: "Saveur not found" });
    }
    res.status(200).json(updatedSaveur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un Saveur
const deleteSaveur = async (req, res) => {
  try {
    const deletedSaveur = await Saveur.findByIdAndDelete(req.params.id);
    if (!deletedSaveur) {
      return res.status(404).json({ message: "Saveur not found" });
    }
    res.status(200).json({ message: "Saveur deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSaveur,
  getAllSaveur,
  getSaveurById,
  updateSaveur,
  deleteSaveur,
};
