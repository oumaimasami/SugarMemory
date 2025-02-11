const mongoose = require("mongoose");

const gateauSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Gateau = mongoose.model("Gateau", gateauSchema);

module.exports = Gateau;
