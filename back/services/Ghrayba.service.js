const Ghrayba = require("../models/Ghrayba.model");

// Create a new Ghrayba
const createGhrayba = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Salé document in the database
    const ghrayba = await Ghrayba.create({
      name,
      price,
      description,
      type,
      image,
    });

    // Respond with the created document
    res.status(201).json(ghrayba);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Ghrayba
const getAllGhrayba = async (req, res) => {
  try {
    const ghraybas = await Ghrayba.find();
    res.status(200).json(ghraybas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Ghrayba by ID
const getGhraybaById = async (req, res) => {
  try {
    const ghrayba = await Ghrayba.findById(req.params.id);
    if (!ghrayba) {
      return res.status(404).json({ message: "Ghrayba not found" });
    }
    res.status(200).json(ghrayba);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Ghrayba by ID
const updateGhrayba = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedGhrayba = await Ghrayba.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedGhrayba) {
      return res.status(404).json({ message: "Ghrayba not found" });
    }
    res.status(200).json(updatedGhrayba);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Ghrayba by ID
const deleteGhrayba = async (req, res) => {
  try {
    const deletedGhrayba = await Ghrayba.findByIdAndDelete(req.params.id);
    if (!deletedGhrayba) {
      return res.status(404).json({ message: "Ghrayba not found" });
    }
    res.status(200).json({ message: "Ghrayba deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGhrayba,
  getGhraybaById,
  updateGhrayba,
  deleteGhrayba,
  createGhrayba,
};
