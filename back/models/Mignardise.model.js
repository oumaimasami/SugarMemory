const mongoose = require("mongoose");

const mignardiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Mignardise = mongoose.model("Mignardise", mignardiseSchema);

module.exports = Mignardise;
