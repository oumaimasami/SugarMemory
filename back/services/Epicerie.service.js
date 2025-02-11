const Epicerie = require("../models/Epicerie.model");

// Create a new Epicerie
const createEpicerie = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Epicerie document in the database
    const epicerie = await Epicerie.create({
      name,
      price,
      description,
      type,
      image,
    });

    // Respond with the created document
    res.status(201).json(epicerie);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Epicerie
const getAllEpicerie = async (req, res) => {
  try {
    const epiceries = await Epicerie.find();
    res.status(200).json(epiceries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Epicerie by ID
const getEpicerieById = async (req, res) => {
  try {
    const epicerie = await Epicerie.findById(req.params.id);
    if (!epicerie) {
      return res.status(404).json({ message: "Epicerie not found" });
    }
    res.status(200).json(epicerie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Epicerie by ID
const updateEpicerie = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedEpicerie = await Epicerie.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEpicerie) {
      return res.status(404).json({ message: "Epicerie not found" });
    }
    res.status(200).json(updatedEpicerie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Epicerie by ID
const deleteEpicerie = async (req, res) => {
  try {
    const deletedEpicerie = await Epicerie.findByIdAndDelete(req.params.id);
    if (!deletedEpicerie) {
      return res.status(404).json({ message: "Epicerie not found" });
    }
    res.status(200).json({ message: "Epicerie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEpicerie,
  getEpicerieById,
  updateEpicerie,
  deleteEpicerie,
  createEpicerie,
};
