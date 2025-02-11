const mongoose = require("mongoose");

const zouzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Zouza = mongoose.model("Zouza", zouzaSchema);

module.exports = Zouza;
