const mongoose = require("mongoose");

const saveursSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: false },
});

const Saveurs = mongoose.model("Saveurs", saveursSchema);

module.exports = Saveurs;
