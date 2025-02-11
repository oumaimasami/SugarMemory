const Gateau = require("../models/Gateau.model");

// Create a new Gateau
const createGateau = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image
    // Create the Gateau document in the database
    const gateau = await Gateau.create({
      name,
      price,
      description,
      type,
      image,
    });

    // Respond with the created document
    res.status(201).json(gateau);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Gateau
const getAllGateau = async (req, res) => {
  try {
    const gateaux = await Gateau.find();
    res.status(200).json(gateaux);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Gateau by ID
const getGateauById = async (req, res) => {
  try {
    const gateau = await Gateau.findById(req.params.id);
    if (!gateau) {
      return res.status(404).json({ message: "Gateau not found" });
    }
    res.status(200).json(gateau);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Gateau by ID
const updateGateau = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedGateau = await Gateau.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedGateau) {
      return res.status(404).json({ message: "Gateau not found" });
    }
    res.status(200).json(updatedGateau);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Gateau by ID
const deleteGateau = async (req, res) => {
  try {
    const deletedGateau = await Gateau.findByIdAndDelete(req.params.id);
    if (!deletedGateau) {
      return res.status(404).json({ message: "Gateau not found" });
    }
    res.status(200).json({ message: "Gateau deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGateau,
  getGateauById,
  updateGateau,
  deleteGateau,
  createGateau,
};
