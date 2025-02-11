const Datte = require("../models/Datte.model");

// Create a new Datte
const createDatte = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Salé document in the database
    const datte = await Datte.create({ name, price, description, type, image });

    // Respond with the created document
    res.status(201).json(datte);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Datte
const getAllDatte = async (req, res) => {
  try {
    const dattes = await Datte.find();
    res.status(200).json(dattes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Datte by ID
const getDatteById = async (req, res) => {
  try {
    const datte = await Datte.findById(req.params.id);
    if (!datte) {
      return res.status(404).json({ message: "Datte not found" });
    }
    res.status(200).json(datte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Datte by ID
const updateDatte = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedDatte = await Datte.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedDatte) {
      return res.status(404).json({ message: "Datte not found" });
    }
    res.status(200).json(updatedDatte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Datte by ID
const deleteDatte = async (req, res) => {
  try {
    const deletedDatte = await Datte.findByIdAndDelete(req.params.id);
    if (!deletedDatte) {
      return res.status(404).json({ message: "Datte not found" });
    }
    res.status(200).json({ message: "Datte deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDatte,
  getDatteById,
  updateDatte,
  deleteDatte,
  createDatte,
};
