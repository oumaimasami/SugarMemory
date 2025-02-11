const Mignardise = require("../models/Mignardise.model");

// Create a new Sucre
const createMignardise = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Stocker le chemin de l'image

    // Create the Salé document in the database
    const mignardise = await Mignardise.create({
      name,
      price,
      description,
      type,
      image,
    });

    // Respond with the created document
    res.status(201).json(mignardise);
  } catch (error) {
    // Handle server or database errors
    res.status(500).json({ message: error.message });
  }
};

// Get all Sucre
const getAllMignardise = async (req, res) => {
  try {
    const mignardises = await Mignardise.find();
    res.status(200).json(mignardises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Sucre by ID
const getMignardiseById = async (req, res) => {
  try {
    const mignardise = await Mignardise.findById(req.params.id);
    if (!mignardise) {
      return res.status(404).json({ message: "Mignardise not found" });
    }
    res.status(200).json(mignardise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Mignardise by ID
const updateMignardise = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`; // Mettre à jour l'image si fournie
    }

    const updatedMignardise = await Mignardise.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedMignardise) {
      return res.status(404).json({ message: "Mignardise not found" });
    }
    res.status(200).json(updatedMignardise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Mignardise by ID
const deleteMignardise = async (req, res) => {
  try {
    const deletedMignardise = await Mignardise.findByIdAndDelete(req.params.id);
    if (!deletedMignardise) {
      return res.status(404).json({ message: "Mignardise not found" });
    }
    res.status(200).json({ message: "Mignardise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMignardiseByType = async (req, res) => {
  try {
    const { type } = req.params;
    const mignardises = await Mignardise.find({ type });
    res.status(200).json(mignardises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getMignardiseByType,
  createMignardise,
  getAllMignardise,
  getMignardiseById,
  updateMignardise,
  deleteMignardise,
};
