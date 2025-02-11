const Zouza = require("../models/Zouza.model");

// Create a new Zouza
const createZouza = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Salé document in the database
    const zouza = await Zouza.create({ name, price, description, type, image });

    // Respond with the created document
    res.status(201).json(zouza);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Zouza
const getAllZouza = async (req, res) => {
  try {
    const zouzas = await Zouza.find();
    res.status(200).json(zouzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Zouza by ID
const getZouzaById = async (req, res) => {
  try {
    const zouza = await Zouza.findById(req.params.id);
    if (!zouza) {
      return res.status(404).json({ message: "Zouza not found" });
    }
    res.status(200).json(zouza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Zouza by ID
const updateZouza = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedZouza = await Zouza.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedZouza) {
      return res.status(404).json({ message: "Zouza not found" });
    }
    res.status(200).json(updatedZouza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Zouza by ID
const deleteZouza = async (req, res) => {
  try {
    const deletedZouza = await Zouza.findByIdAndDelete(req.params.id);
    if (!deletedZouza) {
      return res.status(404).json({ message: "Zouza not found" });
    }
    res.status(200).json({ message: "Zouza deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllZouza,
  getZouzaById,
  updateZouza,
  deleteZouza,
  createZouza,
};
