const mongoose = require("mongoose");

const datteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
  },
});

const Datte = mongoose.model("Datte", datteSchema);

module.exports = Datte;
