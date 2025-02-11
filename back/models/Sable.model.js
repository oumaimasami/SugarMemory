const mongoose = require("mongoose");

const sableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Sable = mongoose.model("Sable", sableSchema);

module.exports = Sable;
