const mongoose = require("mongoose");

const ghraybaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Ghrayba = mongoose.model("Ghrayba", ghraybaSchema);

module.exports = Ghrayba;
