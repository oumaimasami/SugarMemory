const mongoose = require("mongoose");

const epicerieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Epicerie = mongoose.model("Epicerie", epicerieSchema);

module.exports = Epicerie;
