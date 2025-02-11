const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
    enum: [
      "Zouza",
      "Salé Prestige",
      "Salé Panaché",
      "Salé Classique",
      "Salé Royal",
      "Cornet",
      "Fricassé",
    ],
  },
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
