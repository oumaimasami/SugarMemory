const Salé = require("../models/Salé.model");

// Create a new Salé
const createSalé = async (req, res) => {
  try {
    const { name, price, description, type } = req.body;

    // Validate that the type is one of the four options
    if (
      ![
        "Salé Panaché",
        "Salé Prestige",
        "Salé Classique",
        "Salé Royal",
      ].includes(type)
    ) {
      return res.status(400).json({ message: "Invalid type for Salé" });
    }

    const salé = await Salé.create({ name, price, description, type });
    res.status(201).json(salé);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Salé
const getAllSalé = async (req, res) => {
  try {
    const salés = await Salé.find();
    res.status(200).json(salés);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Salé by ID
const getSaléById = async (req, res) => {
  try {
    const salé = await Salé.findById(req.params.id);
    if (!salé) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json(salé);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Salé by ID
const updateSalé = async (req, res) => {
  try {
    const updatedSalé = await Salé.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedSalé) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json(updatedSalé);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Salé by ID
const deleteSalé = async (req, res) => {
  try {
    const deletedSalé = await Salé.findByIdAndDelete(req.params.id);
    if (!deletedSalé) {
      return res.status(404).json({ message: "Salé not found" });
    }
    res.status(200).json({ message: "Salé deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSaléByType = async (req, res) => {
  try {
    const { type } = req.params;

    // Validate the type
    if (
      ![
        "Salé Panaché",
        "Salé Prestige",
        "Salé Classique",
        "Salé Royal",
      ].includes(type)
    ) {
      return res.status(400).json({ message: "Invalid type for Salé" });
    }

    const salés = await Salé.find({ type });
    res.status(200).json(salés);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getSaléByType,
  createSalé,
  getAllSalé,
  getSaléById,
  updateSalé,
  deleteSalé,
};
