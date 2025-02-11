const mongoose = require("mongoose");

const sucreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
  type: {
    type: String,
    required: true,
    enum: ["Brownies", "Blondies", "Cookies", "Brookies"],
  },
});

const Sucre = mongoose.model("Sucre", sucreSchema);

module.exports = Sucre;
