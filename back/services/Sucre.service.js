const Sucre = require("../models/Sucre.model");

// Create a new Sucre
const createSucre = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Validate that the type is one of the allowed options
    if (!["Brownies", "Blondies", "Cookies", "Brookies"].includes(type)) {
      return res.status(400).json({ message: "Invalid type for Sucre" });
    }

    // Create the Salé document in the database
    const sucre = await Sucre.create({ name, price, description, type, image });

    // Respond with the created document
    res.status(201).json(sucre);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Sucre
const getAllSucre = async (req, res) => {
  try {
    const sucres = await Sucre.find();
    res.status(200).json(sucres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Sucre by ID
const getSucreById = async (req, res) => {
  try {
    const sucre = await Sucre.findById(req.params.id);
    if (!sucre) {
      return res.status(404).json({ message: "Sucre not found" });
    }
    res.status(200).json(sucre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Salé by ID
const updateSucre = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedSucre = await Sucre.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSucre) {
      return res.status(404).json({ message: "Sucre not found" });
    }
    res.status(200).json(updatedSucre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Sucre by ID
const deleteSucre = async (req, res) => {
  try {
    const deletedSucre = await Sucre.findByIdAndDelete(req.params.id);
    if (!deletedSucre) {
      return res.status(404).json({ message: "Sucre not found" });
    }
    res.status(200).json({ message: "Sucre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSucreByType = async (req, res) => {
  try {
    const { type } = req.params;

    // Validate the type
    if (!["Brownies", "Blondies", "Cookies", "Brookies"].includes(type)) {
      return res.status(400).json({ message: "Invalid type for Sucre" });
    }

    const sucres = await Sucre.find({ type });
    res.status(200).json(sucres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getSucreByType,
  createSucre,
  getAllSucre,
  getSucreById,
  updateSucre,
  deleteSucre,
};
