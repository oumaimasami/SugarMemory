const mongoose = require("mongoose");

const SaléSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Salé Panaché", "Salé Prestige", "Salé Classique", "Salé Royal"],
      required: true,
    },
  },
  {
    Timestamp: true,
  }
);

const Salé = mongoose.model("Salé", SaléSchema);
module.exports = Salé;
