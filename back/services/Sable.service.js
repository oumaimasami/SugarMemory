const Sable = require("../models/Sable.model");

// Create a new Sable
const createSable = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Salé document in the database
    const sable = await Sable.create({ name, price, description, type, image });

    // Respond with the created document
    res.status(201).json(sable);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Sable
const getAllSable = async (req, res) => {
  try {
    const sables = await Sable.find();
    res.status(200).json(sables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Sable by ID
const getSableById = async (req, res) => {
  try {
    const sable = await Sable.findById(req.params.id);
    if (!sable) {
      return res.status(404).json({ message: "Sable not found" });
    }
    res.status(200).json(sable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Sable by ID
const updateSable = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedSable = await Sable.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSable) {
      return res.status(404).json({ message: "Sable not found" });
    }
    res.status(200).json(updatedSable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Sable by ID
const deleteSable = async (req, res) => {
  try {
    const deletedSable = await Sable.findByIdAndDelete(req.params.id);
    if (!deletedSable) {
      return res.status(404).json({ message: "Sable not found" });
    }
    res.status(200).json({ message: "Sable deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSable,
  getSableById,
  updateSable,
  deleteSable,
  createSable,
};
